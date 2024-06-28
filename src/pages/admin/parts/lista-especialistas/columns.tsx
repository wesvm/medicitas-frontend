import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<EspecialistaData>[] = [
    {
        accessorKey: "nombres",
        header: "Nombres",
    },
    {
        accessorKey: "apellidos",
        header: "Apellidos",
    },
    {
        accessorKey: "telefono",
        header: "Telefono",
    },
]
