import { LocationIcon, EmailIcon, PhoneIcon, TimeIcon } from '../../utilits/icons.jsx'
const Footer = () => {
  return (
    <div className="bg-[#202020] lg:py-[100px] py-8 md:py-12">
      <div className="container px-4 mx-auto">
        <h2 className='font-abril font-normal text-[50px] tracking-[0.5px] !leading-[135%] text-center'>CONTACT US</h2>
        <p className='text-base text-center font-normal !leading-normal mt-6 max-w-[771px] mx-auto'>
          Duis pretium gravida enim, vel maximus ligula fermentum a. Sed rhoncus
          eget ex id egestas. Nam nec nisl placerat, tempus erat a, condimentum
          metusurabitur nulla nisi.
        </p>
        <div className="flex mt-20 flex-wrap gap-7 sm:gap-10 md:gap-16 lg:gap-[75px] justify-between lg:justify-center">
          <div className='flex flex-col items-center gap-2.5 sm:gap-5 w-full sm:w-auto'>
            <LocationIcon />
            <h3 className='font-abril font-normal text-xl !leading-normal tracking-[0.5px]'>ADDRESS</h3>
            <p className='font-normal text-[17px] !leading-normal max-w-[238px] text-center'>304 North Cardinal St. Dorchester Center, MA 02124</p>
          </div>
          <div className='flex flex-col items-center gap-2.5 sm:gap-5 w-full sm:w-auto'>
            <EmailIcon />
            <h3 className='font-abril font-normal text-xl !leading-normal tracking-[0.5px]'>EMAIL</h3>
            <p className='font-normal text-[17px] !leading-normal max-w-[158px] text-center'>info@company.com</p>
          </div>
          <div className='flex flex-col items-center sm:max-w-[127px] w-full sm:w-auto'>
            <PhoneIcon />
            <h3 className='font-abril font-normal text-xl !leading-normal tracking-[0.5px] py-2.5 sm:py-[15px]'>PHONE</h3>
            <a href="tel:+1234567890" className='font-normal text-[17px] !leading-normal max-w-[158px] text-center mb-1'>+1234567890</a>
            <a href="tel:+635551212" className='font-normal text-[17px] !leading-normal max-w-[158px] text-center'>(+63) 555 1212</a>
          </div>
          <div className='flex flex-col items-center gap-2.5 sm:gap-[18px] sm:mx-auto lg:mx-0 w-full sm:w-auto'>
            <TimeIcon />
            <h3 className='font-abril font-normal text-xl !leading-normal tracking-[0.5px]'> WORKING HOURS</h3>
            <p className='font-normal text-[17px] !leading-normal max-w-[181px] text-center'>Mon - Fri: 10am - 6pm
              Sat - Sun: 9am - 7pm</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer