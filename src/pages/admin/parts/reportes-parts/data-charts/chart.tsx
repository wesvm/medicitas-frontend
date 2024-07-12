import { useState } from "react";
import { formatChartData } from "@/lib/utils";
import { AreaChart, BarChart, FileSearch, LineChart } from "lucide-react"

import { Card } from "@/components/card"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

import { AreaVariant } from "./chart-variants/area-variant"
import { BarVariant } from "./chart-variants/bar-variant";
import { LineVariant } from "./chart-variants/line-variant";

type ChartProps = {
    data?: {
        dia: string;
        especialidades: {
            nombre: string;
            total: number;
        }[]
    }[];
}

export const Chart = ({ data = [] }: ChartProps) => {

    const [chartType, setChartType] = useState("area");
    const transformedData = formatChartData(data);

    const onTypeChange = (type: string) => {
        setChartType(type);
    }

    return (
        <Card className="border-none drop-shadow-sm">
            <header className="flex space-y-2 lg:space-y-0 lg:flex-row lg:items-center justify-between pb-2">
                <h1 className="font-bold text-2xl">Citas</h1>
                <Select
                    defaultValue={chartType}
                    onValueChange={onTypeChange}
                >
                    <SelectTrigger className="lg:w-auto h-9 rounded-md px-3">
                        <SelectValue placeholder="Tipo de grafico" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="area">
                            <div className="flex items-center">
                                <AreaChart className="size-4 mr-2 shrink-0" />
                                <p className="line-clamp-1">Gráfico de area</p>
                            </div>
                        </SelectItem>
                        <SelectItem value="line">
                            <div className="flex items-center">
                                <LineChart className="size-4 mr-2 shrink-0" />
                                <p className="line-clamp-1">Gráfico de lineas</p>
                            </div>
                        </SelectItem>
                        <SelectItem value="bar">
                            <div className="flex items-center">
                                <BarChart className="size-4 mr-2 shrink-0" />
                                <p className="line-clamp-1">Gráfico de barras</p>
                            </div>
                        </SelectItem>
                    </SelectContent>
                </Select>
            </header>
            <div>
                {data.length === 0 ? (
                    <div className="flex flex-col gap-y-4 items-center justify-center h-[350px] w-full">
                        <FileSearch className="size-6 text-muted-foreground" />
                        <p className="text-muted-foreground text-sm">No hay citas para este periodo.</p>
                    </div>
                ) : (
                    <>
                        {chartType === 'line' && <LineVariant data={transformedData} />}
                        {chartType === 'area' && <AreaVariant data={transformedData} />}
                        {chartType === 'bar' && <BarVariant data={transformedData} />}
                    </>
                )}
            </div>
        </Card>
    )
}