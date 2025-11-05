"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks } from "./NavContent";

const NavLinks = () => {
  const [currentPath, setCurrentPath] = useState("Home");

  return (
    <ul className="flex items-center gap-2">
      {navLinks.map((link) => (
        <li
          key={link.title}
          onClick={() => setCurrentPath(link.title)}
          className={`${
            currentPath === link.title && "bg-white text-black"
          } rounded-full min-[350px]:px-3 px-2.5 py-1.5 font-medium transition-all duration-300 ease-in`}
        >
          <Link href={link.link}>{link.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
