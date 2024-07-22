import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<IConsultaResponse>[] = [
    {
        accessorKey: "id",
        header: "Consulta",
    },
    {
        accessorKey: "fecha_hora",
        header: "Fecha",
    },
    {
        accessorKey: "motivo_consulta",
        header: "Diagnostico",
    },
    {
        accessorKey: "diagnostico",
        header: "Diagnostico",
    },
    {
        accessorKey: "tratamiento",
        header: "Tratamiento",
    },
    {
        accessorKey: "observaciones",
        header: "Observaciones",
    }

]
