import { getHorarioByEspecialistaId } from "@/api/horario";
import { useQuery } from "@tanstack/react-query";

export const useHorarioEspecialista = (id: string) => {

    const { status, data } = useQuery({
        queryKey: ['horarioEspecialista', id],
        queryFn: () => getHorarioByEspecialistaId(id),
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });

    return {
        status,
        horario: data ?? null
    };
}