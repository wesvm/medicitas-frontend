interface ICitasPacienteResponse {
    id: number;
    fecha: string,
    hora: string;
    estado: string;
    motivo: string;
    paciente_id: string;
    especialista_id: string;
}

interface IRegistrarPacienteCita{
    fecha: string;
    hora: string;
    motivo: string;
    especialista_id: number;
}