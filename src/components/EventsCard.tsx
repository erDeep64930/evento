import { EventoEvent } from "@/app/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type EventsCardProps = {
  event: EventoEvent;
};

const EventsCard = ({ event }: EventsCardProps) => {
  return (
    <Link href={`/event/${event.slug}`} className=" flex-1 basis-80 h-[380px] max-w-[500px]">
      <section className="relative  bg-white/[3%] flex flex-col rounded-xl overflow-hidden transition hover:scale-105 active:scale-[1.02] w-full h-full">
        <Image
          src={event.imageUrl}
          alt={event.name}
          width={500}
          height={280}
          className="h-[60%] object-fit rounded-xl overflow-hidden"
        />
        <div className="flex flex-col justify-center items-center flex-1">
          <h2 className="text-2xl font-semibold ">{event.name}</h2>
          <p className=" italic text-white/75 ">{event.organizerName}</p>
          <p className="text-sm text-white/50 mt-4">{event.location}</p>
        </div>
        {/* this is for the date which is at top of imge */}
        <section className="absolute left-[12px] top-[12px] h-[45px] w-[45px] bg-black/30 rounded-md flex justify-center items-center flex-col hover:scale-105 active:scale-[1.02] transition">
          <p className="text-xl font-bold -mb-[5px]">
            {new Date(event.date).toLocaleDateString("en-US", {
              day: "2-digit",
            })}
          </p>
          <p className="text-xs uppercase text-accent">Nov</p>
        </section>
      </section>
    </Link>
  );
};

export default EventsCard;
