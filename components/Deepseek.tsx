import { AceButton } from "./ui/AceButton";
import TiltedCard from "./ui/TiltedCard";

const Deepseek = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16 w-full">
        {/* Text Content */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Full-Stack Developer{" "}
            <span className="block mt-2 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Khant Zaw Thein
            </span>
          </h1>

          <p className="text-lg text-neutral-300 mt-6 mb-8 max-w-xl">
            Building modern, secure, and performant web applications using{" "}
            <strong>Next.js</strong>, <strong>TypeScript</strong>, and{" "}
            <strong>modern full-stack tools</strong>.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <AceButton className="px-6 py-3 text-base font-medium">
              View My Work
            </AceButton>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 border border-neutral-600 rounded-lg hover:bg-neutral-800 transition-colors text-sm"
            >
              Download CV
            </a>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center lg:justify-start gap-4 mt-8 text-sm text-neutral-400">
            <span>3 Full-Stack Projects</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>Better-Auth</span>
          </div>
        </div>

        {/* Profile Image */}
        <div className="order-1 lg:order-2 flex justify-center">
          <TiltedCard
            imageSrc="/Shrek.jpg" // Consider updating
            altText="Khant Zaw Thein - Full-Stack Developer"
            captionText="Khant Zaw Thein"
            containerHeight="320px"
            containerWidth="320px"
            imageHeight="320px"
            imageWidth="320px"
            rotateAmplitude={10}
            scaleOnHover={1.05}
            showMobileWarning={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Deepseek;
