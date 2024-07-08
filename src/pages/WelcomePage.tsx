import { useAuthStore } from "@/store/auth";

const WelcomePage = () => {

    const user = useAuthStore((s) => s.account);

    return (
        <div className="p-4">
            <section>
                <h1>Bienvenido {user?.user.nombres}</h1>
            </section>
        </div>
    )
}

export default WelcomePage;