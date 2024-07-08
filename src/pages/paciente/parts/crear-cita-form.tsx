import { postCitasPaciente } from "@/api/paciente/citas";
import { LoadingSpin } from "@/components/loading-spin";
import { Input } from "@/components/ui/input";
import { RadioGroup } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectGroup, SelectTrigger, SelectValue, SelectItem, SelectLabel } from "@/components/ui/select";
import { useEspecialidadesListConEsp } from "@/hooks/useEspecialidad";
import { useHorarioEspecialista } from "@/hooks/useHorario";
import { cn } from "@/lib/utils";
import { RadioGroupItem } from "@radix-ui/react-radio-group";
import { format } from "date-fns/format";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface CrearCitaFormProps {
    setOpen: (open: boolean) => void;
    startDate: Date;
    setLoading: (loading: boolean) => void;
    loading: boolean;
    refetch: () => void;
    className?: string;
}

export const CrearCitaForm = ({ startDate, setLoading, setOpen, refetch, loading, className }: CrearCitaFormProps) => {

    const [horarioId, setHorarioId] = useState(12);
    const [horasDisponibles, setHorasDisponibles] = useState<string[]>([]);
    const { status: statusEsp, especialidadeslistConEsp } = useEspecialidadesListConEsp();
    const { status: statusHor, horario } = useHorarioEspecialista(horarioId.toString());

    const date = format(startDate, 'yyyy-MM-dd');

    useEffect(() => {
        if (statusHor === 'success' && horario) {
            const horaInicio = parseInt(horario.hora_inicio.split(':')[0], 10);
            const horaFin = parseInt(horario.hora_fin.split(':')[0], 10);

            const horas = [];
            for (let hora = horaInicio; hora < horaFin; hora++) {
                horas.push(hora.toString().padStart(2, '0'));
            }
            setHorasDisponibles(horas);
        }
    }, [statusHor, horario]);

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget);
        const form: IRegistrarPacienteCita = {
            fecha: date,
            hora: formData.get("hora") as string,
            motivo: formData.get("motivo") as string,
            especialista_id: parseInt(formData.get("especialista_id") as string, 10),
        }

        setLoading(true);
        const promise = postCitasPaciente(form)
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

        console.log(form)
    }

    const handleSelectChange = (value: string) => {
        const selectedHorarioId = parseInt(value as string, 10);
        setHorarioId(selectedHorarioId);
    };

    return (
        <form id="addcitaform" className={cn("grid items-start gap-4 px-4", className)} onSubmit={onSubmit}>
            <label className="grid grid-cols-4 items-center gap-2">
                <span className="text-left">Fecha* </span>
                <Input
                    type="date"
                    defaultValue={date}
                    name="fecha"
                    className="col-span-3"
                    required
                />
            </label>
            <label className="grid grid-cols-4 items-center gap-2">
                <span className="text-left">Motivo* </span>
                <Input
                    name="motivo"
                    className="col-span-3"
                    placeholder="motivo"
                    required
                    disabled={loading}
                />
            </label>
            <label className="md:grid md:grid-cols-4 md:items-center gap-2 flex flex-col">
                <span className="text-left">Especialidad* </span>
                <div className="col-span-3">
                    <Select name="especialista_id"
                        onValueChange={handleSelectChange}
                        required disabled={loading}>
                        <SelectTrigger>
                            <SelectValue placeholder="Selecciona" />
                        </SelectTrigger>
                        <SelectContent>
                            {statusEsp === 'pending' ?
                                (
                                    <div className="flex items-center justify-center py-2">
                                        <LoadingSpin />
                                    </div>
                                ) : (
                                    especialidadeslistConEsp.map((especialidad) => (
                                        <SelectGroup key={especialidad.id}>
                                            <SelectLabel>{especialidad.nombre}</SelectLabel>
                                            {
                                                especialidad.especialistas.map((especialista) => (
                                                    <SelectItem
                                                        key={especialista.user_id}
                                                        value={especialista.user_id.toString()}
                                                    >
                                                        {especialista.nombres}
                                                    </SelectItem>
                                                ))
                                            }

                                        </SelectGroup>

                                    ))

                                )
                            }
                        </SelectContent>
                    </Select>
                </div>
            </label>
            <div className="md:grid md:grid-cols-4 md:items-center gap-2 flex flex-col">
                <span className="text-left">Hora* </span>
                <RadioGroup className="flex justify-center gap-2 col-span-3"
                    name="hora"
                    required
                >
                    {statusHor === 'pending' ?
                        (
                            <div className="py-2">
                                <LoadingSpin />
                            </div>
                        )
                        : (
                            horasDisponibles.map((hora) => (
                                <label key={hora} className="[&:has([data-state=checked])>div]:border-primary cursor-pointer">
                                    <RadioGroupItem value={`${hora}:00`} id={`r${hora}`} className="sr-only"
                                    />
                                    <div className="rounded-md border-2 border-muted px-4 py-2 hover:border-accent">
                                        {hora}:00
                                    </div>
                                </label>
                            ))
                        )
                    }
                </RadioGroup>
            </div>
        </form>
    )
}