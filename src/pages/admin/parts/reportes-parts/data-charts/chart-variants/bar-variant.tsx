import { format } from "date-fns"
import {
    Tooltip,
    XAxis,
    BarChart,
    Bar,
    ResponsiveContainer,
    CartesianGrid
} from "recharts"
import { CustomTooltip } from "../custom-tooltip";

type ChartProps = {
    data: {
        dia: string;
        [especialidad: string]: number | string;
    }[];
}

export const BarVariant = ({ data }: ChartProps) => {
    return (
        <ResponsiveContainer width="100%" height={350}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    axisLine={false}
                    tickLine={false}
                    dataKey="dia"
                    tickFormatter={(value) => format(value, 'dd MMM')}
                    style={{ fontSize: "12px" }}
                    tickMargin={16}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar
                    dataKey="odontologia"
                    fill="#3d82f6"
                    className="drop-shadow-sm"
                />
                <Bar
                    dataKey="psicologia"
                    fill="#f43f5e"
                    className="drop-shadow-sm"
                />
            </BarChart>
        </ResponsiveContainer>
    )
}
