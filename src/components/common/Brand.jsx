import brand1 from '../../assets/images/PNG/brand1.PNG'
import brand2 from '../../assets/images/PNG/brand2.PNG'
import brand3 from '../../assets/images/PNG/brand3.PNG'
import brand4 from '../../assets/images/PNG/brand4.PNG'
import brand5 from '../../assets/images/webp/brand5.webp'
import brand6 from '../../assets/images/jpeg/brand6.jpg'
const Brand = () => {
  const brandData = [
    { image: brand1, alt: 'brand1' },
    { image: brand2, alt: 'brand2' },
    { image: brand3, alt: 'brand3' },
    { image: brand4, alt: 'brand4' },
    { image: brand5, alt: 'brand5' },
    { image: brand6, alt: 'brand6' },
  ];
  return (
    <div className="bg-raisinBlack py-[60px]">
      <div className="lg:max-w-[1332px] container px-4 mx-auto">
        <div className="flex flex-wrap items-center justify-between">
          <div className='w-full md:w-6/12'>
            <h2 className='font-normal font-abril text-[50px] tracking-[0.5px] !leading-[135%]'>BRANDS WE CARRY</h2>
            <p className='font-normal text-base !leading-normal mt-2 max-w-[371px] mb-5 sm:mb-8 md:mb-0'>
              Vestibulum commodo sapien non elit porttitor, vitae volutpat nibh
              mollis. Nulla porta risus id neque.{" "}
            </p>
          </div>
          <div className='grid lg:grid-cols-3 gap-4 grid-cols-1 sm:grid-cols-2 md:w-5/12'>
            {brandData.map((item, index) => (
              <img key={index} className='w-full h-full object-cover' src={item.image} alt={item.alt} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brand