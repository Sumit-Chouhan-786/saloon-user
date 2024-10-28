import React from "react";
import { REVIEWS } from "../../utilits/helper";
const Reviews = () => {
  return (
    <div className="bg-white">
      <div className="lg:max-w-[1332px] container px-4 mx-auto py-[60px]">
        <p className="text-yellow font-medium text-xl leading-normal text-center">
          WHAT PEOPLE SAY ABOUT US
        </p>
        <h2 className="font-abril font-normal text-[50px] tracking-[0.5px] !leading-[135%] mt-6 text-center">
          CLIENTS REVIEWS
        </h2>
        <div className="flex flex-row flex-wrap -mx-4 mt-5 md:mt-[60px] justify-center md:justify-between">
          {REVIEWS.map((review, index) => {
            return (
              <div
                key={index}
                className="sm:w-1/2 w-full md:w-1/3 xl:w-[26%] px-4 mt-8 md:mt-0 "
              >
                <div className="max-w-[375px] sm:max-w-[310px] mx-auto sm:mx-0">
                  <img
                    src={review.img}
                    alt="review-img"
                    className="size-20 sm:size-24 object-cover mx-auto"
                  />
                  <p className="text-base text-center font-normal !leading-normal mt-4 sm:mt-6 md:mt-8 lg:mt-[50px]">
                    Vestibulum commodo sapien non elit porttitor, vitae volutpat
                    nibh mollis. Nulla porta risus id neque.
                  </p>
                  <p className="text-yellow text-center font-bold text-lg !leading-normal mt-4 sm:mt-6 md:mt-8 lg:mt-[50px]">
                    {review.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
