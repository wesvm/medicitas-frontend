import { FileSearch } from "lucide-react"

import { Card } from "@/components/card"
import { PieVariant } from "./pie-varitants/pie-variant";

type Props = {
    data?: EspecialidadConteoData[] | [];
}

export const SpendingPie = ({ data = [] }: Props) => {

    // const [chartType, setChartType] = useState("pie");

    // const onTypeChange = (type: string) => {
    //     setChartType(type);
    // }

    return (
        <Card className="border-none drop-shadow-sm">
            <header className="flex space-y-2 lg:space-y-0 lg:flex-row lg:items-center justify-between pb-2">
                <h1 className="font-bold text-2xl">Especialidades</h1>
                {/* <Select
                    defaultValue={chartType}
                    onValueChange={onTypeChange}
                >
                    <SelectTrigger className="lg:w-auto h-9 rounded-md px-3">
                        <SelectValue placeholder="Tipo de grafico" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="pie">
                            <div className="flex items-center">
                                <PieChart className="size-4 mr-2 shrink-0" />
                                <p className="line-clamp-1">Gráfico de dona</p>
                            </div>
                        </SelectItem>
                        <SelectItem value="radar">
                            <div className="flex items-center">
                                <Radar className="size-4 mr-2 shrink-0" />
                                <p className="line-clamp-1">Gráfico de radar</p>
                            </div>
                        </SelectItem>
                        <SelectItem value="radial">
                            <div className="flex items-center">
                                <Target className="size-4 mr-2 shrink-0" />
                                <p className="line-clamp-1">Gráfico radial</p>
                            </div>
                        </SelectItem>
                    </SelectContent>
                </Select> */}
            </header>
            <div>
                {data[0].total === 0 ? (
                    <div className="flex flex-col gap-y-4 items-center justify-center h-[350px] w-full">
                        <FileSearch className="size-6 text-muted-foreground" />
                        <p className="text-muted-foreground text-sm">No hay citas para este periodo.</p>
                    </div>
                ) : (

                    <PieVariant data={data} />
                    // <>
                    //     {chartType === 'pie' && <PieVariant data={data} />}
                    //     {chartType === 'radar' && <RadarVariant data={data} />}
                    //     {chartType === 'radial' && <div>radial</div>}
                    // </>
                )}
            </div>
        </Card>
    )
}