import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "../../components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

function Home() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Projects />
    </>
  );
}
export default Home;
