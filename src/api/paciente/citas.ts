import { getToken } from "@/api/token-service";

const URL = import.meta.env.VITE_API_BASE_URL;

export const postCitasPaciente = async (cita: IRegistrarPacienteCita): Promise<IMessageResponse> => {

    const token = getToken();

    const response = await fetch(`${URL}/citas`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cita)
    });

    if (!response.ok) {
        throw new Error(`Failed to post user citas: ${response.statusText}`);
    }

    const data: IMessageResponse = await response.json();
    return data;
}

export const getCitasPaciente = async (): Promise<ICitasPacienteResponse[]> => {

    const token = getToken();

    const response = await fetch(`${URL}/paciente/citas`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
    });

    if (!response.ok) {
        throw new Error(`Failed to get user citas: ${response.statusText}`);
    }

    const data: ICitasPacienteResponse[] = await response.json();
    return data;
}

export const updatePaciente = async (
    email: string, telefono: string,
    domicilio: string, telefono_emergencia: string

): Promise<IMessageResponse> => {
    const token = getToken();
    const response = await fetch(`${URL}/paciente/update`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, telefono, domicilio, telefono_emergencia })
    });

    const data: IMessageResponse = await response.json();

    if (!response.ok) {
        throw { status: response.status, message: data.message, errors: data.errors };
    }

    return data;
}

export const getCitaByIdPaciente = async (id: number): Promise<ICitaDetallePacienteResponse> => {

    const token = getToken();

    const response = await fetch(`${URL}/paciente/citas/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
    });

    if (!response.ok) {
        throw new Error(`Failed to get user citas: ${response.statusText}`);
    }

    const data: ICitaDetallePacienteResponse = await response.json();
    return data;
}
