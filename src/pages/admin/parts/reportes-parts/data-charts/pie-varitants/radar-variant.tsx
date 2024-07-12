import {
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    Radar,
    RadarChart,
    ResponsiveContainer
} from "recharts"
import { PieTooltip } from "../pie-tooltip";

interface PieProps {
    data: EspecialidadConteoData[] | [];
}

const COLORS = ["#0062FF", "#FFA500"];

export const RadarVariant = ({ data }: PieProps) => {
    return (
        <ResponsiveContainer width="100%" height={350}>
            <RadarChart
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={60}
            >
                <PolarGrid />
            </RadarChart>
        </ResponsiveContainer>
    )
}