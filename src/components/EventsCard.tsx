"use client";
import { EventoEvent } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
type EventsCardProps = {
  event: EventoEvent;
};

const MotionLink = motion(Link);

const EventsCard = ({ event }: EventsCardProps) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1 ", "1.5 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  return (
    <MotionLink
      ref={ref}
      href={`/event/${event.slug}`}
      className=" flex-1 basis-80 h-[380px] max-w-[500px]"
      // @ts-ignore
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
    >
      <section className="relative  bg-white/[3%] flex flex-col rounded-xl overflow-hidden  w-full h-full state-effects">
        <Image
          src={event.imageUrl}
          alt={event.name}
          width={500}
          height={280}
          className="h-[60%] object-cover rounded-xl overflow-hidden"
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
    </MotionLink>
  );
};

export default EventsCard;
