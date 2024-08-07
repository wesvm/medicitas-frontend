import { create } from "zustand";

interface MovilSidebarSheetStore {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export const useMovilSidebarSheetStore = create<MovilSidebarSheetStore>((set) => ({
    open: false,
    setOpen: (value) => set({ open: value }),
}))

export const usePacienteFormStore = create<MovilSidebarSheetStore>((set) => ({
    open: false,
    setOpen: (value) => set({ open: value }),
}))

interface RefetchStore {
    refetch: () => void;
    setRefetch: (fn: () => void) => void;
}

export const useRefetchStore = create<RefetchStore>((set) => ({
    refetch: () => { },
    setRefetch: (fn) => set({ refetch: fn }),
}));