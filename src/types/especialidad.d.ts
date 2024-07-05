interface EspecialidadDataResponse{
    id: number;
    nombre: string;
    descripcion: string | null;
}

interface EspecialidadConEspDataResponse{
    id: number;
    nombre: string;
    descripcion: string | null;
    especialistas: EspecialistasData[];
}

interface EspecialistasData{
    user_id: number;
	nombres: string;
	apellidos: string;
	telefono: string;
	horario_atencion_id: number;
    especialidad_id: number;
}