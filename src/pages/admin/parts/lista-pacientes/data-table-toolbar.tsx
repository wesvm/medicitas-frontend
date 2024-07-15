import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


import { ESCUELAS, SEGURO } from "@/lib/const";
import { X } from "lucide-react";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { usePacienteFormStore } from "@/store/utils-store";

interface DataTableToolbarProps<TData> {
    table: Table<TData>;
}

export function DataTableToolbar<TData>({
    table,
}: DataTableToolbarProps<TData>) {
    const isFiltered = table.getState().columnFilters.length > 0;
    const { setOpen } = usePacienteFormStore();

    return (
        <div className="flex flex-wrap items-center justify-between space-x-2 pb-2">
            <div className="flex flex-1 items-center space-x-2 flex-wrap">
                <Input
                    placeholder="Buscar por nombres.."
                    value={(table.getColumn("nombres")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("nombres")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />
                <DataTableFacetedFilter
                    column={table.getColumn("escuelaProfesional")}
                    title="Carreras"
                    options={ESCUELAS}
                />
                <DataTableFacetedFilter
                    column={table.getColumn("tipoSeguro")}
                    title="Seguro"
                    options={SEGURO}
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
            <div>
                <Button onClick={() => setOpen(true)}>
                    Añadir paciente
                </Button>
            </div>
        </div>
    );
}