import logo_medicitas from '@/assets/logo_medicitas.jpg'
import unam_logo from '@/assets/logo_unam.png'

import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
import { PasswordInput } from '@/components/password-input'

export const LoginPage = () => {

    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/paciente')
    }

    return (
        <main className="bg-gray-100 h-svh">
            <section className="flex items-center py-24 max-w-4xl mx-auto gap-x-12">
                <div className="bg-white p-10 rounded-lg shadow-lg grid gap-4 min-w-80 mx-auto">
                    <header>
                        <img src={unam_logo} alt="logo unam" className="size-24 mx-auto" />
                        <h3 className="text-sm py-2 font-medium">Universidad Nacional de Moquegua</h3>
                        <h2 className="text-lg text-center font-bold">MEDICITAS</h2>
                    </header>
                    <hr />
                    <form className="grid gap-4">
                        <div>
                            <label htmlFor="user" className="text-xs">Usuario: </label>
                            <Input id="user" name="user" placeholder="76543210" type="text" />
                        </div>

                        <div>
                            <label htmlFor="password" className="text-xs">Contraseña: </label>
                            <PasswordInput id="password" name="password" placeholder="******" />
                        </div>

                        <Button variant="blue"
                            onClick={handleSubmit}
                        >
                            Ingresar
                        </Button>
                    </form>
                    <footer className="mx-auto">
                        <a href="/recuperar-contraseña" className="text-center text-sm text-blue-800 hover:text-blue-900 underline font-medium">
                            Olvidé mi contraseña
                        </a>
                    </footer>
                </div>
                <div className="bg-white p-10 rounded-lg shadow-lg hidden md:block w-full">
                    <h2 className="font-medium text-center text-lg">Directorio Telefónico - Soporte</h2>
                    <div className="mb-4">
                        <span>Para consultas del sistema</span>
                        <ul className="list-disc pl-10">
                            <li>971 894 857</li>
                            <li>944 828 090</li>
                        </ul>
                    </div>
                    <img src={logo_medicitas} alt="logo medicitas" className="w-64 rounded-xl mx-auto" />
                </div>
            </section>
        </main>
    )
}