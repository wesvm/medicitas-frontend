import { getToken } from "@/api/token-service";

const URL = import.meta.env.VITE_API_BASE_URL;

export const registrarConsulta = async (request: IConsultaRequest): Promise<IMessageResponse> => {
    const token = getToken();
    const response = await fetch(`${URL}/consultas`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
    });

    const data: IMessageResponse = await response.json();

    if (!response.ok) {
        throw { status: response.status, message: data.message, errors: data.errors };
    }

    return data;
}