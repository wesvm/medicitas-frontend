import { registrarEspecialista } from "@/api/admin"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useEspecialistasList } from "@/hooks/useUsersList"
import { useState } from "react"
import { toast } from "sonner"

export function AñadirEspecialistaDialog() {

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const { refetch } = useEspecialistasList();

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget);
        const form: IRegistrarEspecialista = {
            dni: formData.get("dni") as string,
            password: formData.get("password") as string,
            email: formData.get("email") as string,
            nombres: formData.get("nombres") as string,
            apellidos: formData.get("apellidos") as string,
            telefono: formData.get("telefono") as string,
            especialidad_id: "1",
            horario_atencion_id: "1",
        }

        setLoading(true);
        const promise = registrarEspecialista(form)
            .then((res) => {
                setOpen(false);
                refetch();
                return res;
            })
            .catch((err) => {
                if ((err as any).status === 422)
                    throw new Error("Add especialista failed..");
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
            error: 'Verifica los datos..'
        });
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>Añadir especialista</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Añadir especialista</DialogTitle>
                    <DialogDescription>
                        Ingresa los datos del especialista
                    </DialogDescription>
                </DialogHeader>
                <form id="addform" className="grid gap-4 py-4" onSubmit={onSubmit}>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="dni" className="text-left">
                            Dni:
                        </label>
                        <Input
                            id="dni"
                            name="dni"
                            placeholder="dni"
                            className="col-span-3"
                            disabled={loading}
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="password" className="text-left">
                            Contraseña
                        </label>
                        <Input
                            id="password"
                            name="password"
                            placeholder="*****"
                            className="col-span-3"
                            disabled={loading}
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="email" className="text-left">
                            Email:
                        </label>
                        <Input
                            id="email"
                            name="email"
                            placeholder="email"
                            className="col-span-3"
                            disabled={loading}
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="nombres" className="text-left">
                            Nombres:
                        </label>
                        <Input
                            id="nombres"
                            name="nombres"
                            placeholder="nombres"
                            className="col-span-3"
                            disabled={loading}
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="apellidos" className="text-left">
                            Apellidos:
                        </label>
                        <Input
                            id="apellidos"
                            name="apellidos"
                            placeholder="apellidos"
                            className="col-span-3"
                            disabled={loading}
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="apellidos" className="text-left">
                            Telefono:
                        </label>
                        <Input
                            id="telefono"
                            name="telefono"
                            placeholder="telefono"
                            className="col-span-3"
                            disabled={loading}
                        />
                    </div>
                </form>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button type="button" variant="secondary" disabled={loading}>
                            Cancelar
                        </Button>
                    </DialogClose>
                    <Button form="addform" type="submit" disabled={loading}>Añadir</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
