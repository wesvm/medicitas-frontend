import { Button } from "../ui/button"
import { Input } from "../ui/input"

import pwd_image from "@/assets/pwd-image.jpg"
import unam_logo from "@/assets/logo_unam.png"
import { PasswordInput } from "../password-input"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"

export const RecoveryPassword = () => {

    const navigate = useNavigate();

    const handleSubmit = () => {
        toast.success("Contraseña actualizada!")
        navigate('/')
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
                <form className="grid gap-2">
                    <div>
                        <label htmlFor="token" className="text-xs">Token: </label>
                        <Input id="token" name="token" placeholder="123123-123546" type="text" />
                    </div>

                    <div>
                        <label htmlFor="password" className="text-xs">Ingrese la nueva contraseña: </label>
                        <PasswordInput id="password" name="password" placeholder="******" />
                    </div>

                    <div>
                        <label htmlFor="confirmPassword" className="text-xs">Ingrese la nueva contraseña nuevamente: </label>
                        <PasswordInput id="confirmPassword" name="confirmPassword" placeholder="******" />
                    </div>

                    <Button variant="blue" className="md:w-80" onClick={handleSubmit}>
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