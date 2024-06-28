import { ListarEspecialistasPart } from "./parts/lista-especialistas"

export const ListEspecialistasPage = () => {
    return (
        <div className="p-4">
            <section className="p-4 bg-white mb-4 rounded-lg">
                <h1 className="font-bold text-2xl">Lista de Especialistas</h1>
            </section>
            <section className="p-4 bg-white rounded-lg">
                <ListarEspecialistasPart />
            </section>
        </div>
    )
}