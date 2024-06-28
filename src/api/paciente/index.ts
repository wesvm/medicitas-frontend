import { getToken } from "@/api/token-service";

const URL = import.meta.env.VITE_API_BASE_URL;

export const getPaciente = async (): Promise<PacienteData> => {
    
    const token = getToken();

    const response = await fetch(`${URL}/paciente/me`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
    });

    if (!response.ok) {
        throw new Error(`Failed to get user data: ${response.statusText}`);
    }

    const data: PacienteData = await response.json();
    return data;
}

export const getAllPacientes = async (): Promise<PacienteData[]> => {

    const token = getToken();

    const response = await fetch(`${URL}/obtenerPacientes`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
    });

    if (!response.ok) {
        throw new Error(`Failed to get user data list: ${response.statusText}`);
    }

    const data: PacienteData[] = await response.json();
    return data;
}
