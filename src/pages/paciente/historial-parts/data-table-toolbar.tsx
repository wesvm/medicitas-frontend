import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { CITASTATUS } from "@/lib/const";
import { X } from "lucide-react";
import { DataTableFacetedFilter } from "@/pages/admin/parts/lista-pacientes/data-table-faceted-filter";
import { useNavigate } from "react-router-dom";

interface DataTableToolbarProps<TData> {
    table: Table<TData>;
}

export function DataTableToolbar<TData>({
    table,
}: DataTableToolbarProps<TData>) {
    const isFiltered = table.getState().columnFilters.length > 0;
    const navigate = useNavigate();
    return (
        <div className="flex flex-wrap items-center justify-between space-x-2 pb-2">
            <div className="flex flex-1 items-center space-x-2 flex-wrap">
                <Input
                    placeholder="Buscar por fecha.."
                    type="date"
                    value={(table.getColumn("fecha")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("fecha")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />
                <DataTableFacetedFilter
                    column={table.getColumn("estado")}
                    title="Estado"
                    options={CITASTATUS}
                />
                {isFiltered && (
                    <Button
                        variant="ghost"
                        onClick={() => table.resetColumnFilters()}
                        className="h-8 px-2 lg:px-3"
                    >
                        Reset
                        <X className="ml-2 h-4 w-4" />
                    </Button>
                )}
            </div>

            <Button variant='secondary' className="w-48" onClick={() => navigate(-1)}>
                Regresar
            </Button>
        </div>
    );
}