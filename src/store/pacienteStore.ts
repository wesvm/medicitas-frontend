import { create } from "zustand";

interface pacienteStore {
    paciente: PacienteDataResponse | null;
    setPaciente: (paciente: PacienteDataResponse) => void;
}

export const usePacienteStore = create<pacienteStore>((set) => ({
    paciente: null,
    setPaciente: (paciente) => set({ paciente: paciente }),
}));