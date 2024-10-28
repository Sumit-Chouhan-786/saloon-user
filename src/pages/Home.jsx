import Services from "../components/common/Services";
import Counting from "../components/common/Counting";
import Discount from "../components/common/Discount";
import Reviews from "../components/common/Reviews";
import Brand from "../components/common/Brand";
const Home = () => {
  return (
    <>
      <div className="bg-black">
        <Services />
        <Counting />
        <Discount />
        <Reviews/>
        <Brand/>
      </div>
    </>
  );
};

export default Home;
