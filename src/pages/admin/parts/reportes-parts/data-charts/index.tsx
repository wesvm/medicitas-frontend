import { Chart } from "./chart"
import { DataChardLoading } from "./data-chart-loading";
import { SpendingPie } from "./spending-pie";

interface DataChartsProps {
    data: IConteoCitasResponse | null;
    status: string;
}

export const DataCharts = ({ data, status }: DataChartsProps) => {

    if (status === 'pending') return (
        <section className="grid grid-cols-1 lg:grid-cols-6 gap-8">
            <div className="col-span-1 lg:col-span-3 xl:col-span-4">
                <DataChardLoading />
            </div>
            <div className="col-span-1 lg:col-span-3 xl:col-span-2">
                <DataChardLoading />
            </div>
        </section>
    );

    return (
        <section className="grid grid-cols-1 lg:grid-cols-6 gap-8">
            <div className="col-span-1 lg:col-span-3 xl:col-span-4">
                <Chart data={data?.dias} />

            </div>
            <div className="col-span-1 lg:col-span-3 xl:col-span-2">
                <SpendingPie data={data?.citas.especialidades} />
            </div>
        </section>
    )
}