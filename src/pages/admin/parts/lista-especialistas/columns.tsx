import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<EspecialistaData>[] = [
    {
        accessorKey: "dni",
        header: "DNI",
    },
    {
        accessorKey: "nombres",
        header: "Nombres",
    },
    {
        accessorKey: "apellidos",
        header: "Apellidos",
    },
    {
        accessorKey: "email",
        header: "Correo",
    },
    {
        accessorKey: "telefono",
        header: "Telefono",
    },
]
