const URL = import.meta.env.VITE_API_BASE_URL;

export const getPaciente = async (token: string): Promise<PacienteData> => {
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