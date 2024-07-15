import { updateEspecialista } from "@/api/especialista";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AccountWithProfile } from "@/store/auth"
import { useState } from "react";
import { toast } from "sonner";

export const EspecialistaProfile = ({ user, account }: AccountWithProfile) => {

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string[] }>({});
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name } = event.target;
        const updatedErrors = { ...errors };
        delete updatedErrors[name];
        setErrors(updatedErrors);
    };

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget);
        const email = formData.get("email") as string;
        const telefono = formData.get("telefono") as string;

        setLoading(true);
        const promise = updateEspecialista(email, telefono)
            .then((res) => {
                return res;
            })
            .catch((err) => {
                setErrors(err.errors);
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
            error: (err) => {
                return `Error: ${err.message}`;
            }
        });
    }

    return (

        <form className="grid items-start gap-4" onSubmit={onSubmit}>
            <label className="grid grid-cols-4 items-center gap-2">
                <span className="text-left">DNI</span>
                <span className="col-span-3">{account.dni}</span>
            </label>
            <label className="grid grid-cols-4 items-center gap-2">
                <span className="text-left">Nombres</span>
                <span className="col-span-3">{user.nombres} {user.apellidos}</span>
            </label>
            <label className="grid grid-cols-4 items-center gap-2">
                <span className="text-left">Email</span>
                <div className="col-span-3">
                    <Input
                        name="email"
                        placeholder="email"
                        type="email"
                        className={errors.email ? 'border-red-500' : ''}
                        disabled={loading}
                        defaultValue={account.email}
                        onChange={handleChange}
                    />
                    {errors.email && errors.email.map((error, index) => (
                        <span key={index} className=" text-xs  text-red-500">{error}</span>
                    ))}
                </div>
            </label>
            <label className="grid grid-cols-4 items-center gap-2">
                <span className="text-left">Telefono</span>
                <Input
                    name="telefono"
                    placeholder="telefono"
                    className="col-span-3"
                    defaultValue={user.telefono}
                    disabled={loading}
                />
            </label>

            <Button type="submit" disabled={loading}>Actualizar info</Button>
        </form>
    )
}