import { LoadingSpin } from "@/components/loading-spin";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"
import { useCitaDetalleEspecialista } from "@/hooks/useCitas";
import { DialogClose } from "@radix-ui/react-dialog";
import { useNavigate } from "react-router-dom";

interface ShowDialogCitaIdProps {
    setOpen: (open: boolean) => void;
    open: boolean;
    citaId: number;
}

export const ShowDialogCitaId = ({ open, setOpen, citaId }: ShowDialogCitaIdProps) => {

    const navigate = useNavigate();
    const { status, cita } = useCitaDetalleEspecialista(citaId);

    const handleRealizarConsulta = () => {
        navigate(`/dashboard/consultas?citaId=${cita?.id}`)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                {status === 'pending' ?
                    <>
                        <div className="flex justify-center">
                            <LoadingSpin />
                        </div>

                        <DialogHeader className="hidden">
                            <DialogTitle></DialogTitle>
                            <DialogDescription></DialogDescription>
                        </DialogHeader>
                    </>
                    :
                    <>
                        <DialogHeader>
                            <DialogTitle>{cita?.motivo}</DialogTitle>
                            <DialogDescription>Descripcion de la cita:</DialogDescription>
                        </DialogHeader>
                        <div>
                            <p><strong>Fecha:</strong> {cita?.fecha}</p>
                            <p><strong>Hora:</strong> {cita?.hora}</p>
                            <p><strong>Estado:</strong> {cita?.estado}</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">Datos del paciente: </h3>
                            <p><strong>Nombre:</strong> {cita?.paciente.nombres} {cita?.paciente.apellidos}</p>
                            <p><strong>Teléfono:</strong> {cita?.paciente.telefono}</p>
                            <p><strong>Tipo de Seguro:</strong> {cita?.paciente.tipoSeguro}</p>
                            <p><strong>Fecha de Nacimiento:</strong> {cita?.paciente.fechaNacimiento}</p>
                            <p><strong>Lugar de Nacimiento:</strong> {cita?.paciente.lugarNacimiento}</p>
                            <p><strong>Domicilio:</strong> {cita?.paciente.domicilio}</p>
                            <p><strong>Teléfono de Emergencia:</strong> {cita?.paciente.telefonoEmergencia}</p>
                            {cita?.paciente.escuelaProfesional &&
                                <p><strong>Escuela Profesional:</strong> {cita.paciente.escuelaProfesional}</p>
                            }
                            {cita?.paciente.ocupacion &&
                                <p><strong>Ocupación:</strong> {cita.paciente.ocupacion}</p>
                            }
                        </div>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button type="button" variant="secondary">
                                    Close
                                </Button>
                            </DialogClose>
                            {cita?.estado !== 'completado' && (
                                <Button type="button"
                                    onClick={handleRealizarConsulta}
                                >
                                    Realizar consulta
                                </Button>
                            )}

                        </DialogFooter>
                    </>
                }
            </DialogContent>
        </Dialog>
    )
}