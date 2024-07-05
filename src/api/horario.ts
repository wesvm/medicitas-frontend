import { getToken } from "@/api/token-service";

const URL = import.meta.env.VITE_API_BASE_URL;

export const getHorarioById = async (id: string): Promise<IHorarioAtencionData> => {
    
    const token = getToken();

    const response = await fetch(`${URL}/horarioAtencion/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
    });

    if (!response.ok) {
        throw new Error(`Failed to get horario atencion data: ${response.statusText}`);
    }

    const data: IHorarioAtencionData = await response.json();
    return data;
}


export const getHorarioByEspecialistaId = async (id: string): Promise<IHorarioAtencionData> => {
    
    const token = getToken();

    const response = await fetch(`${URL}/horarioAtencion/especialista/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
    });

    if (!response.ok) {
        throw new Error(`Failed to get horario atencion data: ${response.statusText}`);
    }

    const data: IHorarioAtencionData = await response.json();
    return data;
}



