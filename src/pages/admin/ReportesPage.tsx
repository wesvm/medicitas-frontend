import { Card } from "@/components/card";
import { DataGrid } from "./parts/reportes-parts/data-grid";
import { DataCharts } from "./parts/reportes-parts/data-charts";
import { useState } from "react";
import { subMonths } from "date-fns";
import { useConteoCitas } from "@/hooks/useConteoCitas";
import { DateFilter } from "./parts/reportes-parts/date-filter";
import { format } from "date-fns/format";
import { CarrerFilter } from "./parts/reportes-parts/carrer-filter";

const ReportesPage = () => {

    const today = new Date();
    const [dateRange, setDateRange] = useState<IConteoCitasRequest | undefined>({
        fechaInicio: format(subMonths(today, 1), 'yyyy-MM-dd'),
        fechaFin: format(today, 'yyyy-MM-dd')
    });
    const { reportes, status } = useConteoCitas(dateRange);

    return (
        <div className="p-4">
            <section className="mb-4">
                <Card className="flex items-center justify-between">
                    <h1 className="font-bold text-2xl">Vista de reportes</h1>
                    <CarrerFilter setDate={setDateRange} date={dateRange} />
                    <DateFilter setDate={setDateRange} date={dateRange} today={today} />
                </Card>
            </section >

            <DataGrid data={reportes} status={status} request={dateRange} />
            <DataCharts data={reportes} status={status} />
        </div>
    )
}

export default ReportesPage;