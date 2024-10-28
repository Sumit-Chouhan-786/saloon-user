import React from "react";
import { LatestNewsBlog } from "../../utilits/helper";
const LatestNews = () => {
  return (
    <div className="py-[60px] bg-raisinBlack">
      <div className="lg:max-w-[1332px] container px-4 mx-auto">
        <p className="text-center text-yellow text-[20px] font-medium">
          OUR BLOG
        </p>
        <p className="text-center text-white font-abril lg:text-[60px] text-[40px] font-normal mb-10">
          LATEST NEWS
        </p>
        <div className=" flex flex-wrap gap-y-4 sm:max-w-full max-w-[330px] sm:mx-0 mx-auto">
          {LatestNewsBlog.map((obj, index) => {
            return (
              <div className="lg:w-3/12 md:w-4/12 sm:w-6/12 w-full sm:px-2" key={index}>
                <div className=" w-full">
                  <img
                    src={obj.img}
                    alt="vel-news"
                    className="w-full max-w-[330px]"
                  />
                  <div className="bg-black xl:p-[36px] p-5 flex justify-center items-center">
                    <div className="max-w-[206px]">
                      <p className="text-white font-abril xl:text-2xl text-xl font-normal">
                        {obj.title}
                      </p>
                      <p className="text-white xl:text-base text-sm font-normal my-4">
                        {obj.description}
                      </p>
                      <a
                        href={obj.link}
                        className="text-yellow text-sm font-normal"
                      >
                        READ MORE
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
