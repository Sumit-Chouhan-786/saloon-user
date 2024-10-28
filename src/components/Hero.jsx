import Nav from "./common/Nav";
import heroLogo from "../assets/images/webp/hero-logo.webp";
import { useLocation } from "react-router-dom";
import {
  ABOUT_PATH,
  BLOG_PATH,
  CONTACT_PATH,
  HOME_PATH,
  SERVICES_PATH,
  BOOKING_PATH,
} from "../utilits/Constant";
const Hero = () => {
  const useLocationPath = useLocation();
  const pathname = useLocationPath.pathname;
  return (
    <>
      <div
        className={`bg-hero flex flex-col bg-cover bg-center bg-no-repeat ${
          pathname === HOME_PATH ? "min-h-screen" : ""
        }`}
      >
        <Nav />
        <div className="lg:max-w-[1332px] container px-4 mx-auto lg:py-10 py-5 flex-grow-[1] h-full flex items-center justify-center">
          {(pathname === HOME_PATH || pathname === "/home") && (
            <img src={heroLogo} alt="hero" className="w-full max-w-[864px]" />
          )}
          {pathname === ABOUT_PATH && (
            <h1 className="text-white text-center font-normal lg:text-[70px] md:text-[50px] text-[40px] font-abril uppercase">
              About Us
            </h1>
          )}
          {pathname === BLOG_PATH && (
            <h1 className="text-white text-center font-normal lg:text-[70px] md:text-[50px] text-[40px] font-abril uppercase">
              History
            </h1>
          )}
          {pathname === CONTACT_PATH && (
            <h1 className="text-white text-center font-normal lg:text-[70px] md:text-[50px] text-[40px] font-abril uppercase">
              Contact Us
            </h1>
          )}
          {pathname === SERVICES_PATH && (
            <h1 className="text-white text-center font-normal lg:text-[70px] md:text-[50px] text-[40px] font-abril uppercase">
              Edit Appointments
            </h1>
          )}
          {pathname === BOOKING_PATH && (
            <h1 className="text-white text-center font-normal lg:text-[70px] md:text-[50px] text-[40px] font-abril uppercase">
              Booking
            </h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Hero;
