import { Carousel } from "@material-tailwind/react";
import image1 from "../../../assets/images/3.jpg";
import image2 from "../../../assets/images/V.jpg";
import image3 from "../../../assets/images/secondPic.jpg";

const carouselDetails = [
  {
    image: image1,
    title: "Malawi Health Equuity Network",
    description:
      "promoting equitable access to quality, affordable and responsive health care services in Malawi",
    alt: "hhshshj",
  },
  {
    image: image2,
    title: "Mother care groups boosting child vaccination rates",
    alt: "A nurse vaccinating a child held in the mothers hands",
  },
  {
    image: image3,
    title: "Monitoring and Mentorship of the Core Group",
    alt: "A group of woman sitted listening to a man teaching them about something",
  },
];

function Hero() {
  return (
    <Carousel
      autoplay={true}
      loop={true}
      transition={{ duration: 1.5 }}
      className="mt-0"
    >
      {carouselDetails.map((item, index) => (
        <div key={index} className="relative h-[25rem] w-full">
          <img
            src={item.image}
            alt={item.alt}
            className="h-full w-full object-center object-cover"
          />
          <div className="absolute inset-0 h-full w-full bg-black/75">
            {item.title && <h1>{item.title}</h1>}
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
export default Hero;