import { usePacientesList } from "@/hooks/useUsersList"
import { columns } from "./columns"
import { DataTable } from "./data-table"
import { AdminListPageLoading } from "../loading";

export const ListarPacientesPart = () => {

    const { status, pacienteslist } = usePacientesList();

    if (status === 'pending') return <AdminListPageLoading />;

    return (
        <DataTable columns={columns} data={pacienteslist} />
    )
}