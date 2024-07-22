import { Card } from "@/components/card";
import { useNavigate, useSearchParams } from "react-router-dom"
import { ConsultaForm } from "./consulta-parts/consulta-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { getPacienteByDni } from "@/api/paciente";
import { toast } from "sonner";
import { getCitaByIdEspecialista } from "@/api/especialista/citas";

const ConsultasPage = () => {
    const navigate = useNavigate();
    const [paciente, setPaciente] = useState<PacienteDataResponse | null>(null);
    const [cita, setCita] = useState<ICitaDetalleEspecialistaResponse | null>(null);
    const [loading, setLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const citaId = searchParams.get("citaId");
    const pacienteDni = searchParams.get("paciente");

    useEffect(() => {
        if (!pacienteDni && !citaId) return;

        setLoading(true);

        let promise: Promise<any> | undefined;
        if (pacienteDni) {
            promise = getPacienteByDni(pacienteDni)
                .then((res) => {
                    setPaciente(res);
                    return res;
                })
                .catch((err) => {
                    setPaciente(null);
                    throw err;
                })
                .finally(() => {
                    setLoading(false);
                });
        } else if (citaId) {
            promise = getCitaByIdEspecialista(Number(citaId))
                .then((res) => {
                    setCita(res);
                    setPaciente(res.paciente);
                    return res;
                })
                .catch((err) => {
                    setCita(null);
                    setPaciente(null);
                    throw err;
                })
                .finally(() => {
                    setLoading(false);
                });
        }

        if (promise) {
            toast.promise(promise, {
                loading: 'Cargando',
                success: () => pacienteDni ? "Paciente cargado con éxito" : "Cita cargada con éxito",
                error: () => pacienteDni ? "Paciente no encontrado" : "Cita no encontrada"
            });
        }
    }, [pacienteDni, citaId]);

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const dni = formData.get("dni") as string;
        setSearchParams({ paciente: dni });
    }

    const handleNavigation = () => {
        navigate('/dashboard/pacientes/nuevo', { state: { from: '/dashboard/pacientes' } });
    };

    return (
        <div className="p-4">
            <section className="mb-4">
                <Card className="flex justify-between">
                    <h2 className="text-2xl font-bold">
                        {citaId ? 'Realizar Consulta' : 'Nueva Consulta'}
                    </h2>
                </Card>
            </section>

            <section className="mb-4 grid grid-cols-3 gap-4">
                <Card className="grid grid-cols-4 gap-2 items-center col-span-2 ">
                    <form onSubmit={handleSearch} id="searchPaciente" className="col-span-2">
                        <label className="grid grid-cols-3 gap-2 items-center">
                            <span>Buscar paciente (DNI): </span>
                            <Input
                                defaultValue={paciente?.dni}
                                name="dni"
                                className="col-span-2"
                                required
                                disabled={loading}
                            />
                        </label>
                    </form>
                    <Button form="searchPaciente" disabled={loading}>Buscar</Button>
                    <Button onClick={handleNavigation} variant="secondary" disabled={loading}>
                        Nuevo Paciente</Button>
                </Card>
                {paciente && (
                    <Card>
                        <h3 className="font-semibold">Paciente: </h3>
                        <span>{paciente?.nombres} {paciente?.apellidos}</span>
                    </Card>
                )}

            </section>

            {paciente && (
                <section>
                    <Card>
                        <ConsultaForm
                            paciente={paciente}
                            setPaciente={setPaciente}
                            loading={loading}
                            setLoading={setLoading}
                            cita={cita}
                        />
                    </Card>
                </section>
            )}

        </div>
    )
}

export default ConsultasPage