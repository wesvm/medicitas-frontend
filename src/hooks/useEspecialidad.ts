import { getAllEspecialidades, getAllEspecialidadesConEsp } from "@/api/especialidad";
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

export const useEspecialidadesListConEsp = () => {

    const { status, data } = useQuery({
        queryKey: ['especialidadesListConEsp'],
        queryFn: () => getAllEspecialidadesConEsp(),
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });

    return {
        status,
        especialidadeslistConEsp: data ?? []
    };
}