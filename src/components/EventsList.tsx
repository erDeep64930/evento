import React from "react";
import EventsCard from "./EventsCard";
import { getEvents } from "@/app/lib/utils";
import PaginationControls from "./PaginationControls";

type EventsListProps = {
  city: string;
  page?: number;
};

const EventsList = async ({ city, page }: EventsListProps) => {
  const { events, totalCount } = await getEvents(city, page);

  const previousPath = page > 1 ? `/events/${city}?page=${page - 1}` : "";
  const nextPath =
    totalCount > 6 * page ? `/events/${city}?page=${page + 1}` : "";

  return (
    <section className="flex flex-wrap gap-10 justify-center max-w-[1100px]px-10">
      {events.map((event) => {
        return <EventsCard key={event.id} event={event} />;
      })}

      {/* this is for button */}
      <PaginationControls previousPath={previousPath} nextPath={nextPath}/>
    </section>
  );
};

export default EventsList;
