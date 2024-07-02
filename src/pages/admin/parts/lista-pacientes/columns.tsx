import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<PacienteDataResponse>[] = [
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
    {
        accessorKey: "escuelaProfesional",
        header: "Escuela Profesional",
    },
    {
        accessorKey: "ocupacion",
        header: "Ocupacion",
    },
    {
        accessorKey: "tipoSeguro",
        header: "Tipo de Seguro",
    },
]
