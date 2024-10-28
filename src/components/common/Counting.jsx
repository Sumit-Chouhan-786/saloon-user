import { ScissorIcon, ShopIcon, RagerIcon } from "../../utilits/icons.jsx";

const Counting = () => {
  const counting = [
    { id: 1, icon: <RagerIcon />, count: 2500, title: "SHAVES" },
    { id: 3, icon: <ScissorIcon />, count: 4500, title: "HAIRCUTS" },
    { id: 2, icon: <ShopIcon />, count: 23, title: "OPEN SHOPS" },
  ];
  return (
    <div className="bg-[#212121] py-[60px]">
      <div className="lg:max-w-[1332px] container px-4 mx-auto">
        <div className="flex flex-wrap">
          {counting.map((item) => (
              <div
                key={item.id}
                className="flex w-full min-[500px]:w-6/12 mt-6 sm:mt-0 sm:w-1/3 lg:w-1/3 flex-col items-center justify-center"
              >
                <span className="w-[42px] h-[74px]">{item.icon}</span>
                <h3 className="text-white text-[30px] sm:text-[40px] font-abril">
                  {item.count}
              </h3>
              <p className="text-white text-[16px] sm:text-[20px] font-abril">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Counting;
