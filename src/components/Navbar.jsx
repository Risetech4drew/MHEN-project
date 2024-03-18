import { useState, useEffect, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { aboutMenuItems } from "../menuItems";
import { projectsMenuItems } from "../menuItems";
import { publicationsMenuItems } from "../menuItems";
import { FaAnglesUp } from "react-icons/fa6";
import { FaAnglesDown } from "react-icons/fa6";
import { Turn as Hamburger } from "hamburger-react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

function AboutDropdownMenuList() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const renderItems = aboutMenuItems.map(({ title }, key) => (
    <NavLink to="#" key={key}>
      <MenuItem>
        <Typography variant="small" color="blue-gray" className="font-bold">
          {title}
        </Typography>
      </MenuItem>
    </NavLink>
  ));

  return (
    <Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        allowHover={true}
        placement="bottom"
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-bold">
            <ListItem
              className="flex items-center gap-2 font-bold md:text-xl text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              About
              <FaAnglesDown
                strokeWidth={2.5}
                className={`hidden h-5 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <FaAnglesDown
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="outline-none outline-0">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </Fragment>
  );
}
function ProjectDropdownMenuList() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const renderItems = projectsMenuItems.map(({ title }, key) => (
    <NavLink to="#" key={key}>
      <MenuItem>
        <Typography variant="small" color="blue-gray" className="font-bold">
          {title}
        </Typography>
      </MenuItem>
    </NavLink>
  ));

  return (
    <Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        allowHover={true}
        placement="bottom"
      >
        <MenuHandler>
          <Typography as="div" variant="" className="">
            <ListItem
              className="flex items-center gap-2 font-bold md:text-xl text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Projects
              <FaAnglesDown
                strokeWidth={2.5}
                className={`hidden h5 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <FaAnglesDown
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="outline-none outline-0">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </Fragment>
  );
}
function PublicationsDropdownMenuList() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const renderItems = publicationsMenuItems.map(({ title }, key) => (
    <NavLink to="#" key={key}>
      <MenuItem>
        <Typography variant="small" color="blue-gray" className="font-bold">
          {title}
        </Typography>
      </MenuItem>
    </NavLink>
  ));

  return (
    <Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        allowHover={true}
        placement="bottom"
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-bold">
            <ListItem
              className="flex items-center gap-2 font-bold md:text-xl text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Publications
              <FaAnglesDown
                strokeWidth={2.5}
                className={`hidden h5 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <FaAnglesDown
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="outline-none outline-0">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:flex-row lg:p-1">
      <NavLink to="#" className="blue-gray">
        <ListItem className="font-bold md:text-xl">Home</ListItem>
      </NavLink>
      <AboutDropdownMenuList />
      <ProjectDropdownMenuList />
      <NavLink to="#">
        <ListItem className="font-bold md:text-xl">Partners</ListItem>
      </NavLink>
      <PublicationsDropdownMenuList />
      <NavLink to="#">
        <ListItem className="font-bold md:text-xl">Contact Us</ListItem>
      </NavLink>
    </List>
  );
}

function NavigationBar() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="sticky top-0 z-10 max-w-full px-4 py-2 mb-0 rounded-none">
      <div className="flex items-center justify-between text-blue-gray-900">
        <NavLink className=" text-blue-700 text-xl font-bold tracking-wider md:text-2xl lg:mb-6 lg:mt-0 lg:p-1">
          MHEN
        </NavLink>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="lg:hidden focus:bg-transparent active:bg-transparent hover:bg-transparent"
          ripple={false}
        >
          <Hamburger toggled={openNav} toggle={setOpenNav} />
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
export default NavigationBar;
