import CurrentProjects from "./CurrentProjects";
import RecentProjects from "./RecentProjects";
import image2 from "../../../assets/images/V.jpg";

function Projects() {
  return (
    <div className="mt-7 px-4">
      <h1 className="text-3xl mt-6 md:text-5xl text-center text-blue-700 font-bold">
        Our Impact Through projects
      </h1>
      <div className="mt-[3rem] flex flex-col lg:flex-row justify-center items-center">
        <div className="h-[20rem] bg-blue-700 w-full lg:w-[35rem] lg:mr-[-5rem] z-10 p-6 flex justify-center items-center rounded-xl">
          <p className="text-white text-2xl tracking-wide md:text-3xl p-4">
            fostering positive change and advancing healthcare accessibility
            across our communities.
          </p>
        </div>
        <img
          src={image2}
          className="md:h-[30rem] rounded-xl"
          alt="a lady holding a baby thats getting a vaccination from the nurse"
        />
      </div>
    </div>
  );
}

export default Projects;
