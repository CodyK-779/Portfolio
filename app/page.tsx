import AboutPage from "@/components/About";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import SkillsSection from "@/components/Deepseek";
import Skills from "@/components/Skills";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Skills />
      <SkillsSection />
      <AboutPage />
      <Projects />
    </>
  );
}
