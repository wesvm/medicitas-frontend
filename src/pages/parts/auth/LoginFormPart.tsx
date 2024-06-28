import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { useAuth } from "@/setup/AuthContext";

import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/password-input";
import { Button } from "@/components/ui/button";

export const LoginForm = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [dni, setDni] = useState("");
    const [password, setPassword] = useState("");

    const { logIn } = useAuth();

    const onSubmit = async () => {
        try {
            setLoading(true);
            await logIn(dni, password);
            toast.success("Login successful!");
            navigate('/dashboard')
        } catch (err) {
            if ((err as any).status === 401)
                throw new Error("Login failed..");

            toast.error("Bad credentials..");
            throw err;
        } finally {
            setLoading(false);
        }
    }

    return (
        <form className="grid gap-4">
            <label htmlFor="dni" className="text-xs">
                <span className="text-xs">Username:</span>
                <Input id="dni" name="dni" placeholder="76543210" type="text"
                    onChange={(e) => setDni(e.target.value)}
                    disabled={loading} />
            </label>

            <label htmlFor="password" className="text-xs">
                <span className="text-xs">Contraseña: </span>
                <PasswordInput id="password" name="password" placeholder="******"
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loading} />
            </label>

            <Button variant="blue" type="submit" onClick={onSubmit} disabled={loading}>
                Ingresar
            </Button>
        </form>
    )
}