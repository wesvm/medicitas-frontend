import {
    Cell,
    Legend,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip
} from "recharts"
import { PieTooltip } from "../pie-tooltip";

interface PieProps {
    data: EspecialidadConteoData[] | [];
}

const COLORS = ["#0062FF", "#FFA500"];

export const PieVariant = ({ data }: PieProps) => {
    return (
        <ResponsiveContainer width="100%" height={350}>
            <PieChart>
                <Legend
                    layout="horizontal"
                    verticalAlign="bottom"
                    align="right"
                    iconType="circle"
                    content={({ payload }: any) => {
                        return (
                            <ul className="flex flex-col space-y-2">
                                {payload.map((entry: any, index: number) => (
                                    <li
                                        key={`item-${index}`}
                                        className="flex items-center space-x-2"
                                    >
                                        <span
                                            className="size-2 rounded-full"
                                            style={{ backgroundColor: entry.color }}
                                        />
                                        <div className="space-x-1">
                                            <span className="text-sm text-muted-foreground">
                                                {entry.value}
                                            </span>
                                            <span className="text-sm">
                                                {`${(entry.payload.percent * 100).toFixed(2)}%`}
                                            </span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )
                    }}
                />
                <Tooltip content={<PieTooltip />} />
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={90}
                    innerRadius={60}
                    paddingAngle={2}
                    fill="#8884d8"
                    nameKey="nombre"
                    dataKey="total"
                    labelLine={false}
                >
                    {data.map((_entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                        />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    )
}