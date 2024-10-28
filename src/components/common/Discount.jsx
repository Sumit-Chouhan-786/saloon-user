import men from '../../assets/images/png/discount.png'
const Discount = () => {
  return (
    <div className="bg-yellow">
      <div className="container lg:py-[103px] max-w-[1332px] py-[50px] overflow-hidden px-4 mx-auto relative">
        <img className="absolute bottom-[-150px] sm:bottom-[-100px]  right-0" src={men} alt="discount" />
        <div className="max-w-[600px] pb-[100px] lg:pb-0">
          <h2 className="text-[40px] lg:text-[70px] font-abril">
            25% DISCOUNT
          </h2>
          <p className="text-sm sm:text-base md:my-8 my-4 sm:my-6">
            Curabitur vulputate arcu odio, ac facilisis diam accumsan ut. Ut
            imperdiet et leo in vulputate. Sed eleifend lacus eu sapien sagittis
            impe.
          </p>
          <button className="text-sm  bg-black text-yellow px-6 py-2 sm:text-base font-abril">
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default Discount