import { resetPassword } from "@/api/auth"
import { useRef, useState } from "react"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"

import pwd_image from "@/assets/pwd-image.jpg"
import unam_logo from "@/assets/logo_unam.png"

import { PasswordInput } from "@/components/password-input"
import { Button } from "@/components/ui/button"
import { LoginInput } from "@/components/login-input"

export const RecoveryPassword = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);

    const validatePassword = () => {
        if (passwordRef.current && confirmPasswordRef.current) {
            if (passwordRef.current.value !== confirmPasswordRef.current.value) {
                confirmPasswordRef.current.setCustomValidity("Passwords Don't Match");
            } else {
                confirmPasswordRef.current.setCustomValidity('');
            }
        }
    }

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget);
        const token = formData.get("token") as string;
        const password = formData.get("password") as string;
        const password_confirmation = formData.get("confirmPassword") as string;

        setLoading(true);
        const promise = resetPassword(token, password, password_confirmation)
            .then((res) => {
                navigate('/');
                return res;
            })
            .catch((err) => {
                throw err;
            })
            .finally(() => {
                setLoading(false);
            });

        toast.promise(promise, {
            loading: 'Cargando',
            success: (res) => {
                return `${res.message}`;
            },
            error: 'Datos invalidos..',
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
                <form className="grid gap-2" onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="token" className="text-xs">Token: </label>
                        <LoginInput id="token" name="token" placeholder="123123-123546" type="text"
                            required
                            disabled={loading} />
                    </div>

                    <div>
                        <label htmlFor="password" className="text-xs">Ingrese la nueva contraseña: </label>
                        <PasswordInput id="password" name="password" placeholder="******"
                            ref={passwordRef}
                            onChange={validatePassword}
                            required
                            disabled={loading} />
                    </div>

                    <div>
                        <label htmlFor="confirmPassword" className="text-xs">Ingrese la nueva contraseña nuevamente: </label>
                        <PasswordInput id="confirmPassword" name="confirmPassword" placeholder="******"
                            ref={confirmPasswordRef}
                            onKeyUp={validatePassword}
                            required
                            disabled={loading} />
                    </div>

                    <Button variant="blue" className="md:w-80" type="submit"
                        disabled={loading}>
                        Cambiar Contraseña
                    </Button>
                </form>
                <footer className="mx-auto pb-4">
                    <button onClick={handleBackLogin} className="text-center text-sm text-blue-800 hover:text-blue-900 underline font-medium">
                        Regresar al login
                    </button>
                </footer>
            </div>

            <img src={pwd_image} alt="Contraseña olvidada" className="hidden md:block h-[380px] w-[300px]" />
        </section>
    )
}