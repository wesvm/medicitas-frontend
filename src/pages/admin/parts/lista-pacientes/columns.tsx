import { ESCUELAS, SEGURO } from "@/lib/const"
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
        cell: ({ row }) => {
            const carrers = ESCUELAS.find(
                (carrer) => carrer.value === row.getValue("escuelaProfesional"),
            )

            if (!carrers) return null;

            return (
                <div className="flex w-[100px] items-center">
                    <span>{carrers.label}</span>
                </div>
            );
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id));
        },
    },
    {
        accessorKey: "ocupacion",
        header: "Ocupacion",
    },
    {
        accessorKey: "tipoSeguro",
        header: "Tipo de Seguro",
        cell: ({ row }) => {
            const priority = SEGURO.find(
                (priority) => priority.value === row.getValue("tipoSeguro"),
            );

            if (!priority) {
                return null;
            }

            return (
                <div className="flex items-center">
                    <span>{priority.label}</span>
                </div>
            );
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id));
        },
    },
]
