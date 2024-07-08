import { Card } from "@/components/card"
import { ListarEspecialistasPart } from "./parts/lista-especialistas"

const ListEspecialistasPage = () => {
    return (
        <div className="p-4">
            <section className="mb-4">
                <Card>
                    <h1 className="font-bold text-2xl">Lista de Especialistas</h1>
                </Card>
            </section >
            <section>
                <Card>
                    <ListarEspecialistasPart />
                </Card>
            </section>
        </div >
    )
}

export default ListEspecialistasPage;