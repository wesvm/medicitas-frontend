interface UserData{
    dni: string;
    email: string;
    rol: string;
}

interface PacienteData{
    nombres: string;
    apellidos: string;
    edad: string;
    fecha_nacimiento: string;
    lugar_nacimiento: string;
    domicilio: string;
    telefono: string;
    escuela_profesional: string;
    ocupacion: string | null;
    tipo_seguro: string;
    telefono_emergencia: string | null;
}

interface AdminData{
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

interface IMessageResponse {
    message: string;
}