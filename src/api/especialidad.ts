import { getToken } from "@/api/token-service";

const URL = import.meta.env.VITE_API_BASE_URL;

export const getAllEspecialidades = async (): Promise<EspecialidadDataResponse[]> => {
    
    const token = getToken();

    const response = await fetch(`${URL}/especialidad/obtenerEspecialidades`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
    });

    if (!response.ok) {
        throw new Error(`Failed to get especialiades data: ${response.statusText}`);
    }

    const data: EspecialidadDataResponse[] = await response.json();
    return data;
}

export const getAllEspecialidadesConEsp = async (): Promise<EspecialidadConEspDataResponse[]> => {
    
    const token = getToken();

    const response = await fetch(`${URL}/especialidad/obtenerEspecialidadesConEsp`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
    });

    if (!response.ok) {
        throw new Error(`Failed to get especialiades con especialistas: ${response.statusText}`);
    }

    const data: EspecialidadConEspDataResponse[] = await response.json();
    return data;
}