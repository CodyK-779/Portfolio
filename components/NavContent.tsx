"use client";

import { useEffect, useState } from "react";
import NavLinks from "./NavLinks";

export const navLinks = [
  { title: "Home", link: "/" },
  { title: "Skills", link: "#skills" },
  { title: "About", link: "#about" },
  { title: "Projects", link: "#projects" },
  { title: "Contact", link: "#contact" },
];

const NavContent = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <section
      className={`fixed w-full z-20 transition-all duration-200 ease-in overflow-hidden ${
        showNavbar ? "sm:top-9 top-7" : "-top-16"
      }`}
    >
      <nav className="max-container flex items-center justify-center">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 px-1.5 py-1.5 min-[460px]:text-[15px] min-[420px]:text-sm text-xs rounded-full">
          <NavLinks />
        </div>
      </nav>
    </section>
  );
};

export default NavContent;
