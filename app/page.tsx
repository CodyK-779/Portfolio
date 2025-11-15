import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import SkillsSection from "@/components/Deepseek";
import Skills from "@/components/Skills";
import AboutSection from "@/components/AboutSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Skills />
      {/* <SkillsSection /> */}
      <AboutSection />
      <Projects />
    </>
  );
}
