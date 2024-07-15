import { getToken } from "@/api/token-service";

const URL = import.meta.env.VITE_API_BASE_URL;

export const getEspecialista = async (): Promise<EspecialistaData> => {

    const token = getToken();

    const response = await fetch(`${URL}/especialista/me`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
    });

    if (!response.ok) {
        throw new Error(`Failed to get especialista data: ${response.statusText}`);
    }

    const data: EspecialistaData = await response.json();
    return data;
}

export const updateEspecialista = async (email: string, telefono: string): Promise<IMessageResponse> => {
    const token = getToken();
    const response = await fetch(`${URL}/especialista/update`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, telefono })
    });

    const data: IMessageResponse = await response.json();

    if (!response.ok) {
        throw { status: response.status, message: data.message, errors: data.errors };
    }

    return data;
}

export const getAllEspecialistas = async (): Promise<EspecialistaData[]> => {

    const token = getToken();

    const response = await fetch(`${URL}/especialista/obtenerEspecialistas`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
    });

    if (!response.ok) {
        throw new Error(`Failed to get especialista data list: ${response.statusText}`);
    }

    const data: EspecialistaData[] = await response.json();
    return data;
}
