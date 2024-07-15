import { Card } from "@/components/card";
import { useAuthStore } from "@/store/auth";
import { AdminProfile } from "./parts/perfil/admin-profile";
import { ChangePasswordProfile } from "./parts/perfil/change-password";
import { EspecialistaProfile } from "./parts/perfil/especialista-profile";
import { PacienteProfile } from "./parts/perfil/paciente-profile";

const PerfilPage = () => {

    const user = useAuthStore((s) => s.account);

    return (
        <div className="p-4">
            <section className="flex gap-4 flex-wrap items-baseline">
                <Card className="p-10 grid gap-4">
                    <h1 className="text-2xl font-bold">Perfil</h1>
                    <hr />
                    {user?.account.rol === 'admin' &&
                        <AdminProfile user={user.user} account={user.account} />
                    }
                    {user?.account.rol === 'especialista' &&
                        <EspecialistaProfile user={user.user} account={user.account} />
                    }
                    {user?.account.rol === 'paciente' &&
                        <PacienteProfile user={user.user} account={user.account} />
                    }
                </Card>
                <Card className="p-10 grid gap-4 max-w-md">
                    <h1 className="text-2xl font-bold">Contraseña</h1>
                    <hr />
                    <ChangePasswordProfile />
                </Card>
            </section>
        </div>
    )
}

export default PerfilPage;