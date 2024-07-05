import { getToken } from "@/api/token-service";

const URL = import.meta.env.VITE_API_BASE_URL;

export const getCitasEspecialista= async (): Promise<ICitasPacienteResponse[]> => {
    
    const token = getToken();

    const response = await fetch(`${URL}/especialista/citas`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
    });

    if (!response.ok) {
        throw new Error(`Failed to get especialista citas: ${response.statusText}`);
    }

    const data: ICitasPacienteResponse[] = await response.json();
    return data;
}