import { getAllEspecialidades } from "@/api/especialidad";
import { useQuery } from "@tanstack/react-query";

export const useEspecialidadesList = () => {

    const { status, data } = useQuery({
        queryKey: ['especialidadesList'],
        queryFn: () => getAllEspecialidades(),
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });

    return {
        status,
        especialidadeslist: data ?? []
    };
}