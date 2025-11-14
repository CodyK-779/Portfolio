import AboutPage from "@/components/About";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import SkillsSection from "@/components/Deepseek";
import Skills from "@/components/Skills";
import SkillsSection2 from "@/components/DSSkills";
import AboutSection from "@/components/AboutSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Skills />
      {/* <SkillsSection /> */}
      {/* <SkillsSection2 /> */}
      {/* <AboutPage /> */}
      <AboutSection />
      <Projects />
    </>
  );
}
