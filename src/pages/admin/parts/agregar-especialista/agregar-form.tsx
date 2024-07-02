import { registrarEspecialista } from "@/api/admin";
import { LoadingSpin } from "@/components/loading-spin";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useEspecialidadesList } from "@/hooks/useEspecialidad";
import { useEspecialistasList } from "@/hooks/useUsersList";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface AgregarEspecialistaFormProps {
    setLoading: (loading: boolean) => void;
    setOpen: (open: boolean) => void;
    loading: boolean;
    className?: string;
}

export const AgregarEspecialistaForm = ({ setLoading, setOpen, loading, className
}: AgregarEspecialistaFormProps
) => {

    const { status, especialidadeslist } = useEspecialidadesList();
    const { refetch } = useEspecialistasList();

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget);
        const form: IRegistrarEspecialista = {
            dni: formData.get("dni") as string,
            password: formData.get("dni") as string,
            email: formData.get("email") as string,
            nombres: formData.get("nombres") as string,
            apellidos: formData.get("apellidos") as string,
            telefono: formData.get("telefono") as string,
            especialidad_id: formData.get("especialidad_id") as string,
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
                console.log(err)
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
            error: 'Verifica los campos'
        });
    }

    return (
        <form id="addform" className={cn("grid items-start gap-4", className)} onSubmit={onSubmit}>
            <label className="grid grid-cols-4 items-center gap-2">
                <span className="text-left">DNI:</span>
                <Input
                    name="dni"
                    placeholder="dni"
                    className="col-span-3"
                    minLength={8}
                    maxLength={8}
                    required
                    disabled={loading}
                />
            </label>
            <label className="grid grid-cols-4 items-center gap-2">
                <span className="text-left">Email:</span>
                <Input
                    name="email"
                    placeholder="email"
                    required
                    type="email"
                    className="col-span-3"
                    disabled={loading}
                />
            </label>
            <label className="grid grid-cols-4 items-center gap-2">
                <span className="text-left">Nombres:</span>
                <Input
                    name="nombres"
                    placeholder="nombres"
                    required
                    className="col-span-3"
                    disabled={loading}
                />
            </label>
            <label className="grid grid-cols-4 items-center gap-2">
                <span className="text-left">Apellidos:</span>
                <Input
                    name="apellidos"
                    placeholder="apellidos"
                    required
                    className="col-span-3"
                    disabled={loading}
                />
            </label>
            <label className="grid grid-cols-4 items-center gap-2">
                <span className="text-left">Telefono:</span>
                <Input
                    name="telefono"
                    placeholder="telefono"
                    className="col-span-3"
                    disabled={loading}
                />
            </label>
            <label className="grid grid-cols-4 items-center gap-4">
                <span className="text-left">Especialidad:</span>
                <div className="col-span-3">
                    <Select name="especialidad_id" required disabled={loading}>
                        <SelectTrigger>
                            <SelectValue placeholder="Selecciona una especialidad" />
                        </SelectTrigger>
                        <SelectContent>
                            {
                                status === 'pending' ?
                                    (
                                        <div className="flex items-center justify-center py-2">
                                            <LoadingSpin />
                                        </div>
                                    ) : (
                                        especialidadeslist.map((especialidad) => (
                                            <SelectItem
                                                key={especialidad.id}
                                                value={especialidad.id.toString()}
                                            >
                                                {especialidad.nombre}
                                            </SelectItem>
                                        ))

                                    )
                            }
                        </SelectContent>
                    </Select>
                </div>
            </label>
        </form>
    )
}