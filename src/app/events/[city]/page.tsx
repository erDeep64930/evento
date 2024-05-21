import { EventoEvent } from "@/app/lib/types";
import EventsList from "@/components/EventsList";
import H1 from "@/components/H1";
type EventsPageProps = {
  params: {
    city: string;
  };
};
import React from "react";

const EventsPage = async ({ params }: EventsPageProps) => {
  // this is to make all route small

  const city = params.city;

  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );

  const events: EventoEvent[] = await response.json();
  console.log(events);

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <div className="mb-28">
      <H1>
        {city === "all" && "All Events"}
        {city !== "all" &&
          `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>
      </div>
     
      {/* map the data in componentys */}
      <EventsList events={events} />
    </main>
  );
};

export default EventsPage;
