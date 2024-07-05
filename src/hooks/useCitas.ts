import { getCitasEspecialista } from "@/api/especialista/citas";
import { getCitasPaciente } from "@/api/paciente/citas";
import { useQuery } from "@tanstack/react-query";

export const useCitasPacientes = () => {

    const { status, data, refetch } = useQuery({
        queryKey: ['citasPaciente'],
        queryFn: () => getCitasPaciente(),
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });

    return {
        status,
        citasPaciente: data ?? [],
        refetch
    };
}

export const useCitasEspecialista = () => {

    const { status, data } = useQuery({
        queryKey: ['citasEspecialista'],
        queryFn: () => getCitasEspecialista(),
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });

    return {
        status,
        citasEspecialista: data ?? [],
    };
}