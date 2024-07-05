import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"

interface ShowDialogCitaIdProps {
    setOpen: (open: boolean) => void;
    open: boolean;
    title: string;
}

export const ShowDialogCitaId = ({ open, setOpen, title }: ShowDialogCitaIdProps) => {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        Descripcion de la cita..
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}