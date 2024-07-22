import { Card } from "@/components/card";
import { useCitasPacienteEspecialista } from "@/hooks/useCitas";
import { useParams } from "react-router-dom";
import { columns } from "./historial-parts/columns";
import { DataTable } from "./historial-parts/data-table";
import { AdminListPageLoading } from "../admin/parts/loading";
import { usePacienteStore } from "@/store/pacienteStore";

const HistorialCitasPage = () => {

    const { id } = useParams();
    if (!id) return <div>Paciente invalido..</div>
    const { citasPaciente, status } = useCitasPacienteEspecialista(id);
    const { paciente } = usePacienteStore();

    return (
        <div className="p-4">
            <section className="mb-4">
                <Card>
                    <h1 className="font-bold text-2xl">
                        Historial de Citas - {paciente?.nombres} {paciente?.apellidos}
                    </h1>
                </Card>
            </section>
            <section>
                <Card>
                    {status === 'pending' ?
                        <AdminListPageLoading />
                        :
                        <DataTable columns={columns} data={citasPaciente} />
                    }
                </Card>
            </section>
        </div>
    );
}

export default HistorialCitasPage;