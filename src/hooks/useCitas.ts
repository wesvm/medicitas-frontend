import { getCitaByIdEspecialista, getCitasEspecialista } from "@/api/especialista/citas";
import { getCitaByIdPaciente, getCitasPaciente } from "@/api/paciente/citas";
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

export const useCitaDetallePacientes = (citaId: number) => {

    const { status, data } = useQuery({
        queryKey: ['citaDetallePaciente', citaId],
        queryFn: () => getCitaByIdPaciente(citaId),
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });

    return {
        status,
        citaDetallePaciente: data
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

export const useCitaDetalleEspecialista = (citaId: number) => {

    const { status, data } = useQuery({
        queryKey: ['citaDetalleEspecialista', citaId],
        queryFn: () => getCitaByIdEspecialista(citaId),
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });

    return {
        status,
        cita: data
    };
}