import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { format, subMonths } from "date-fns"

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverClose,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { DateRange } from "react-day-picker";
import { useState } from "react";

interface DateFilterProps {
    setDate: (dateRange: IConteoCitasRequest) => void;
    date: IConteoCitasRequest | undefined;
    className?: string;
    today: Date;
}

export const DateFilter = ({ setDate, date, className, today }: DateFilterProps) => {

    const fechaInicioDate = date?.fechaInicio ? new Date(date.fechaInicio) : undefined;
    const fechaFinDate = date?.fechaFin ? new Date(date.fechaFin) : undefined;

    const [tempDateRange, setTempDateRange] = useState<DateRange | undefined>({
        from: fechaInicioDate,
        to: fechaFinDate
    });

    const applyDateFilter = () => {
        if (tempDateRange) {
            setDate({
                fechaInicio: tempDateRange.from || today,
                fechaFin: tempDateRange.to || today,
            });
        }
    };

    const onReset = () => {
        const lastMonth = subMonths(today, 1);
        setDate({
            fechaInicio: lastMonth,
            fechaFin: today
        });
        setTempDateRange({
            from: lastMonth,
            to: today
        });
    };

    return (
        <div className={cn("grid gap-2", className)}>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        id="date"
                        variant={"outline"}
                        className={cn(
                            "w-[300px] justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date?.fechaInicio ? (
                            date.fechaFin ? (
                                <>
                                    {format(date.fechaInicio, "LLL dd, y")} -{" "}
                                    {format(date.fechaFin, "LLL dd, y")}
                                </>
                            ) : (
                                format(date.fechaInicio, "LLL dd, y")
                            )
                        ) : (
                            <span>Selecciona una fecha</span>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={tempDateRange?.from || today}
                        selected={tempDateRange}
                        onSelect={setTempDateRange}
                        numberOfMonths={2}
                    />
                    <div className="p-4 w-full flex items-center gap-x-2">
                        <PopoverClose asChild>
                            <Button
                                onClick={onReset}
                                disabled={!tempDateRange?.from || !tempDateRange?.to}
                                className="w-full"
                                variant="outline"
                            >
                                Resetear
                            </Button>
                        </PopoverClose>
                        <PopoverClose asChild>
                            <Button
                                onClick={applyDateFilter}
                                disabled={!tempDateRange?.from || !tempDateRange?.to}
                                className="w-full"
                            >
                                Aplicar
                            </Button>
                        </PopoverClose>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    )
}