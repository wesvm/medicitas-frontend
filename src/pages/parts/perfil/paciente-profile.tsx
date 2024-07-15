import { updatePaciente } from "@/api/paciente/citas";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AccountWithProfile } from "@/store/auth"
import { useState } from "react";
import { toast } from "sonner";

export const PacienteProfile = ({ user, account }: AccountWithProfile) => {
    const paciente = user as PacienteAuthR;

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
        const domicilio = formData.get("domicilio") as string;
        const telefono_emergencia = formData.get("telefono_emergencia") as string;

        setLoading(true);
        const promise = updatePaciente(
            email, telefono, domicilio, telefono_emergencia)
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

        <form className="grid items-start gap-4 max-w-md" onSubmit={onSubmit}>
            <label className="grid grid-cols-4 items-center gap-2">
                <span className="text-left">DNI</span>
                <span className="col-span-3">{account.dni}</span>
            </label>
            <label className="grid grid-cols-4 items-center gap-2">
                <span className="text-left">Nombres</span>
                <span className="col-span-3">{paciente.nombres} {paciente.apellidos}</span>
            </label>
            <label className="grid grid-cols-4 items-center gap-2">
                <span className="text-left">Edad</span>
                <span className="col-span-3">{paciente.edad}</span>
            </label>

            {
                paciente.escuela_profesional &&
                <label className="grid grid-cols-4 items-center gap-2">
                    <span className="text-left">Carrera</span>
                    <span className="col-span-3">{paciente.escuela_profesional}</span>
                </label>
            }

            {
                paciente.ocupacion &&
                <label className="grid grid-cols-4 items-center gap-2">
                    <span className="text-left">Ocupacion</span>
                    <span className="col-span-3">{paciente.ocupacion}</span>
                </label>
            }


            <label className="grid grid-cols-4 items-center gap-2">
                <span className="text-left">Seguro</span>
                <span className="col-span-3">{paciente.tipo_seguro}</span>
            </label>
            <label className="grid grid-cols-4 items-center gap-2">
                <span className="text-left">Email</span>
                <div className="col-span-3">
                    <Input
                        name="email"
                        placeholder="email"
                        required
                        type="email"
                        defaultValue={account.email}
                        className={errors.email ? 'border-red-500' : ''}
                        disabled={loading}
                        onChange={handleChange}
                    />
                    {errors.email && errors.email.map((error, index) => (
                        <span key={index} className=" text-xs  text-red-500">{error}</span>
                    ))}
                </div>
            </label>
            <label className="grid grid-cols-4 items-center gap-2">
                <span className="text-left">Domicilio</span>
                <div className="col-span-3">
                    <Input
                        name="domicilio"
                        placeholder="domicilio"
                        defaultValue={paciente.domicilio}
                        className={errors.domicilio ? 'border-red-500' : ''}
                        onChange={handleChange}
                        disabled={loading}
                    />
                    {errors.domicilio && errors.domicilio.map((error, index) => (
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
                    defaultValue={paciente.telefono}
                    disabled={loading}
                />
            </label>
            <label className="grid grid-cols-4 items-center gap-2">
                <span className="text-left">Telefono de Emergencia</span>
                <Input
                    name="telefono_emergencia"
                    placeholder="telefono de emergencia"
                    className="col-span-3"
                    disabled={loading}
                />
            </label>

            <Button type="submit" disabled={loading}>Actualizar info</Button>
        </form>
    )
}