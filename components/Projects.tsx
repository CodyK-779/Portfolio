import ProjectSection from "./ProjectSection";

const Projects = () => {
  return (
    <section
      className="max-w-7xl px-4 mx-auto min-h-screen my-36"
      id="projects"
    >
      <div className="text-center mb-16">
        <h1 className="lg:text-5xl sm:text-4xl min-[400px]:text-3xl min-[350px]:text-2xl text-2xl font-bold min-[400px]:mb-4 mb-2.5">
          Featured{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Projects
          </span>
        </h1>
        <p className="lg:text-xl sm:text-lg min-[400px]:text-base text-sm font-medium sm:max-w-2xl w-full mx-auto text-neutral-300">
          A collection of my production-ready applications built with modern
          technologies and best practices.
        </p>
      </div>
      <ProjectSection />
    </section>
  );
};

export default Projects;
