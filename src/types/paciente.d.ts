interface PacienteDataResponse{
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
    escuelaProfesional: string;
    ocupacion: string | null;
    tipoSeguro: string;
    telefonoEmergencia: string | null;
}

interface IRegistrarPaciente{
    dni: string;
    password: string;
    email: string;
    nombres: string;
    apellidos: string;
    edad: string;
    fechaNacimiento: string;
    lugarNacimiento: string;
    domicilio: string;
    telefono: string;
    escuelaProfesional: string;
    ocupacion: string | null;
    tipoSeguro: string;
    telefonoEmergencia: string | null;
}
