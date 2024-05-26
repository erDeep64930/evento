import { capitalize } from "@/app/lib/utils";
import loading from "@/app/loading";
import EventsList from "@/components/EventsList";
import H1 from "@/components/H1";
import { Metadata } from "next";

type Props = {
  params: {
    city: string;
  };
};

type EventPageProps = Props & {
  searchParams: { [key: string]: string | string[] | undefined };
};

// dynamic meta data
export function generateMetadata({ params }: Props): Metadata {
  const city = params.city;

  return {
    title: city === "all" ? "All Events" : `Events in ${capitalize(city)}`,
  };
}

import React, { Suspense } from "react";

const EventsPage = async ({ params, searchParams }: EventPageProps) => {
  // this is to make all route small

  const city = params.city;
  const page = searchParams.page ?? 1;

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <div className="mb-28">
        <H1>
          {city === "all" && "All Events"}
          {city !== "all" && `Events in ${capitalize(city)}`}
        </H1>
      </div>

      {/* map the data in components */}
      <Suspense key={city + page} fallback={<loading />}>
        <EventsList city={city} page={+page} />
      </Suspense>
    </main>
  );
};

export default EventsPage;
