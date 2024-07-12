import { format } from "date-fns"
import {
    Tooltip,
    XAxis,
    LineChart,
    Line,
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

export const LineVariant = ({ data }: ChartProps) => {
    return (
        <ResponsiveContainer width="100%" height={350}>
            <LineChart data={data}>
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
                <Line
                    dot={false}
                    dataKey="odontologia"
                    stroke="#3d82f6"
                    strokeWidth={2}
                    className="drop-shadow-sm"
                />
                <Line
                    dot={false}
                    dataKey="psicologia"
                    stroke="#f43f5e"
                    strokeWidth={2}
                    className="drop-shadow-sm"
                />
            </LineChart>
        </ResponsiveContainer>
    )
}
