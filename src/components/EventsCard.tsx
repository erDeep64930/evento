import { EventoEvent } from "@/app/lib/types";
import Image from "next/image";
import React from "react";

type EventsCardProps = {
  event: EventoEvent;
};

const EventsCard = ({ event }: EventsCardProps) => {
  return (
    <div>
      <section className="h-[380px] w-[500px]">
        <Image src={event.imageUrl} alt={event.name} width={500} height={280} />
      </section>
    </div>
  );
};

export default EventsCard;
