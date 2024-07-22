import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useNavigate } from "react-router-dom";

interface DataTableToolbarProps<TData> {
    table: Table<TData>;
}

export function DataTableToolbar<TData>({
    table,
}: DataTableToolbarProps<TData>) {
    const navigate = useNavigate();
    return (
        <div className="flex flex-wrap items-center justify-between space-x-2 pb-2">
            <div className="flex flex-1 items-center space-x-2 flex-wrap">
                <Input
                    placeholder="Buscar por fecha.."
                    type="date"
                    value={(table.getColumn("fecha_hora")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("fecha_hora")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />
            </div>

            <Button variant='secondary' className="w-48" onClick={() => navigate(-1)}>
                Regresar
            </Button>
        </div>
    );
}