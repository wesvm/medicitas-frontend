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

export const getAllEspecialistas = async (): Promise<EspecialistaData[]> => {

    const token = getToken();

    const response = await fetch(`${URL}/obtenerEspecialistas`, {
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
