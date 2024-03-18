import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
const cardDetails = [
  {
    title: "Mhen",
    description:
      "The Malawi health Equity Network is interested to promote equitable access to quality,affordable and responsive health care services in Malawi",
  },
  {
    title: "Board",
    description:
      "The Malawi health Equity Network is interested to promote equitable access to quality,affordable and responsive health care services in Malawi",
  },
  {
    title: "Staff",
    description:
      "The Malawi health Equity Network is interested to promote equitable access to quality,affordable and responsive health care services in Malawi",
  },
  {
    title: "Network Members",
    description:
      "The Malawi health Equity Network is interested to promote equitable access to quality,affordable and responsive health care services in Malawi",
  },
];

function About() {
  return (
    <div className="mt-4 mb-4 px-4">
      <h1 className="text-3xl md:text-5xl text-blue-700 text-center font-bold">
        About
      </h1>
      <div className="flex flex-wrap gap-8 justify-center mt-8">
        {cardDetails.map((item, index) => (
          <Card
            key={index}
            className="relative md:flex md:justify-center mt-6 w-96 md:w-[50rem] md:h-[20rem]"
          >
            <CardBody>
              <Typography
                variant="h5"
                color="black"
                className="font-bold mb-4 md:text-2xl"
              >
                {item.title}
              </Typography>
              <Typography className="md:text-lg">{item.description}</Typography>
            </CardBody>
            <CardFooter>
              <Link to="/">
                <Button
                  size="sm"
                  variant="text"
                  className="flex items-center gap-2 md:text-lg hover:text-blue-700 focus:bg-transparent active:bg-transparent hover:bg-transparent hover:scale-125"
                >
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
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
export default About;
