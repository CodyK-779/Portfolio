import ProjectHeader from "./ProjectHeader";
import ProjectSection from "./ProjectSection";

const Projects = () => {
  return (
    <section
      className="max-w-7xl px-4 mx-auto min-h-screen my-40"
      id="projects"
    >
      <ProjectHeader />
      <ProjectSection />
    </section>
  );
};

export default Projects;
