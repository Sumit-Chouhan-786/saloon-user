import { useState } from "react";
import { NavLogo, NavMenu } from "../../utilits/icons.jsx";
import Button from "./Button";
import MobileNav from "./MobileNav";
import { Link, useLocation } from "react-router-dom";
import { NavLinks } from "../../utilits/helper";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const NavOpenHandler = () => {
    if (isOpen === true) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
    setIsOpen(!isOpen);
  };
  const useLocationPath = useLocation();
  const pathname = useLocationPath.pathname;

  return (
    <>
      <div className="lg:max-w-[1332px] container px-4 mx-auto md:pt-10 pt-5 flex-grow-0">
        <div className="flex justify-between items-center relative z-50">
          <a href="/">
            <NavLogo />
          </a>
          <div className="lg:flex hidden gap-10 items-center">
            {NavLinks.map((link, index) => (
              <a
                key={index}
                href={link.path}
                className={`capitalize text-sm relative after:content-[''] after:absolute after:bottom-[-10px] hover:after:left-0 after:w-0 transition-all ease-in-out duration-300 after:transition-all after:ease-in-out after:duration-300 after:h-[2px]  ${
                  pathname === link.path
                    ? "text-white after:bg-white after:w-full after:left-0"
                    : "text-lightBlack after:bg-lightBlack hover:after:w-full hover:after:left-0 after:left-[50%]"
                }`}
              >
                {link.title}
              </a>
            ))}
          </div>
          {pathname !== "/" ||
            (pathname !== "/appointments" && (
              <Link to="/Signup" className="lg:block hidden">
                <Button  content="Signup" />
              </Link>
            ))}
          {pathname !== "/" && (
            <Link to="/appointments" className="lg:block hidden">
              <Button content="Appointment" />
            </Link>
          )}
          <button className="lg:hidden block" onClick={NavOpenHandler}>
            <NavMenu />
          </button>
        </div>
      </div>
      <MobileNav NavOpenHandler={NavOpenHandler} isOpen={isOpen} />
    </>
  );
};

export default Nav;
