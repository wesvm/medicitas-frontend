import { CITASTATUS } from "@/lib/const";
import { ColumnDef } from "@tanstack/react-table"
import { DataTableRowActions } from "./data-table-row-actions";
const getColorClass = (status: string) => {
    const foundStatus = CITASTATUS.find(item => item.value === status);
    return foundStatus ? foundStatus.color : 'bg-gray-500';
};
export const columns: ColumnDef<ICitasPacienteResponse>[] = [
    {
        accessorKey: "id",
        header: "Cita",
    },
    {
        accessorKey: "fecha",
        header: "Fecha",
    },
    {
        accessorKey: "hora",
        header: "Hora",
        cell: ({ row }) => {
            const timeString = row.getValue("hora") as string;
            const formattedTime = timeString.slice(0, 5);
            return formattedTime;
        }
    },
    {
        accessorKey: "estado",
        header: "Estado",
        cell: ({ row }) => {
            const status = row.getValue("estado") as string;
            const colorClass = getColorClass(status);

            return (
                <div className="flex space-x-2">
                    <div className={`${colorClass} 
                    text-white rounded-full px-2.5 py-0.5 text-xs font-semibold`}>
                        <span className="text-xs">{status}</span>
                    </div>
                </div>
            );
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id));
        },
    },
    {
        accessorKey: "motivo",
        header: "Motivo",
        cell: ({ row }) => {
            return (
                <div className="flex space-x-2">
                    <span className="max-w-[500px] truncate">
                        {row.getValue("motivo")}
                    </span>
                </div>
            );
        },
    },
    {
        id: "actions",
        cell: ({ row }) => <DataTableRowActions row={row} />,
    },
]
