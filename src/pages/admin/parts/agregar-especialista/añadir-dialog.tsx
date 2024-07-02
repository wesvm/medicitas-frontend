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
import { useState } from "react"
import { AgregarEspecialistaForm } from "./agregar-form";
import useMediaQuery from "@/hooks/useMediaQuery";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from "@/components/ui/drawer";

export function AñadirEspecialistaDialog() {

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const isDesktop = useMediaQuery("(min-width: 768px)")


    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button>Añadir especialista</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Añadir especialista</DialogTitle>
                        <DialogDescription>
                            Ingresa los datos del especialista, la contraseña será la misma que el dni.
                        </DialogDescription>
                    </DialogHeader>
                    <AgregarEspecialistaForm
                        setLoading={setLoading}
                        setOpen={setOpen}
                        loading={loading}
                    />
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

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button>Añadir especialista</Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DrawerTitle>Añadir especialista</DrawerTitle>
                    <DrawerDescription>
                        Ingresa los datos del especialista
                    </DrawerDescription>
                </DrawerHeader>
                <AgregarEspecialistaForm
                    className="px-4"
                    setLoading={setLoading}
                    setOpen={setOpen}
                    loading={loading}
                />
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button type="button" variant="secondary" disabled={loading}>
                            Cancelar
                        </Button>
                    </DrawerClose>
                    <Button form="addform" type="submit" disabled={loading}>Añadir</Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}
