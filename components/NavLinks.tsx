"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "./NavContent";

const NavLinks = () => {
  const [currentPath, setCurrentPath] = useState("Home");

  useEffect(() => {
    const sections = navLinks.map((link) => document.querySelector(link.link));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            const activeLink =
              navLinks.find((l) => l.link === `#${id}`)?.title || "";
            setCurrentPath(activeLink);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

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
