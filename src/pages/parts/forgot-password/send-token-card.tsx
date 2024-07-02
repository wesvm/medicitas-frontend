import pwd_image from "@/assets/pwd-image.jpg"
import unam_logo from '@/assets/logo_unam.png'
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { forgotPassword } from "@/api/auth";
import { toast } from "sonner";
import { LoginInput } from "@/components/login-input";

interface SendTokenCardProps {
    setRecovery: (recovery: boolean) => void;
}

export const SendTokenCard = ({ setRecovery }: SendTokenCardProps) => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [dni, setDni] = useState("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        setLoading(true);
        const promise = forgotPassword(dni)
            .then((res) => {
                setRecovery(true);
                return res;
            })
            .catch((err) => {
                throw err;
            })
            .finally(() => {
                setLoading(false);
            });

        toast.promise(promise, {
            loading: 'Enviando token...',
            success: (res) => {
                return `${res.message}`;
            },
            error: 'Ingrese un DNI válido.'
        });
    }

    const handleBackLogin = () => {
        navigate('/')
    }

    return (
        <section className="bg-white px-8 rounded-lg shadow-lg mx-auto min-w-80 flex items-center space-x-8">
            <div className="grid gap-4 w-full">
                <header>
                    <img src={unam_logo} alt="logo unam" className="size-24 mx-auto" />
                    <h2 className="text-lg text-center font-semibold">Recuperar Contraseña</h2>
                </header>
                <form className="grid gap-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="dni" className="text-xs">Usuario (DNI): </label>
                        <LoginInput id="dni" name="dni" placeholder="76543210" type="text"
                            onChange={(e) => setDni(e.target.value)}
                            required
                            minLength={8}
                            maxLength={8}
                            disabled={loading} />
                    </div>

                    <Button variant="blue" className="md:w-80" type="submit" disabled={loading}>
                        Obtener Token de Recuperacion
                    </Button>
                </form>
                <footer className="mx-auto pb-4 md:pb-0">
                    <button onClick={handleBackLogin} className="text-center text-sm text-blue-800 hover:text-blue-900 underline font-medium">
                        Regresar al login
                    </button>
                </footer>
            </div>

            <img src={pwd_image} alt="Contraseña olvidada" className="hidden md:block h-[380px] w-[300px]" />
        </section>
    )
}