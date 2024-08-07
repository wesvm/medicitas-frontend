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
import { useCitaDetallePacientes } from "@/hooks/useCitas";
import { DialogClose } from "@radix-ui/react-dialog";

interface ShowDialogCitaIdProps {
    setOpen: (open: boolean) => void;
    open: boolean;
    citaId: number;
}

export const ShowDialogCitaId = ({ open, setOpen, citaId }: ShowDialogCitaIdProps) => {

    const { status, citaDetallePaciente } = useCitaDetallePacientes(citaId);

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
                            <DialogTitle>{citaDetallePaciente?.motivo}</DialogTitle>
                            <DialogDescription>Descripcion de la cita:</DialogDescription>
                        </DialogHeader>
                        <div>
                            <p><strong>Fecha:</strong> {citaDetallePaciente?.fecha}</p>
                            <p><strong>Hora:</strong> {citaDetallePaciente?.hora}</p>
                            <p><strong>Estado:</strong> {citaDetallePaciente?.estado}</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">Especialista</h3>
                            <p><strong>Nombre:</strong> {citaDetallePaciente?.especialista.nombres} {citaDetallePaciente?.especialista.apellidos}</p>
                            <p><strong>Teléfono:</strong> {citaDetallePaciente?.especialista.telefono}</p>
                            <p><strong>Especialidad:</strong> {citaDetallePaciente?.especialista.especialidad}</p>
                        </div>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button type="button" variant="default">
                                    Close
                                </Button>
                            </DialogClose>
                        </DialogFooter>
                    </>
                }
            </DialogContent>
        </Dialog>
    )
}