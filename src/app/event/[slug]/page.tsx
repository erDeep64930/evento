import H1 from "@/components/H1";
import Image from "next/image";
import React from "react";
type EventPageProps = {
  params: {
    slug: string;
  };
};

const EventPageSlug = async ({ params }: EventPageProps) => {
  const slug = params.slug;
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );
  const event = await response.json();
  console.log(event);

  return (
    <main>
      {/* this is for backgrond images */}
      <section className="relative  overflow-hidden flex justify-center items-center py-14 lg:py-20 ">
        <Image
          className="object-cover blur-3xl z-0"
          src={event.imageUrl}
          alt="Events background images"
          fill
          sizes="(max-width:1280) 100vw, 1280px"
          quality={50}
          priority
        />

        {/* this is for main images absolute */}
        <div className="z-1 relative flex gap-6 lg:gap-x-16 flex-col lg:flex-row ">
          <Image
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={200}
            priority
            className="h-[60%] object-fit rounded-xl overflow-hidden border-2 border-white/50 object-cover"
          />
          <div className="flex flex-col   ">
            {/* display date in day name , month  */}
            {/*  friday, july12 */}
            <p className="text-white/75 mt-2">
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>

            <H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">
              {event.name}
            </H1>
            <p className="whitespace-nowrap text-xl text-white/75">
              Organised by -{" "}
              <span className="italic">{event.organizerName}</span>
            </p>
            <button className="bg-white/20 text-lg capitalize mt-5  w-[95vw] sm:w-full py-2 rounded-md border-2 border-white/10 bg-blur lg:mt-auto state-effects">
              Get Tickets
            </button>
          </div>
        </div>
      </section>
      {/* this is for about section */}
      <div className="text-center px-5 py-16  min-h-[75vh]">
        <Section>
          <SectionHeading>About this event</SectionHeading>
          <SectionContent>{event.description}</SectionContent>
        </Section>
        {/* this is for location section */}
        <Section>
          <SectionHeading>Location</SectionHeading>
          <SectionContent>{event.location}</SectionContent>
        </Section>
      </div>
    </main>
  );
};

export default EventPageSlug;

function Section({ children }: { children: React.ReactNode }) {
  return <section className="mb-12 ">{children}</section>;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl mb-8">{children}</h2>;
}

function SectionContent({ children }: { children: React.ReactNode }) {
  return (
    <p className="max-w-4xl mx-auto text-lg leading-8 text-white/75">
      {children}
    </p>
  );
}
