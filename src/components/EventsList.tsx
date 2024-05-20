import { EventoEvent } from '@/app/lib/types'
import React from 'react'
import EventsCard from './EventsCard';

type EventsListProps = {
    events:EventoEvent[];
}

const EventsList = ({events}:EventsListProps) => {
  return (
    <section className='flex flex-wrap gap-10 justify-center max-w-[1100px]px-10'>
         {events.map((event) => {
        return (
            <EventsCard key={event.id} event={event}/>
        )})}
    </section>
  )
}

export default EventsList