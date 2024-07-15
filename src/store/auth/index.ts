import { create } from 'zustand';
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer';

export interface AccountWithProfile {
    account: UserData;
    user: AdminData | PacienteAuthR | EspecialistaData;
};

interface AuthStore {
    account: AccountWithProfile | null;
    setAccount: (account: AccountWithProfile) => void;
    removeAccount(): void;
}

export const useAuthStore = create(persist(immer<AuthStore>((set) => ({
    account: null,
    setAccount: (acc) => set((s) => {
        s.account = acc;
    }),
    removeAccount: () => set((s) => { s.account = null }),
})),
    {
        name: 'user-info',
    }
));