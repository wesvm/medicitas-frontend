import pwd_image from "@/assets/pwd-image.jpg"
import unam_logo from '@/assets/logo_unam.png'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useNavigate } from "react-router-dom";

interface SendTokenCardProps {
    setRecovery: (recovery: boolean) => void;
}

export const SendTokenCard = ({ setRecovery }: SendTokenCardProps) => {

    const navigate = useNavigate();

    const handleSubmit = () => {
        setRecovery(true);
    }

    const handleBackLogin = () => {
        navigate('/')
    }

    return (
        <section className="bg-white px-8 rounded-lg shadow-lg mx-auto min-w-80 flex items-center space-x-8">
            <div className="grid gap-4">
                <header>
                    <img src={unam_logo} alt="logo unam" className="size-24 mx-auto" />
                    <h2 className="text-lg text-center font-semibold">Recuperar Contraseña</h2>
                </header>
                <form className="grid gap-4">
                    <div>
                        <label htmlFor="dni" className="text-xs">Usuario (DNI): </label>
                        <Input id="dni" name="dni" placeholder="76543210" type="text" />
                    </div>

                    <Button variant="blue" className="md:w-80"
                        onClick={handleSubmit}
                    >
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