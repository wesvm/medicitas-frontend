import { formatDateRange } from "@/lib/utils";
import { Briefcase, CalendarPlus, GraduationCap } from "lucide-react";
import { DataCardLoading } from "./data-card-loading";
import { DataCard } from "./data-card";

interface DataGridProps {
    data?: IConteoCitasResponse | null;
    status: string;
    request?: IConteoCitasRequest;
}

export const DataGrid = ({ data, status, request }: DataGridProps) => {

    const dateRangeLabel = formatDateRange(request);

    if (status === 'pending') return (
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-4">
            <DataCardLoading />
            <DataCardLoading />
            <DataCardLoading />
        </section>
    );

    return (
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-4">
            <DataCard
                title="Total citas"
                value={data?.citas.total}
                dateRange={dateRangeLabel}
                icon={CalendarPlus}
                variant="default"
            />

            <DataCard
                title="Total citas (Estudiantes)"
                value={data?.citas.estudiantes}
                dateRange={dateRangeLabel}
                icon={GraduationCap}
                variant="success"
            />

            <DataCard
                title="Total citas (Otros)"
                value={data?.citas.noEstudiantes}
                dateRange={dateRangeLabel}
                icon={Briefcase}
                variant="warning"
            />
        </section>
    )
}