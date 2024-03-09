import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "../../components/Navigation";

function Home() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Navigation />
    </>
  );
}
export default Home;
