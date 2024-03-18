import image1 from "../../../assets/images/3.jpg";
import image2 from "../../../assets/images/V.jpg";
import image3 from "../../../assets/images/secondPic.jpg";
import { NavLink } from "react-router-dom";

const currentProjects = [{}];
function Projects() {
  return (
    <div className="mt-8 px-">
      <h1 className="text-3xl md:text-5xl text-center text-blue-700 font-bold">
        Projects
      </h1>
      <div className="mt-4 flex justify-between px-8">
        <h3 className="text-center text-blue-700 font-bold text-lg md:text-2xl">
          Current Projects
        </h3>
        <NavLink className="flex items-center gap-2 text-blue-700 font-bold">
          More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </NavLink>
      </div>
    </div>
  );
}

export default Projects;
