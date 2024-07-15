import { Card } from "@/components/card"
import { ListarPacientesPart } from "./parts/lista-pacientes"

const ListPacientesPage = () => {
    return (
        <div className="p-4">
            <section className="mb-4">
                <Card>
                    <h1 className="font-bold text-2xl">Lista de Pacientes</h1>
                </Card>

            </section>
            <section>
                <Card>
                    <ListarPacientesPart />
                </Card>
            </section>
        </div>
    )
}

export default ListPacientesPage;