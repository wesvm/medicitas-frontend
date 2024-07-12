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

interface EspecialidadConteoData {
    nombre: string;
    total: number;
}

interface DiasConteoData {
    dia: string;
    especialidades: EspecialidadConteoData[];
}

type IConteoCitasResponse = {
    fechaInicio: string | null;
    fechaFin: string | null;
    citas: {
        total: number;
        estudiantes: number;
        noEstudiantes: number;
        especialidades: EspecialidadConteoData[] | [];
    };
    dias: DiasConteoData[] | [];
};

interface IConteoCitasRequest {
    fechaInicio:  string | Date | undefined;
    fechaFin: string | Date | undefined;
}