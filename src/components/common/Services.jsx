import { servicesContent } from "../../utilits/helper";
import { useLocation } from "react-router-dom";
import { HOME_PATH } from "../../utilits/Constant";

const Services = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <div className="bg-services-bg bg-no-repeat bg-cover py-[70px]">
      <div className="lg:max-w-[1332px] container px-4 mx-auto">
        {pathname === HOME_PATH && (
          <>
            <p className="text-center text-xl mb-0 text-yellow">
              OUR TREATMENT
            </p>
            <h2 className="text-center text-[50px] text-white leading-[50px] mb-16 font-abril">
              SERVICES
            </h2>
          </>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {servicesContent.map((service, index) => (
            <a
              href="/Appointments"
              key={index}
              className="border hover:border-yellow-400 border-white transition-all duration-300 py-12 flex flex-col items-center justify-center px-10 p-4"
            >
              <img src={service.image} alt={service.title} />
              <h3 className="text-white text-[20px] leading-[26px] tracking-[5%] my-4 font-abril">
                {service.title}
              </h3>
              <p className="text-white text-center text-[16px]">
                Duis porta, ligula rhoncuseuism od pretium, nisi tellus eleifend
                odio, luctus viverra sem.
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
