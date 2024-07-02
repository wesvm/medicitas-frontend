import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { useAuth } from "@/setup/AuthContext";

import { PasswordInput } from "@/components/password-input";
import { Button } from "@/components/ui/button";
import { LoginInput } from "@/components/login-input";

export const LoginForm = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [dni, setDni] = useState("");
    const [password, setPassword] = useState("");

    const { logIn } = useAuth();

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        setLoading(true);
        const promise = logIn(dni, password)
            .then(() => navigate('/dashboard'))
            .catch((err) => {
                throw err
            })
            .finally(() => {
                setLoading(false);
            });

        toast.promise(promise, {
            loading: 'Cargando',
            success: 'Ingresando!',
            error: 'Credenciales incorrectas.'
        });
    }

    return (
        <form className="grid gap-4" onSubmit={onSubmit}>
            <label htmlFor="dni" className="text-xs">
                <span className="text-xs">Username:</span>
                <LoginInput id="dni" name="dni" placeholder="76543210" type="text"
                    onChange={(e) => setDni(e.target.value)}
                    required
                    minLength={8}
                    maxLength={8}
                    disabled={loading} />
            </label>

            <label htmlFor="password" className="text-xs">
                <span className="text-xs">Contraseña: </span>
                <PasswordInput id="password" name="password" placeholder="******"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={loading} />
            </label>

            <Button variant="blue" type="submit" disabled={loading}>
                Ingresar
            </Button>
        </form>
    )
}