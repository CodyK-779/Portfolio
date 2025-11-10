import ProjectSection from "./ProjectSection";

const Projects = () => {
  return (
    <section
      className="max-w-7xl px-4 mx-auto min-h-screen my-36"
      id="projects"
    >
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">
          My{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Projects
          </span>
        </h1>
        <p className="font-medium text-xl text-neutral-300">
          Deployed, Production-Ready Applications
        </p>
      </div>
      <ProjectSection />
    </section>
  );
};

export default Projects;
