import { useParams } from "react-router-dom";
import { AdminListPageLoading } from "../admin/parts/loading";
import { Card } from "@/components/card";
import { usePacienteStore } from "@/store/pacienteStore";
import { columns } from "./consulta-parts/columns";
import { DataTable } from "./consulta-parts/data-table";
import { useEffect, useState } from "react";
import { getPacienteById } from "@/api/paciente";
import { getConsultaByCitaId } from "@/api/paciente/citas";

const ConsultaDetailPage = () => {

    const { id, cId } = useParams();
    const [loading, setLoading] = useState(false);
    const { paciente, setPaciente } = usePacienteStore();
    const [consultaPaciente, setConsultaPaciente] = useState<IConsultaResponse[]>([]);

    useEffect(() => {
        if (id && cId) {
            setLoading(true);

            Promise.all([
                getConsultaByCitaId(id, cId),
                getPacienteById(id)
            ])
                .then(([consultaResponse, pacienteResponse]) => {
                    setConsultaPaciente(consultaResponse ? [consultaResponse] : []);
                    setPaciente(pacienteResponse);
                    setLoading(false);
                })
                .catch(error => {
                    console.error(error);
                    setLoading(false);
                });
        }
    }, [id, cId]);
    if (!id || !cId) return <div>Paciente invalido..</div>;

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
                    {loading ?
                        <AdminListPageLoading />
                        :
                        <DataTable columns={columns} data={consultaPaciente} />
                    }
                </Card>
            </section>
        </div>
    )
}

export default ConsultaDetailPage;