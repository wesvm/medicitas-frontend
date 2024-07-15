import { getToken } from "@/api/token-service";
const URL = import.meta.env.VITE_API_BASE_URL;

export const getAdmin = async (token: string): Promise<AdminData> => {
    const response = await fetch(`${URL}/admin/me`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
    });

    if (!response.ok) {
        throw new Error(`Failed to get admin data: ${response.statusText}`);
    }

    const data: AdminData = await response.json();
    return data;
}

export const updateAdmin = async (email: string, telefono: string): Promise<IMessageResponse> => {
    const token = getToken();
    const response = await fetch(`${URL}/admin/update`, {
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

export const registrarEspecialista = async (
    especialista: IRegistrarEspecialista
): Promise<IMessageResponse> => {

    const token = getToken();
    const response = await fetch(`${URL}/especialista/agregarEspecialista`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(especialista)
    });

    const data: IMessageResponse = await response.json();

    if (!response.ok) {
        throw { status: response.status, message: data.message, errors: data.errors };
    }

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

    const data: IMessageResponse = await response.json();

    if (!response.ok) {
        throw { status: response.status, message: data.message, errors: data.errors };
    }

    return data;
}