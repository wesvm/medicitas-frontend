import { registrarPaciente } from "@/api/admin";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { usePacientesList } from "@/hooks/useUsersList";
import { ESCUELAS } from "@/lib/const";
import { usePacienteFormStore } from "@/store/utils-store";
import { useState } from "react";
import { toast } from "sonner";

export const AgregarPacienteForm = () => {

    const { refetch } = usePacientesList();
    const { setOpen } = usePacienteFormStore();
    const [isStudent, setIsStudent] = useState(true);
    const [errors, setErrors] = useState<{ [key: string]: string[] }>({});
    const [loading, setLoading] = useState(false);
    const escuelasFiltradas = ESCUELAS.filter(escuela => escuela.value !== null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name } = event.target;
        const updatedErrors = { ...errors };
        delete updatedErrors[name];
        setErrors(updatedErrors);
    };

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget);
        const form: IRegistrarPaciente = {
            dni: formData.get("dni") as string ?? "",
            email: formData.get("email") as string ?? "",
            nombres: formData.get("nombres") as string ?? "",
            apellidos: formData.get("apellidos") as string ?? "",
            telefono: formData.get("telefono") as string ?? "",
            fecha_nacimiento: formData.get("fecha_nacimiento") as string ?? "",
            lugar_nacimiento: formData.get("lugar_nacimiento") as string ?? "",
            domicilio: formData.get("domicilio") as string ?? "",
            escuela_profesional: formData.get("escuela_profesional") as string ?? "",
            ocupacion: formData.get("ocupacion") as string ?? "",
            tipo_seguro: formData.get("tipo_seguro") as string ?? "",
            telefono_emergencia: formData.get("telefono_emergencia") as string ?? ""
        }

        setLoading(true);
        const promise = registrarPaciente(form)
            .then((res) => {
                refetch();
                setOpen(false);
                return res;
            })
            .catch((err) => {
                setErrors(err.errors);
                throw err;
            })
            .finally(() => {
                setLoading(false);
            });

        toast.promise(promise, {
            loading: 'Cargando',
            success: (res) => `${res.message}`,
            error: (err) => {
                return `Error: ${err.message}`;
            }
        });
    }

    const handleRadioChange = (value: string) => {
        if (value === 'si') {
            setIsStudent(true);
        } else if (value === 'no') {
            setIsStudent(false);
        }
    };

    return (
        <div>
            <Button variant='secondary' className="w-36" onClick={() => setOpen(false)}>
                Volver
            </Button>
            <div className="max-w-[50rem] grid gap-2">
                <h1 className="font-bold text-lg">Formulario para agregar paciente</h1>
                <p className="text-sm">La contraseña será la misma que el dni</p>
                <form id="addPaciente" className="grid md:grid-cols-2 items-start gap-4"
                    onSubmit={onSubmit}>
                    <label className="grid grid-cols-4 items-center gap-2">
                        <span className="text-left">DNI*</span>
                        <div className="col-span-3">
                            <Input
                                name="dni"
                                placeholder="dni"
                                className={errors.dni ? 'border-red-500' : ''}
                                minLength={8}
                                maxLength={8}
                                required
                                disabled={loading}
                                onChange={handleChange}
                            />
                            {errors.dni && errors.dni.map((error, index) => (
                                <span key={index} className="text-xs text-red-500">{error}</span>
                            ))}
                        </div>
                    </label>
                    <label className="grid grid-cols-4 items-center gap-2">
                        <span className="text-left">Email*</span>
                        <div className="col-span-3">
                            <Input
                                name="email"
                                placeholder="email"
                                required
                                type="email"
                                className={errors.email ? 'border-red-500' : ''}
                                disabled={loading}
                                onChange={handleChange}
                            />
                            {errors.email && errors.email.map((error, index) => (
                                <span key={index} className=" text-xs  text-red-500">{error}</span>
                            ))}
                        </div>
                    </label>
                    <label className="grid grid-cols-4 items-center gap-2">
                        <span className="text-left">Nombres*</span>
                        <Input
                            name="nombres"
                            placeholder="nombres"
                            required
                            className="col-span-3"
                            disabled={loading}
                        />
                    </label>
                    <label className="grid grid-cols-4 items-center gap-2">
                        <span className="text-left">Apellidos*</span>
                        <Input
                            name="apellidos"
                            placeholder="apellidos"
                            required
                            className="col-span-3"
                            disabled={loading}
                        />
                    </label>
                    <label className="grid grid-cols-4 items-center gap-2">
                        <span className="text-left">Telefono</span>
                        <Input
                            name="telefono"
                            placeholder="telefono"
                            className="col-span-3"
                            disabled={loading}
                        />
                    </label>
                    <label className="grid grid-cols-4 items-center gap-2">
                        <span className="text-left">Fecha de nacimiento* </span>
                        <Input
                            type="date"
                            name="fecha_nacimiento"
                            placeholder="fecha nacimiento"
                            className="col-span-3"
                            disabled={loading}
                            min="1900-01-01"
                            max={new Date().toISOString().split('T')[0]}
                            required
                        />
                    </label>
                    <label className="grid grid-cols-4 items-center gap-2">
                        <span className="text-left">Lugar de nacimiento* </span>
                        <Input
                            name="lugar_nacimiento"
                            placeholder="lugar nacimiento"
                            className="col-span-3"
                            disabled={loading}
                            required
                        />
                    </label>
                    <label className="grid grid-cols-4 items-center gap-2">
                        <span className="text-left">Domicilio* </span>
                        <Input
                            name="domicilio"
                            placeholder="domicilio"
                            className="col-span-3"
                            required
                            disabled={loading}
                        />
                    </label>
                    <label className="grid grid-cols-4 items-center gap-2">
                        <span className="text-left">Tipo de seguro* </span>
                        <RadioGroup name="tipo_seguro" defaultValue="SIS" required>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="SIS" id="SIS" />
                                <label htmlFor="SIS">SIS</label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="ESSALUD" id="ESSALUD" />
                                <label htmlFor="ESSALUD">ESSALUD</label>
                            </div>
                        </RadioGroup>
                    </label>
                    <label className="grid grid-cols-4 items-center gap-2">
                        <span className="text-left">Es estudiante </span>
                        <RadioGroup defaultValue="si" required onValueChange={handleRadioChange}>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="si" id="si" />
                                <label htmlFor="si">Si</label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="no" id="no" />
                                <label htmlFor="no">No</label>
                            </div>
                        </RadioGroup>
                    </label>
                    {
                        isStudent ?
                            <>
                                <label className="grid grid-cols-4 items-center gap-2">
                                    <span className="text-left">Carrera* </span>
                                    <div className="col-span-3">
                                        <Select name="escuela_profesional" required>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Selecciona una carrera" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Carreras</SelectLabel>
                                                    {escuelasFiltradas.map((escuela) => (
                                                        <SelectItem key={escuela.value} value={escuela.value}>
                                                            {escuela.label}
                                                        </SelectItem >
                                                    ))}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </label>
                            </>
                            :
                            <>
                                <label className="grid grid-cols-4 items-center gap-2">
                                    <span className="text-left">Ocupacion* </span>
                                    <Input
                                        name="ocupacion"
                                        placeholder="ocupacion"
                                        className="col-span-3"
                                        required
                                        disabled={loading}
                                    />
                                </label>
                            </>
                    }


                </form>
                <div className="flex justify-end">
                    <Button form="addPaciente" type="submit" className="w-48">
                        Añadir paciente
                    </Button>
                </div>
            </div>
        </div>

    )
}