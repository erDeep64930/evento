import { EventoEvent } from "@/app/lib/types";
import React from "react";
import EventsCard from "./EventsCard";

type EventsListProps = {
  city: string;
};

const EventsList = async ({ city }: EventsListProps) => {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
    );

  const events: EventoEvent[] = await response.json();
  console.log(events);
  return (
    <section className="flex flex-wrap gap-10 justify-center max-w-[1100px]px-10">
      {events.map((event) => {
        return <EventsCard key={event.id} event={event} />;
      })}
    </section>
  );
};

export default EventsList;
