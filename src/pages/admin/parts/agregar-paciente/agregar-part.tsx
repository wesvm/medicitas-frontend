import { usePacientesList } from "@/hooks/useUsersList";
import { ESCUELAS } from "@/lib/const";
import { useState } from "react";
import { AgregarPacienteForm } from "./add-form";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/card";
import { useNavigate } from "react-router-dom";
const AgregarPaciente = () => {

    const navigate = useNavigate();
    const { refetch } = usePacientesList();
    const [loading, setLoading] = useState(false);
    const escuelasFiltradas = ESCUELAS.filter(escuela => escuela.value !== null) as { label: string; value: string }[];

    const handleBack = () => {
        navigate(-1);
    }

    return (
        <div className="p-4">
            <Card className="mb-4">
                <Button variant='secondary' className="w-36" onClick={handleBack}>
                    Volver
                </Button>
            </Card>
            <Card className="max-w-[50rem] grid gap-2">
                <h1 className="font-bold text-lg">Formulario para agregar paciente</h1>
                <p className="text-sm">La contraseña será la misma que el dni</p>
                <AgregarPacienteForm
                    refetch={refetch}
                    loading={loading}
                    setLoading={setLoading}
                    escuelas={escuelasFiltradas}
                />
            </Card>
        </div>
    )
}

export default AgregarPaciente;