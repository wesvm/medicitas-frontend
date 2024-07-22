import { getPacientesXEspecialista } from "@/api/especialista";
import { getPacienteByDni } from "@/api/paciente";
import { useQuery } from "@tanstack/react-query";

export const usePacienteByDni = (dni: string) => {

    const { status, data } = useQuery({
        queryKey: ['citasPacienteDNI', dni],
        queryFn: () => getPacienteByDni(dni),
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });

    return {
        status,
        paciente: data,
    };
}

export const usePacientesByEspecialista = () => {
    const { status, data } = useQuery({
        queryKey: ['pacientesByEspecialistas'],
        queryFn: () => getPacientesXEspecialista(),
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });

    return {
        status,
        pacientes: data ?? [],
    };
}