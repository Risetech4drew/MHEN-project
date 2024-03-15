import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function About() {
  return (
    <div className="mt-4 px-4">
      <h1 className="text-5xl text-black-700 text-center font-bold">About</h1>
      <div className="flex flex-wrap gap-8">
        <Card className="mt-6 w-96">
          <CardBody>
            <Typography variant="h5" color="black" className="font-bold mb-4">
              MHEN
            </Typography>
            <Typography>
              The Malawi Health Equity Network is interested to promote
              equitable access to quality, Affordable and responsive health care
              services in Malawi.
            </Typography>
          </CardBody>
          <CardFooter>
            <Link to="#">
              <Button
                size="sm"
                variant="text"
                className="flex items-center gap-2"
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
        <Card className="mt-6 w-96">
          <CardBody>
            <Typography variant="h5" color="black" className="font-bold mb-4">
              Board
            </Typography>
            <Typography>
              The Malawi Health Equity Network is interested to promote
              equitable access to quality, Affordable and responsive health care
              services in Malawi.
            </Typography>
          </CardBody>
          <CardFooter>
            <Link to="#">
              <Button
                size="sm"
                variant="text"
                className="flex items-center gap-2"
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
        <Card className="mt-6 w-96">
          <CardBody>
            <Typography variant="h5" color="black" className="font-bold mb-4">
              Staff
            </Typography>
            <Typography>
              The Malawi Health Equity Network is interested to promote
              equitable access to quality, Affordable and responsive health care
              services in Malawi.
            </Typography>
          </CardBody>
          <CardFooter>
            <Link to="#">
              <Button
                size="sm"
                variant="text"
                className="flex items-center gap-2"
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
        <Card className="mt-6 w-96">
          <CardBody>
            <Typography variant="h5" color="black" className="font-bold mb-4">
              Network members
            </Typography>
            <Typography>
              The Malawi Health Equity Network is interested to promote
              equitable access to quality, Affordable and responsive health care
              services in Malawi.
            </Typography>
          </CardBody>
          <CardFooter>
            <Link to="#">
              <Button
                size="sm"
                variant="text"
                className="flex items-center gap-2"
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
      </div>
    </div>
  );
}
export default About;
