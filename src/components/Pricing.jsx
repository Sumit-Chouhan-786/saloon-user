import React from "react";
import { servicesPricing } from "../utilits/helper";

const Pricing = () => {
  return (
    <div className="bg-raisinBlack py-[60px]">
      <div className="lg:max-w-[1332px] container px-4 mx-auto">
        <div className=" flex flex-wrap justify-between md:gap-y-[60px] gap-y-10">
          {servicesPricing.map((service, index) => (
            <div className="lg:w-6/12 w-full" key={index}>
              <div className="lg:max-w-[420px]">
                <div className=" flex items-center justify-center">
                  <p className="text-white text-2xl tracking-[0.5px] font-abril">
                    {service.title}
                  </p>
                  <span className=" block min-h-[2px] bg-yellow min-w-[200px] w-full mx-3"></span>
                  <p className="text-white text-2xl tracking-[0.5px] font-abril">
                    {service.price}
                  </p>
                </div>
                <p className="text-white text-base tracking-[0.5px] mt-4">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
