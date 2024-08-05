import { Card } from "@/components/card";
import { useParams } from "react-router-dom";
import { columns } from "./historial-parts/columns";
import { DataTable } from "./historial-parts/data-table";
import { AdminListPageLoading } from "../admin/parts/loading";
import { usePacienteStore } from "@/store/pacienteStore";
import { useEffect, useState } from "react";
import { getCitasPacientesByEspecialista } from "@/api/especialista/citas";
import { getPacienteById } from "@/api/paciente";

const HistorialCitasPage = () => {

    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [citasPaciente, setCitasPaciente] = useState<ICitasPacienteResponse[]>([])
    const { paciente, setPaciente } = usePacienteStore();

    useEffect(() => {
        if (id) {
            setLoading(true);
            getCitasPacientesByEspecialista(id)
                .then(response => {
                    setCitasPaciente(response);
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

    if (!id) return <div>Paciente invalido..</div>

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
                    {loading ?
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