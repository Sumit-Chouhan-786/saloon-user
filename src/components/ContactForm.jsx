import React from "react";
import Booking from "../components/BookingForm";
const ContactForm = () => {
  return (
    <div className="bg-black bg-no-repeat bg-cover">
      <div className="container mx-auto max-w-[1332px] px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full flex flex-col items-center md:w-6/12">
            <h3 className="text-white text-[40px] font-abril">Come Visit Us</h3>
            <div className="flex flex-col pb-4">
              <h4 className="text-white text-[20px] text-center font-abril">
                Office
              </h4>
              <p className="text-white text-[16px] text-center">
                304 North Cardinal St. Dorchester Center, MA 02124
              </p>
            </div>
            <div className="flex flex-col pb-4">
              <h4 className="text-white text-[20px] text-center font-abril">
                Contact
              </h4>
              <p className="text-white text-[16px] text-center">
                info@company.com
              </p>
            </div>
            <div className="flex flex-col pb-4">
              <h4 className="text-white text-[20px] text-center font-abril">
                Working Hours
              </h4>
              <p className="text-white text-[16px] text-center">
                Monday-Saturday 9am - 6pm Sunday 10am - 17pm
              </p>
            </div>
          </div>
          <div className="w-full md:w-6/12">
            <Booking />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
