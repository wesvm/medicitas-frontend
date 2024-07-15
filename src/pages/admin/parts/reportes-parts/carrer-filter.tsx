import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { ESCUELAS } from "@/lib/const";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";

interface CarrerFilterProps {
    setDate: (dateRange: IConteoCitasRequest) => void;
    date: IConteoCitasRequest | undefined;
}

export const CarrerFilter = ({ setDate, date }: CarrerFilterProps) => {

    const handleSelect = (currentValue: string) => {
        if (currentValue === date?.carrera) {
            setDate({
                fechaInicio: date?.fechaInicio,
                fechaFin: date?.fechaFin
            });
        } else {
            setDate({
                fechaInicio: date?.fechaInicio,
                fechaFin: date?.fechaFin,
                carrera: currentValue
            });
        }
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    className="w-72 justify-between"
                >
                    {date?.carrera
                        ? ESCUELAS.find((escuela) => escuela.label === date?.carrera)?.label
                        : "Selecciona una carrera..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0" align="start">
                <Command>
                    <CommandInput placeholder="Carrera" />
                    <CommandList>
                        <CommandEmpty>Carrera no encontrada.</CommandEmpty>
                        <CommandGroup>
                            {ESCUELAS.map((escuela) => (
                                <CommandItem
                                    key={escuela.label}
                                    value={escuela.label}
                                    onSelect={handleSelect}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            date?.carrera === escuela.label ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {escuela.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}