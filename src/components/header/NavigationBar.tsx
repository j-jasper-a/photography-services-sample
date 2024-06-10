"use client";

import { useState } from "react";
import { links } from "@/config/links";
import Link from "next/link";
import Submenu from "./Submenu";

const NavigationBar = () => {
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const handleMouseEnter = (name: any) => {
    setActiveSubmenu(name);
  };

  const handleMouseLeave = () => {
    setActiveSubmenu(null);
  };

  return (
    <nav className="hidden md:block">
      <ul className="flex h-full w-full items-center justify-center px-6 text-light">
        {links.map((link) => (
          <li
            key={link.name}
            className="flex grow bg-dark transition-all duration-300 hover:bg-brand"
            onMouseEnter={() => handleMouseEnter(link.name)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              className="h-full w-full grow py-6 text-center text-xl font-medium uppercase"
              href={link.href}
            >
              {link.name}
            </Link>
            {link.submenu && activeSubmenu === link.name && (
              <Submenu submenu={link.submenu} />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationBar;
