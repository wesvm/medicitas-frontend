import { getToken } from "@/api/token-service";

const URL = import.meta.env.VITE_API_BASE_URL;

export const getCitasEspecialista = async (): Promise<ICitasPacienteResponse[]> => {

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

export const getCitaByIdEspecialista = async (id: number): Promise<ICitaDetalleEspecialistaResponse> => {

    const token = getToken();

    const response = await fetch(`${URL}/especialista/citas/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
    });

    const data = await response.json();

    if (!response.ok) {
        throw { status: response.status, message: response.statusText };
    }

    return data as ICitaDetalleEspecialistaResponse;
}

export const updateCitaStatus = async (status: string, citaId: string): Promise<IMessageResponse> => {

    const token = getToken();

    const response = await fetch(`${URL}/especialista/citas/${citaId}`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ estado: status })
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(`Failed to get especialista citas: ${response.statusText}`);
    }

    return data as IMessageResponse;
}

export const getCitasPacientesByEspecialista = async (id: string): Promise<ICitasPacienteResponse[]> => {

    const token = getToken();

    const response = await fetch(`${URL}/especialista/citas/pacientes/${id}`, {
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

export const getConsultasPacientesByEspecialista = async (id: string): Promise<IConsultaResponse[]> => {

    const token = getToken();

    const response = await fetch(`${URL}/especialista/consultas/pacientes/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
    });

    if (!response.ok) {
        throw new Error(`Failed to get especialista citas: ${response.statusText}`);
    }

    const data: IConsultaResponse[] = await response.json();
    return data;
}
