import { getConteoCitas } from "@/api/admin/reportes";
import { useQuery } from "@tanstack/react-query";

export const useConteoCitas = (request?: IConteoCitasRequest) => {

    const { status, data } = useQuery({
        queryKey: ['conteoCitas', request],
        queryFn: () => getConteoCitas(request)
            .then((res)=> {return res})
            .catch((err)=> { console.error(err)}),
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });

    return {
        status,
        reportes: data ?? null,
    };
}
