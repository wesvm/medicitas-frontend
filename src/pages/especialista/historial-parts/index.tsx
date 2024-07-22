import { usePacientesByEspecialista } from "@/hooks/usePacientes";
import { AdminListPageLoading } from "@/pages/admin/parts/loading";
import { columns } from "./columns";
import { DataTable } from "@/pages/admin/parts/lista-pacientes/data-table";

export const ListarPacientesPart = () => {

    const { status, pacientes } = usePacientesByEspecialista();

    if (status === 'pending') return <AdminListPageLoading />;

    return (
        <DataTable columns={columns} data={pacientes} />
    )
}