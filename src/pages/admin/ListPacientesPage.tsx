import { ListarPacientesPart } from "./parts/lista-pacientes"

export const ListPacientesPage = () => {
    return (
        <div className="p-4">
            <section className="p-4 bg-white mb-4 rounded-lg">
                <h1 className="font-bold text-2xl">Lista de Pacientes</h1>
            </section>
            <section className="p-4 bg-white rounded-lg">
                <ListarPacientesPart />
            </section>
        </div>
    )
}