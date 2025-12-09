"use client";

import { useEffect, useState } from "react";
import HeroDetails from "./HeroDetails";
import HeroImage from "./HeroImage";

export const socialIcons = [
  {
    icon: "ri-facebook-fill",
    name: "Faceook",
    href: "#",
    color: "bg-blue-600",
  },
  {
    icon: "ri-instagram-line",
    name: "Instagram",
    href: "#",
    color: "bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500",
  },
  {
    icon: "ri-linkedin-box-fill",
    name: "Linkedin",
    href: "https://www.linkedin.com/in/khant-zaw-thein/",
    color: "bg-blue-700",
  },
  {
    icon: "ri-github-fill",
    name: "Github",
    href: "https://github.com/CodyK-779",
    color: "bg-gray-700",
  },
];

const HeroSection = () => {
  const [marginTop, setMarginTop] = useState("mt-4");

  useEffect(() => {
    const updateMargin = () => {
      if (window.innerHeight < 600) {
        setMarginTop("mt-28");
      } else if (window.innerHeight < 730) {
        setMarginTop("mt-20");
      } else {
        setMarginTop("mt-4");
      }
    };

    updateMargin();

    window.addEventListener("resize", updateMargin);

    return () => window.removeEventListener("resize", updateMargin);
  }, []);

  return (
    <section
      className={`max-w-5xl mx-auto px-4 min-h-screen flex justify-center lg:mt-6 ${marginTop}`}
      id="home"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center lg:gap-16 gap-10">
        {/* First Column */}
        <HeroDetails />

        {/* Second Column */}
        <HeroImage />
      </div>
    </section>
  );
};

export default HeroSection;
