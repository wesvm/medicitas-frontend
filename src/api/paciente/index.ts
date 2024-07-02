import { getToken } from "@/api/token-service";

const URL = import.meta.env.VITE_API_BASE_URL;

export const getPaciente = async (): Promise<PacienteDataResponse> => {
    
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

    const data: PacienteDataResponse = await response.json();
    return data;
}

export const getAllPacientes = async (): Promise<PacienteDataResponse[]> => {

    const token = getToken();

    const response = await fetch(`${URL}/paciente/obtenerPacientes`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
    });

    if (!response.ok) {
        throw new Error(`Failed to get user data list: ${response.statusText}`);
    }

    const data: PacienteDataResponse[] = await response.json();
    return data;
}


export const registrarPaciente = async (
    paciente: IRegistrarPaciente
): Promise<IMessageResponse> => {
    
    const token = getToken();
    const response = await fetch(`${URL}/paciente/agregarPaciente`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(paciente)
    });

    if (!response.ok) {
        throw new Error(`Failed to register paciente: ${response.statusText}`);
    }

    const data: IMessageResponse = await response.json();
    return data;
}