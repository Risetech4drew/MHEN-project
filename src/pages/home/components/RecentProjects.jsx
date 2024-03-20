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

const recentProjects = [
  {
    image: image2,
    projectName: "Project title",
    projectdetails:
      "The Malawi health Equity Network is interested to promote equitable access to quality,affordable and responsive health care services in Malawi",
  },
  {
    image: image2,
    projectName: "Project title",
    projectdetails:
      "The Malawi health Equity Network is interested to promote equitable access to quality,affordable and responsive health care services in Malawi",
  },
  {
    image: image2,
    projectName: "Project title",
    projectdetails:
      "The Malawi health Equity Network is interested to promote equitable access to quality,affordable and responsive health care services in Malawi",
  },
];
function RecentProjects() {
  return (
    <div>
      <div className="mt-4 flex justify-between px-5">
        <h3 className="text-center text-blue-700 font-bold text-lg md:text-2xl">
          Recent Projects
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
      <div className="mt-[2rem] px-4 flex flex-col md:flex-row justify-center gap-20">
        {recentProjects.map((item, index) => (
          <Card
            key={index}
            className="mt-6 w-85 rounded-none md:w-96 border-b-4 border-blue-700"
          >
            <CardHeader
              floated={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img src={item.image} className="" alt="" />
            </CardHeader>
            <CardBody>
              <h2 className="mb-2 font-bold text-lg">{item.projectName}</h2>
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
export default RecentProjects;
