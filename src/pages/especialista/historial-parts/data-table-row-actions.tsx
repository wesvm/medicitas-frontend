import { Row } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GripHorizontal } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { usePacienteStore } from "@/store/pacienteStore";

interface DataTableRowActionsProps<TData> {
    row: Row<TData>;
}

export function DataTableRowActions<TData>({
    row
}: DataTableRowActionsProps<TData>) {
    const navigate = useNavigate();
    const { setPaciente } = usePacienteStore();

    const handleViewAppointments = () => {
        const patientId = (row.original as { user_id: number }).user_id;
        setPaciente(row.original as PacienteDataResponse);
        navigate(`${patientId}/citas`);
    };

    const handleViewConsultationHistory = () => {
        const patientId = (row.original as { user_id: number }).user_id;
        setPaciente(row.original as PacienteDataResponse);
        navigate(`${patientId}/historial-consultas`);
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
                <DropdownMenuItem onClick={handleViewAppointments}>Ver citas</DropdownMenuItem>
                <DropdownMenuItem onClick={handleViewConsultationHistory}>
                    Ver historial de consultas
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}