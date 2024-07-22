import { Row } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GripHorizontal } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CITASTATUS } from "@/lib/const";
import { toast } from "sonner";
import { updateCitaStatus } from "@/api/especialista/citas";
import { useRefetchStore } from "@/store/utils-store";
import { usePacienteStore } from "@/store/pacienteStore";

interface DataTableRowActionsProps<TData> {
    row: Row<TData>;
}

export function DataTableRowActions<TData>({
    row
}: DataTableRowActionsProps<TData>) {
    const navigate = useNavigate();
    const { setPaciente } = usePacienteStore();
    const { refetch } = useRefetchStore();
    const handleViewConsultationHistory = () => {
        const patientId = (row.original as { paciente_id: number }).paciente_id;
        setPaciente(row.original as PacienteDataResponse)
        navigate(`/dashboard/pacientes/${patientId}/historial-consultas`);
    };

    const handleChangeStatus = async (newStatus: string) => {
        const citaId = (row.original as { id: string }).id;

        const promise = updateCitaStatus(newStatus, citaId)
            .then((res) => {
                refetch();
                return res;
            })
            .catch((err) => {

                throw err;
            })

        toast.promise(promise, {
            loading: 'Cargando',
            success: (res) => `${res.message}`,
            error: (err) => {
                return `Error: ${err.message}`;
            }
        });
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                >
                    <GripHorizontal className="h-4 w-4" />
                    <span className="sr-only">Open menu</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[160px]">
                <DropdownMenuItem onClick={handleViewConsultationHistory}>
                    Ver consulta
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>Estado</DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                        <DropdownMenuRadioGroup value={row.getValue("estado")}
                            onValueChange={handleChangeStatus}>
                            {CITASTATUS.map((label) => (
                                <DropdownMenuRadioItem key={label.value} value={label.value}>
                                    {label.label}
                                </DropdownMenuRadioItem>
                            ))}
                        </DropdownMenuRadioGroup>
                    </DropdownMenuSubContent>
                </DropdownMenuSub>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}