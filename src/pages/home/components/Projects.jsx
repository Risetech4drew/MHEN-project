import image1 from "../../../assets/images/3.jpg";
import image2 from "../../../assets/images/V.jpg";
import image3 from "../../../assets/images/secondPic.jpg";
import { NavLink } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const currentProjects = [
  {
    image: image1,
    projectName: "Project title",
    projectdetails:
      "The Malawi health Equity Network is interested to promote equitable access to quality,affordable and responsive health care services in Malawi",
  },
  {
    image: image1,
    projectName: "Project title",
    projectdetails:
      "The Malawi health Equity Network is interested to promote equitable access to quality,affordable and responsive health care services in Malawi",
  },
  {
    image: image1,
    projectName: "Project title",
    projectdetails:
      "The Malawi health Equity Network is interested to promote equitable access to quality,affordable and responsive health care services in Malawi",
  },
];
function Projects() {
  return (
    <div className="mt-8">
      <h1 className="text-3xl md:text-5xl text-center text-blue-700 font-bold">
        Projects
      </h1>
      <div className="mt-4 flex justify-between px-10">
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
      <div className="mt-[5rem] flex flex-col md:flex-row justify-center gap-20">
        {currentProjects.map((item, index) => (
          <Card className="mt-6 w-96">
            <CardHeader className="relative h-56">
              <img src={item.image} alt="" />
            </CardHeader>
            <CardBody>
              <h3 className="mb-2">{item.projectName}</h3>
              <p>{item.projectdetails}</p>
            </CardBody>
            <CardFooter>
              <NavLink className="flex items-center gap-2">
                Read more
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
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Projects;
