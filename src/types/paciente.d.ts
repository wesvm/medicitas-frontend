interface PacienteDataResponse {
    id: number;
    dni: string;
    email: string;
    nombres: string;
    apellidos: string;
    edad: string;
    fechaNacimiento: string;
    lugarNacimiento: string;
    domicilio: string;
    telefono: string;
    escuelaProfesional: string | null;
    ocupacion: string | null;
    tipoSeguro: string;
    telefonoEmergencia: string | null;
}

interface IRegistrarPaciente {
    dni: string;
    email: string;
    nombres: string;
    apellidos: string;
    fecha_nacimiento: string;
    lugar_nacimiento: string;
    domicilio: string;
    telefono?: string | null;
    escuela_profesional?: string | null;
    ocupacion?: string | null;
    tipo_seguro: string;
    telefono_emergencia?: string | null;
}

interface PacienteAuthR {
    user_id: number;
    dni: string;
    email: string;
    nombres: string;
    apellidos: string;
    edad: string;
    fecha_nacimiento: string;
    lugar_nacimiento: string;
    domicilio: string;
    telefono: string;
    escuela_profesional: string | null;
    ocupacion: string | null;
    tipo_seguro: string;
    telefono_emergencia: string | null;
}