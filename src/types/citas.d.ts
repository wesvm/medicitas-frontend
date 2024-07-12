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

interface EspecialidadData {
    nombre: string;
    total: number;
}

interface DiasData {
    dia: string;
    especialidades: EspecialidadData[];
}

type IConteoCitasResponse = {
    fechaInicio: string | null;
    fechaFin: string | null;
    citas: {
        total: number;
        estudiantes: number;
        noEstudiantes: number;
        especialidades: EspecialidadData[] | [];
    };
    dias: DiasData[] | [];
};

interface IConteoCitasRequest {
    fechaInicio: string | Date | undefined;
    fechaFin: string | Date | undefined;
}