import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<PacienteData>[] = [
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
    {
        accessorKey: "escuela_profesional",
        header: "Escuela",
    },
    {
        accessorKey: "ocupacion",
        header: "Ocupacion",
    },
    {
        accessorKey: "tipo_seguro",
        header: "Tipo de Seguro",
    },
]
