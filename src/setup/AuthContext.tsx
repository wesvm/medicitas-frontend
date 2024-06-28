import { getAdmin } from "@/api/admin";
import { signIn } from "@/api/auth";
import { getPaciente } from "@/api/paciente";
import { getToken, getTokenExpiration, removeToken, setToken } from "@/api/token-service";
import { USER_ROLE } from "@/lib/const";
import { AccountWithProfile, useAuthStore } from "@/store/auth";
import { createContext, useContext } from "react";

interface AuthContextProps {
    isUserAuthenticated: () => boolean;
    logIn: (dni: string, password: string) => Promise<void>;
    logOut: () => void;
    profile: AccountWithProfile | null;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const roleFetchers: Record<string, (token: string) => Promise<any>> = {
    [USER_ROLE.ADMIN]: getAdmin,
    [USER_ROLE.PACIENTE]: getPaciente,
};

const AuthProvider = ({
    children
}: {
    children: React.ReactNode;
}) => {
    const account = useAuthStore((s) => s.account);
    const setAccount = useAuthStore((s) => s.setAccount);
    const removeAccount = useAuthStore((s) => s.removeAccount)

    const logIn = async (dni: string, password: string) => {
        try {
            const res = await signIn(dni, password);
            setToken(res.access_token);

            const fetchUser = roleFetchers[res.account.rol];
            const user = await fetchUser(res.access_token);

            const profileData: AccountWithProfile = {
                account: res.account,
                user
            };
            setAccount(profileData);
        } catch (error) {
            console.error(error);
            throw new Error("Login failed");
        }
    };

    const logOut = () => {
        removeAccount();
        removeToken();
    }

    const isUserAuthenticated = () => {
        const token = getToken();
        if (!token || !account || !account.account) return false;

        const exp = getTokenExpiration(token);
        if (exp) {
            logOut();
            return false;
        }

        return true;
    };

    return (
        <AuthContext.Provider value={{ isUserAuthenticated, logOut, logIn, profile: account }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export default AuthProvider;