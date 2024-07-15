interface UserData {
    dni: string;
    email: string;
    rol: string;
}

interface AdminData {
    nombres: string;
    apellidos: string;
    telefono: string;
}

interface AuthResponse {
    account: UserData;
    access_token: string;
    token_type: string;
    expires_in: number;
}

interface UpdateEspecialistaRequest {
    email?: string;
    telefono?: string,
}