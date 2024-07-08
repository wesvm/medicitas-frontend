import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <section>
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl">404</h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Pagina no encontrada.</p>
                    <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                        Perdón, ingresaste a una ruta incorrecta.
                    </p>
                    <Link to="/">
                        <Button className="px-4 py-2">
                            Regresar al inicio
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default NotFoundPage;