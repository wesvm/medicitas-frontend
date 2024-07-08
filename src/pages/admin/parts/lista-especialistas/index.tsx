import { useEspecialistasList } from "@/hooks/useUsersList"
import { columns } from "./columns"
import { DataTable } from "./data-table"
import { AdminListPageLoading } from "../loading";

export const ListarEspecialistasPart = () => {

    const { status, especialistaslist } = useEspecialistasList();

    if (status === 'pending') return <AdminListPageLoading />;

    return (
        <DataTable columns={columns} data={especialistaslist} />
    )
}