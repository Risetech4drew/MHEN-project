import CurrentProjects from "./CurrentProjects";
import RecentProjects from "./RecentProjects";

function Projects() {
  return (
    <div className="mt-8">
      <h1 className="text-2xl md:text-3xl text-center text-blue-700 font-bold">
        Our Impact Through projects
      </h1>
      <p className="text-lg bg-blue-700 text-white opacity-75 w-96 md:w-1/2 m-auto p-2 font-bold tracking-wide md:text-2xl text-center mt-4">
        fostering positive change and advancing healthcare accessibility across
        our communities.
      </p>
      <CurrentProjects />
      <RecentProjects />
    </div>
  );
}

export default Projects;
