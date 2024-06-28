import { usePacientesList } from "@/hooks/useUsersList"
import { columns } from "./columns"
import { DataTable } from "./data-table"

export const ListarPacientesPart = () => {

    const { status, pacienteslist } = usePacientesList();

    if (status === 'pending') return 'loading..';

    return (
        <DataTable columns={columns} data={pacienteslist} />
    )
}