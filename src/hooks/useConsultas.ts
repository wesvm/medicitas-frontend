import { getConsultasPacientesByEspecialista } from "@/api/especialista/citas";
import { useQuery } from "@tanstack/react-query";

export const useConsultaPacienteEspecialista = (pacienteId: string) => {
    const { status, data } = useQuery({
        queryKey: ['consultasPacientesEspecialista', pacienteId],
        queryFn: () => getConsultasPacientesByEspecialista(pacienteId),
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });

    return {
        status,
        consultasPaciente: data ?? [],
    };
}