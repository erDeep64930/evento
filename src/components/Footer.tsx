import Link from "next/link";
import React from "react";
const routes = [
  { name: "Terms & Conditions", path: "/terms-condition" },
  { name: "Privacy Policy", path: "/privacy-policy" },
];

const Footer = () => {
  return (
    <div className="mt-auto flex items-center justify-between h-16 border-t border-white/10 px-3 text-xs sm:px-9">
      <small className="text-xs">&copy; 2024 DeepDesignWeb. All right reserve.</small>
      <ul className="flex gap-x-3">
        {routes.map(({ name, path }) => {
          return (
            <li key={path}>
              <Link href={path}> {name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Footer;
