import AboutLeft from "./AboutLeft";
import AboutRight from "./AboutRight";
import AboutHeader from "./AboutHeader";
import ContactCTA from "./ContactCTA";

export default function AboutSection() {
  return (
    <section id="about" className="max-container min-h-screen my-60">
      {/* Header */}
      <AboutHeader />

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:gap-7 lg:gap-6 gap-10">
        {/* Left Column - Story */}
        <AboutLeft />

        {/* Right Column - Approach & Value */}
        <AboutRight />
      </div>

      <ContactCTA />
    </section>
  );
}
