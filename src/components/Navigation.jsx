import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// import NavbarDefault from "./Navbar";
import NavigationBar from "./Navbar";

function Navigation() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <NavigationBar />
    </>
  );
}
export default Navigation;
