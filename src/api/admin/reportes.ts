import { getToken } from "@/api/token-service";
const URL = import.meta.env.VITE_API_BASE_URL;

export const getConteoCitas = async (request?: IConteoCitasRequest): Promise<IConteoCitasResponse> => {
    const token = getToken();
    const response = await fetch(`${URL}/reportes/conteoCitas`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
    });

    const data = await response.json();

    if (!response.ok) {
        const errorResponse: IMessageResponse = { message: data.message, errors: data.errors };
        throw { status: response.status, errorResponse };
    }

    return data as IConteoCitasResponse;
}