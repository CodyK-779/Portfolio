import HeroDetails from "./HeroDetails";
import TiltedCard from "./ui/TiltedCard";

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

        {/* Second Column with Profile Picture */}
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="lg:size-[425px] md:size-[400px] sm:size-[350px] min-[450px]:size-[280px] size-[250px] aspect-square rounded-2xl shadow-[0_0_30px_rgba(139,92,246,0.4)]">
            <TiltedCard
              imageSrc="/test.jpeg"
              altText="Profile Picture"
              captionText="Khant Zaw Thein"
              containerHeight="100%"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={10}
              scaleOnHover={1.05}
              showMobileWarning={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
