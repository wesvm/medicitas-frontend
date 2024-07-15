interface EspecialistaData {
	nombres: string;
	apellidos: string;
	telefono: string;
}

interface IRegistrarEspecialista {
	dni: string,
	password: string,
	email: string,
	nombres: string,
	apellidos: string,
	telefono: string | null,
	especialidad_id: string,
	horario_atencion_id: string
}