import { usePacientesList } from "@/hooks/useUsersList"
import { columns } from "./columns"
import { AdminListPageLoading } from "../loading";
import { DataTable } from "./data-table";

export const ListarPacientesPart = () => {

    const { status, pacienteslist } = usePacientesList();

    if (status === 'pending') return <AdminListPageLoading />;

    return (
        <DataTable columns={columns} data={pacienteslist} />
    )
}