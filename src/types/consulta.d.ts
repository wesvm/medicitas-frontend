interface IConsultaRequest {
    cita_id?: string;
    motivo_consulta: string;
    fecha_hora: string;
    diagnostico: string;
    tratamiento: string;
    observaciones?: string;
    proxima_cita?: string;
    paciente_id: string;
    especialista_id?: string;
}

interface IConsultaResponse {
    id: string;
    cita_id: string | null;
    motivo_consulta: string;
    fecha_hora: string;
    diagnostico: string;
    tratamiento: string;
    observaciones: string | null;
    proxima_cita: string | null;
    paciente_id: string;
    especialista_id: string;
}