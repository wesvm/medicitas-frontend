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