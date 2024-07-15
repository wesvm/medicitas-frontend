import { changePassword } from "@/api/auth";
import { PasswordInput } from "@/components/password-input"
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { toast } from "sonner";

export const ChangePasswordProfile = () => {

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
        const password = formData.get("password") as string;
        const password_confirmation = formData.get("confirmPassword") as string;

        setLoading(true);
        const promise = changePassword(password, password_confirmation)
            .then((res) => {
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
            error: 'Ocurrio un error..',
        });
    }

    return (
        <form className="grid items-start gap-4" onSubmit={onSubmit}>
            <label className="grid grid-cols-4 items-center gap-2">
                <span className="text-left">Nueva contraseña:</span>
                <div className="col-span-3">
                    <PasswordInput
                        name="password"
                        placeholder="******"
                        ref={passwordRef}
                        className=""
                        onChange={validatePassword}
                        disabled={loading}
                    />
                </div>
            </label>

            <label className="grid grid-cols-4 items-center gap-2">
                <span className="text-left">Repetir contraseña</span>
                <div className="col-span-3">
                    <PasswordInput
                        name="confirmPassword"
                        placeholder="******"
                        ref={confirmPasswordRef}
                        className=""
                        onKeyUp={validatePassword}
                        required
                        disabled={loading}
                    />
                </div>
            </label>
            <Button type="submit" disabled={loading}>Cambiar contraseña</Button>
        </form>
    )
}