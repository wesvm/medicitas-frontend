import { useState } from "react"

export const LoginInfoAlertPart = () => {
    const [active, setActive] = useState(true);

    const handleClose = () => {
        setActive(false);
    };

    if (active)
        return (
            <div className="p-4 rounded-lg shadow-lg relative"
                style={{ backgroundColor: '#cfdaec' }}
            >
                <p className="text-center text-sm">
                    <span className="font-semibold">¡Importante! </span>
                    Si es tu primer ingreso a este sistema, tu usuario y contraseña es tu DNI, no olvides cambiar tu contraseña al entrar
                </p>
                <button className="focus:outline-none absolute top-4 right-2" onClick={handleClose}>
                    <svg className="size-5 text-gray-500 hover:text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 8.586L7.707 6.293a1 1 0 10-1.414 1.414L8.586 10l-2.293 2.293a1 1 0 101.414 1.414L10 11.414l2.293 2.293a1 1 0 101.414-1.414L11.414 10l2.293-2.293a1 1 0 10-1.414-1.414L10 8.586z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        )

    return null
}