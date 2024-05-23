import React from "react";
import EventsCard from "./EventsCard";
import { getEvents } from "@/app/lib/utils";

type EventsListProps = {
  city: string;
};

const EventsList = async ({ city }: EventsListProps) => {
  const events = await getEvents(city);
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
