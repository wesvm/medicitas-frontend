import { useEspecialistasList } from "@/hooks/useUsersList"
import { columns } from "./columns"
import { DataTable } from "./data-table"

export const ListarEspecialistasPart = () => {

    const { status, especialistaslist } = useEspecialistasList();

    if (status === 'pending') return 'loading..';

    return (
        <DataTable columns={columns} data={especialistaslist} />
    )
}