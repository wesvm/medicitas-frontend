import { useParams } from "react-router-dom";
import { AdminListPageLoading } from "../admin/parts/loading";
import { Card } from "@/components/card";
import { usePacienteStore } from "@/store/pacienteStore";
import { useConsultaPacienteEspecialista } from "@/hooks/useConsultas";
import { columns } from "./consulta-parts/columns";
import { DataTable } from "./consulta-parts/data-table";

const HistorialConsultasPage = () => {

    const { id } = useParams();
    if (!id) return <div>Paciente invalido..</div>
    const { status, consultasPaciente } = useConsultaPacienteEspecialista(id);
    const { paciente } = usePacienteStore();

    return (
        <div className="p-4">
            <section className="mb-4">
                <Card>
                    <h1 className="font-bold text-2xl">
                        Historial de Consultas - {paciente?.nombres} {paciente?.apellidos}
                    </h1>
                </Card>
            </section>
            <section>
                <Card>
                    {status === 'pending' ?
                        <AdminListPageLoading />
                        :
                        <DataTable columns={columns} data={consultasPaciente} />
                    }
                </Card>
            </section>
        </div>
    )
}

export default HistorialConsultasPage;