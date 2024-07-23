import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"
import { CrearCitaForm } from "./crear-cita-form";
import { useState } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle
} from "@/components/ui/drawer";

interface ShowDialogCrearCitaProps {
    setOpen: (open: boolean) => void;
    open: boolean;
    startDate: Date;
    refetch: () => void;
    paciente?: PacienteDataResponse;
}

export const ShowDialogCrearCita = ({
    open,
    setOpen,
    startDate,
    refetch,
    paciente
}: ShowDialogCrearCitaProps) => {

    const [loading, setLoading] = useState(false);
    const isDesktop = useMediaQuery("(min-width: 768px)")

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            {!paciente ?
                                <span>Crear nueva cita</span>
                                :
                                <span>
                                    Nueva cita para {paciente.nombres} {paciente.apellidos}
                                </span>
                            }
                        </DialogTitle>
                        <DialogDescription>
                            Formulario para crear una nueva cita
                        </DialogDescription>
                    </DialogHeader>
                    <CrearCitaForm
                        setLoading={setLoading}
                        loading={loading}
                        refetch={refetch}
                        startDate={startDate}
                        setOpen={setOpen}
                        paciente={paciente}
                    />
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button type="button" variant="secondary" disabled={loading}>
                                Cancelar
                            </Button>
                        </DialogClose>
                        <Button form="addcitaform" type="submit" disabled={loading}>Añadir</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DrawerTitle>
                        {!paciente ?
                            <span>Crear nueva cita</span>
                            :
                            <span>
                                Nueva cita para {paciente.nombres} {paciente.apellidos}
                            </span>
                        }
                    </DrawerTitle>
                    <DrawerDescription>
                        Formulario para crear una nueva cita
                    </DrawerDescription>
                </DrawerHeader>
                <CrearCitaForm
                    className="px-4"
                    setLoading={setLoading}
                    loading={loading}
                    refetch={refetch}
                    startDate={startDate}
                    setOpen={setOpen}
                    paciente={paciente}
                />
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button type="button" variant="secondary" disabled={loading}>
                            Cancelar
                        </Button>
                    </DrawerClose>
                    <Button form="addcitaform" type="submit" disabled={loading}>Añadir</Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )


}