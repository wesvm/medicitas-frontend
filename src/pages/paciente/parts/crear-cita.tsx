import { postCitasPaciente } from "@/api/paciente/citas";
import { LoadingSpin } from "@/components/loading-spin";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"
import { DrawerClose, DrawerFooter } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { RadioGroup } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectGroup, SelectTrigger, SelectValue, SelectItem, SelectLabel } from "@/components/ui/select";
import { useEspecialidadesListConEsp } from "@/hooks/useEspecialidad";
import { useHorarioEspecialista } from "@/hooks/useHorario";
import { RadioGroupItem } from "@radix-ui/react-radio-group";
import { format } from "date-fns/format";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface ShowDialogCrearCitaProps {
    setOpen: (open: boolean) => void;
    open: boolean;
    startDate: Date;
    refetch: () => void;
}

export const ShowDialogCrearCita = ({ open, setOpen, startDate, refetch }: ShowDialogCrearCitaProps) => {
    const [horarioId, setHorarioId] = useState(12);
    const [horasDisponibles, setHorasDisponibles] = useState<string[]>([]);
    const { status: statusEsp, especialidadeslistConEsp } = useEspecialidadesListConEsp();
    const { status: statusHor, horario } = useHorarioEspecialista(horarioId.toString());
    const [loading, setLoading] = useState(false);

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
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Crear nueva cita</DialogTitle>
                    <DialogDescription>
                        Formulario para crear una nueva cita
                    </DialogDescription>
                </DialogHeader>
                <form id="addcitaform" className="grid items-start gap-4 px-4" onSubmit={onSubmit}>
                    <label className="grid grid-cols-4 items-center gap-2">
                        <span className="text-left">Fecha* </span>
                        <Input
                            type="date"
                            value={date}
                            name="fecha"
                            className="col-span-3"
                            disabled
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
                    <label className="grid grid-cols-4 items-center gap-4">
                        <span className="text-left">Especialidad:</span>
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
                    <div className="grid grid-cols-4 items-center gap-4">
                        <span className="text-left">Hora* </span>
                        <RadioGroup className="flex gap-4"
                            name="hora"
                            defaultValue="8:00"
                            required
                        >
                            {statusHor === 'pending' ?
                                (
                                    <div className="flex items-center justify-center py-2">
                                        <LoadingSpin />
                                    </div>
                                )
                                : (
                                    horasDisponibles.map((hora) => (
                                        <label key={hora} className="[&:has([data-state=checked])>div]:border-primary cursor-pointer">
                                            <RadioGroupItem value={`${hora}:00`} id={`r${hora}`} className="sr-only" />
                                            <div className="rounded-md border-2 border-muted px-4 py-1 hover:border-accent">
                                                {hora}:00
                                            </div>
                                        </label>
                                    ))
                                )
                            }
                        </RadioGroup>
                    </div>
                </form>
                <DrawerFooter>
                    <DrawerClose asChild>
                        <Button type="button" variant="secondary" disabled={loading}>
                            Cancelar
                        </Button>
                    </DrawerClose>
                    <Button form="addcitaform" type="submit" disabled={loading}>Añadir</Button>
                </DrawerFooter>
            </DialogContent>
        </Dialog>
    )
}