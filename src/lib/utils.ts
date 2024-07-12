import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { format, subDays } from 'date-fns';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDateRange (request?: IConteoCitasRequest){
  const defaultFechaFin = new Date();
  const defaultFechaInicio  = subDays(defaultFechaFin, 30);

  if(!request?.fechaInicio){
    return `${format(defaultFechaInicio, 'LLL dd')} - ${format(defaultFechaFin, 'LLL dd, y')} `
  }

  if(request.fechaFin){
    return `${format(request.fechaInicio, 'LLL dd')} - ${format(request.fechaFin, 'LLL dd, y')} `
  }

  return format(request.fechaInicio, 'LLL dd, y');
}

interface ChartDataItem {
  dia: string;
  [especialidad: string]: number | string;
}

export const formatChartData = (dias: DiasConteoData[]): ChartDataItem[] => {
  const chartData: ChartDataItem[] = [];

  dias.forEach((dia) => {
    const item: ChartDataItem = {
      dia: dia.dia,
    };

    dia.especialidades.forEach((especialidad) => {
      item[especialidad.nombre.toLocaleLowerCase()] = especialidad.total;
    });

    chartData.push(item);
  });

  return chartData;
};