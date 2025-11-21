import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Skills />
      <AboutSection />
      <Projects />
      <ContactSection />
    </>
  );
}
