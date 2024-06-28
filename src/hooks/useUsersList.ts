import { getAllEspecialistas } from "@/api/especialista";
import { getAllPacientes } from "@/api/paciente";
import { useQuery } from "@tanstack/react-query";

export const usePacientesList = () => {

    const { status, data } = useQuery({
        queryKey: ['pacientesList'],
        queryFn: () => getAllPacientes(),
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });

    return {
        status,
        pacienteslist: data ?? []
    };
}

export const useEspecialistasList = () => {

    const { status, data, refetch } = useQuery({
        queryKey: ['especialistasList'],
        queryFn: () => getAllEspecialistas(),
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });

    return {
        status,
        especialistaslist: data ?? [],
        refetch,
    };
}