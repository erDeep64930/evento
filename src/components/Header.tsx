"use client";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
const routes = [
  { name: "Home", path: "/" },
  { name: "All Events", path: "/events/all" },
];

const Header = () => {
  const activePathname = usePathname();
  return (
    <header className="flex justify-between items-center border-b border-white/20 h-18 md:px-9 px-3 py-2 mt-2">
      <Logo />
      <ul className="flex items-center gap-x-5 text-white/60">
        {routes.map((route) => {
          return (
            <li
              key={route.path}
              className={` relative transition-all${
                activePathname === route.path ? "text-white" : "text-white/50"
              }`}
            >
              <Link href={route.path}>{route.name}</Link>

              {activePathname === route.path && (
                <div className="bg-accent h-[2px] w-full absolute bottom-0 mt-2"></div>
              )}
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;
