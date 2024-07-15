import { Card } from "@/components/card"
import { ListarPacientesPart } from "./parts/lista-pacientes"
import { usePacienteFormStore } from "@/store/utils-store";
import { AgregarPacienteForm } from "./parts/agregar-paciente/agregar-paciente-form";

const ListPacientesPage = () => {

    const { open } = usePacienteFormStore();

    return (
        <div className="p-4">
            <section className="mb-4">
                <Card>
                    <h1 className="font-bold text-2xl">Lista de Pacientes</h1>
                </Card>

            </section>
            <section>
                <Card>
                    {
                        !open ?
                            <ListarPacientesPart />
                            : <AgregarPacienteForm />
                    }
                </Card>
            </section>
        </div>
    )
}

export default ListPacientesPage;