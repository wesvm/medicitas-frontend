import { useParams } from "react-router-dom";
import { AdminListPageLoading } from "../admin/parts/loading";
import { Card } from "@/components/card";
import { usePacienteStore } from "@/store/pacienteStore";
import { columns } from "./consulta-parts/columns";
import { DataTable } from "./consulta-parts/data-table";
import { useEffect, useState } from "react";
import { getConsultasPacientesByEspecialista } from "@/api/especialista/citas";
import { getPacienteById } from "@/api/paciente";

const HistorialConsultasPage = () => {

    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const { paciente, setPaciente } = usePacienteStore();
    const [consultasPaciente, setConsultasPaciente] = useState<IConsultaResponse[]>([]);

    useEffect(() => {
        if (id) {
            setLoading(true);
            getConsultasPacientesByEspecialista(id)
                .then(response => {
                    setConsultasPaciente(response);
                    setLoading(false);
                })
                .catch(error => {
                    console.error(error);
                    setLoading(false);
                });

            getPacienteById(id)
                .then(response => {
                    setPaciente(response);
                    setLoading(false);
                })
                .catch(error => {
                    console.error(error);
                    setLoading(false);
                });
        }
    }, [id])

    if (!id) return <div>Paciente invalido..</div>;

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
                        <DataTable columns={columns} data={consultasPaciente} />
                    }
                </Card>
            </section>
        </div>
    )
}

export default HistorialConsultasPage;