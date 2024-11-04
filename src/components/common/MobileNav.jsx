import React from "react";
import Button from "./Button";
import { NavLinks } from "../../utilits/helper";
import { Link, useLocation } from "react-router-dom";

const MobileNav = ({ NavOpenHandler, isOpen }) => {
   const useLocationPath = useLocation();
   const pathname = useLocationPath.pathname;
  return (
    <div
      className={` fixed top-0 transition-all ease-in-out duration-300 z-10 h-screen bg-black w-full ${
        isOpen ? "start-0" : "-start-full"
      }`}
    >
      <div className="flex lg:hidden flex-col gap-5 items-center h-full justify-center">
        {NavLinks.map((link, index) => (
          <a
            key={index}
            href={link.path}
            className={`capitalize md:text-sm text-xs relative after:content-[''] after:absolute after:bottom-[-10px] hover:after:left-0 after:w-0 transition-all ease-in-out duration-300 after:transition-all after:ease-in-out after:duration-300 after:h-[2px]  ${
              pathname === link.path
                ? "text-white after:bg-white after:w-full after:left-0"
                : "text-lightBlack after:bg-lightBlack hover:after:w-full hover:after:left-0 after:left-[50%]"
            }`}
          >
            {link.title}
          </a>
        ))}

        {pathname !== "/" ||
          (pathname !== "/appointments" && (
            <Link onClick={NavOpenHandler} to="/Signup" className="block lg:hidden">
              <Button content="Signup" />
            </Link>
          ))}
        {pathname !== "/" && (
          <Link
            to="/appointments"
            onClick={NavOpenHandler}
            className="block lg:hidden"
          >
            <Button content="Appointment" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default MobileNav;
