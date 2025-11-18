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
    href: "#",
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
  return (
    <section className="max-w-5xl mx-auto px-4 min-h-screen flex justify-center lg:mt-6 mt-28">
      <div className="grid lg:grid-cols-2 w-full grid-cols-1 items-center justify-center lg:gap-16">
        {/* First Column */}
        <HeroDetails />

        {/* Second Column */}
        <HeroImage />
      </div>
    </section>
  );
};

export default HeroSection;
