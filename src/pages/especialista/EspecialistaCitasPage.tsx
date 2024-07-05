import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css"
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import es from 'date-fns/locale/es'
import { useCitasEspecialista } from '@/hooks/useCitas'

const locales = {
    'es': es,
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
})

const messages = {
    allDay: "Todo el día",
    previous: "Anterior",
    next: "Siguiente",
    today: "Hoy",
    month: "Mes",
    week: "Semana",
    day: "Día",
    agenda: "Agenda",
    date: "Fecha",
    time: "Hora",
    event: "Evento",
    noEventsInRange: "Sin eventos",
    showMore: (total: any) => `+${total} más`,
};

export const EspecialistaCitasPage = () => {

    const { status, citasEspecialista } = useCitasEspecialista();

    if (status === 'pending') return <div>Loading..</div>;

    const eventos = citasEspecialista.map(cita => {
        const horaInicio = new Date(`${cita.fecha}T${cita.hora}`);
        const horaFin = new Date(horaInicio);
        horaFin.setHours(horaFin.getHours() + 2);

        return {
            id: cita.id,
            title: cita.motivo,
            start: horaInicio,
            end: horaFin,
        };
    });

    return (
        <div className="p-4">
            <section className="p-4 bg-white mb-4 rounded-lg">
                <h1 className="font-bold text-2xl">Mis citas</h1>
            </section>
            <section className="p-4 bg-white rounded-lg">
                <Calendar
                    localizer={localizer}
                    events={eventos}
                    messages={messages}
                    startAccessor="start"
                    endAccessor="end"
                    style={{
                        height: 800,
                    }}
                />
            </section>
        </div>
    )
}