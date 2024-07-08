import { useNavigate } from 'react-router-dom'

import logo_medicitas from '@/assets/logo_medicitas.jpg'
import unam_logo from '@/assets/logo_unam.png'
import { LoginForm } from '@/pages/parts/auth/LoginFormPart';
import { Card } from '@/components/card';
import { LoginInfoAlertPart } from './parts/auth/LoginInfoAlertPart';

const LoginPage = () => {

    const navigate = useNavigate();

    const handleForgotPasswordClick = () => {
        navigate('/recuperar-contraseña');
    };

    return (
        <main className="bg-gray-100 h-svh">
            <section className="flex items-center h-full max-w-4xl mx-auto gap-x-12">
                <Card className="p-10 grid gap-4 min-w-80 max-w-80 mx-auto">
                    <header>
                        <img src={unam_logo} alt="logo unam" className="size-24 mx-auto" />
                        <h3 className="text-sm py-2 font-medium text-center">
                            Universidad Nacional de Moquegua
                        </h3>
                        <h2 className="text-lg text-center font-bold">MEDICITAS</h2>
                    </header>
                    <LoginInfoAlertPart />
                    <hr />
                    <LoginForm />
                    <footer className="mx-auto">
                        <button onClick={handleForgotPasswordClick} className="text-center text-sm text-blue-800 hover:text-blue-900 underline font-medium">
                            Olvidé mi contraseña
                        </button>
                    </footer>
                </Card>
                <Card className="p-10 hidden md:block w-full">
                    <h2 className="font-medium text-center text-lg">Directorio Telefónico - Soporte</h2>
                    <div className="mb-4">
                        <span>Para consultas del sistema</span>
                        <ul className="list-disc pl-10">
                            <li>971 894 857</li>
                            <li>944 828 090</li>
                        </ul>
                    </div>
                    <img src={logo_medicitas} alt="logo medicitas" className="size-64 rounded-xl mx-auto" />
                </Card>
            </section>
        </main>
    )
}

export default LoginPage;