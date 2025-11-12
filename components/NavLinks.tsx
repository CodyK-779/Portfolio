"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks } from "./NavContent";

const NavLinks = () => {
  const [currentPath, setCurrentPath] = useState("Home");

  return (
    <ul className="flex items-center min-[425px]:gap-2 min-[375px]:gap-1.5 min-[350px]:gap-1 gap-0">
      {navLinks.map((link) => (
        <li
          key={link.title}
          onClick={() => setCurrentPath(link.title)}
          className={`${
            currentPath === link.title && "bg-white text-black"
          } rounded-full min-[375px]:px-3 min-[330px]:px-2.5 px-2 py-1.5 font-medium transition-all duration-300 ease-in`}
        >
          <Link href={link.link}>{link.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
