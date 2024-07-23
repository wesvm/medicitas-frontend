import { registrarConsulta } from "@/api/consulta";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getCurrentDateTime } from "@/lib/utils";
import { ShowDialogCrearCita } from "@/pages/paciente/parts/crear-cita";
import { format } from "date-fns";
import { useState } from "react";
import { toast } from "sonner";

interface ConsultaFormProps {
    cita?: ICitaDetalleEspecialistaResponse | null;
    paciente: PacienteDataResponse;
    setPaciente: (paciente: PacienteDataResponse | null) => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
}

export const ConsultaForm = ({ cita, loading, setLoading, paciente, setPaciente }: ConsultaFormProps) => {

    const currentDateTime = getCurrentDateTime();
    const [open, setOpen] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const fechaHora = formData.get('fecha_hora') as string;
        const fechaHoraFormateada = format(new Date(fechaHora), 'yyyy-MM-dd HH:mm:ss');
        const form: IConsultaRequest = {
            cita_id: cita ? cita.id.toString() : "",
            motivo_consulta: formData.get('motivo') as string,
            fecha_hora: fechaHoraFormateada,
            diagnostico: formData.get('diagnostico') as string,
            tratamiento: formData.get('tratamiento') as string,
            observaciones: formData.get('observaciones') as string,
            proxima_cita: formData.get('proxima_cita') as string,
            paciente_id: paciente.user_id.toString(),
        };

        setLoading(true);
        const promise = registrarConsulta(form)
            .then((res) => {
                setPaciente(null);
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
            success: (res) => `${res.message}`,
            error: (err) => {
                return `Error: ${err.message}`;
            }
        });

    };

    return (
        <>
            <form onSubmit={handleSubmit} id="saveConsulta" className="grid md:grid-cols-2 gap-4 max-w-[68rem]">
                <label className="grid grid-cols-4 items-center gap-2">
                    <span className="text-left">Motivo de la consulta*</span>
                    <Input name="motivo" type="text" className="col-span-3" defaultValue={cita?.motivo} disabled={loading} />
                </label>
                <label className="grid grid-cols-4 items-center gap-2">
                    <span className="text-left">Fecha y hora* </span>
                    <Input
                        type="datetime-local"
                        defaultValue={currentDateTime}
                        name="fecha_hora"
                        className="col-span-3"
                        required
                        disabled={loading}
                    />
                </label>
                <label className="grid grid-cols-4 items-center gap-2">
                    <span className="text-left">Diagnostico*</span>
                    <Textarea name="diagnostico" className="resize-none col-span-3" disabled={loading} required />
                </label>
                <label className="grid grid-cols-4 items-center gap-2">
                    <span className="text-left">Tratamiento*</span>
                    <Textarea name="tratamiento" className="resize-none col-span-3" disabled={loading} required />
                </label>
                <div className="grid grid-cols-4 items-center gap-2">
                    <span className="text-left">Proxima Cita</span>
                    <Button variant="outline" type="button" disabled={loading} className="col-span-3"
                        onClick={() => setOpen(true)}>
                        Agendar proxima cita
                    </Button>
                </div>
                <label className="grid grid-cols-4 items-center gap-2">
                    <span className="text-left">Observaciones</span>
                    <Textarea name="observaciones" className="resize-none col-span-3" />
                </label>
                <div className="flex items-end justify-end">
                    <Button type="submit" form="saveConsulta" className="w-full" disabled={loading}>
                        Guardar Consulta
                    </Button>
                </div>
            </form>
            <ShowDialogCrearCita
                paciente={paciente}
                setOpen={setOpen}
                open={open} startDate={new Date()}
                refetch={() => { }}
            />
        </>

    )
}