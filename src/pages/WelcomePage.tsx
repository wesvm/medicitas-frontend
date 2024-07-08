import { Card } from "@/components/card";
import { useAuthStore } from "@/store/auth";

const WelcomePage = () => {

    const user = useAuthStore((s) => s.account);

    return (
        <div className="p-4">
            <section className="flex">
                <Card className="p-10 grid gap-4">
                    <h1 className="text-2xl text-center font-bold">Modulo de Medicitas</h1>
                    <hr />
                    <h2 className="text-lg font-semibold">
                        Bienvenido {user?.user.nombres} {user?.user.apellidos}!
                    </h2>
                </Card>
            </section>
        </div>
    )
}

export default WelcomePage;