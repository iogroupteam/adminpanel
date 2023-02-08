import { BiHomeAlt } from 'react-icons/bi';
import { ImEarth } from 'react-icons/im';
import { BsCloudy } from 'react-icons/bs';
import { BsCameraVideo } from 'react-icons/bs';
import { BsPlayBtn } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { CiWallet } from 'react-icons/ci';
import { AiOutlineCalculator } from 'react-icons/ai';
import { BsHeadphones } from 'react-icons/bs';
import { AiOutlinePoweroff } from 'react-icons/ai';
const index = () => {
  return (
    <section>
      <div className="w-full">
        <div className="w-[70%] bg-blue-50 flex flex-col items-center rounded-xl gap-y-12 py-3">
          <div className="text-xl text-blue-600 hover:scale-105 ">
            <BiHomeAlt />
          </div>
          <div className="text-xl text-blue-600 hover:scale-105 ">
            <ImEarth />
          </div>
          <div className="text-xl text-blue-600 hover:scale-105">
            <BsCloudy />
          </div>
          <div className="text-xl text-blue-600 hover:scale-105">
            <BsCameraVideo />
          </div>
          <div className="text-xl text-blue-600 hover:scale-105">
            <BsPlayBtn />
          </div>
          <div className="text-xl text-blue-600 hover:scale-105">
            <CgProfile />
          </div>
          <div className="text-xl text-blue-600 hover:scale-105">
            <CiWallet />
          </div>
          <div className="text-xl text-blue-600 hover:scale-105">
            <AiOutlineCalculator />
          </div>
          <div className="text-xl text-blue-600 hover:scale-105">
            <BsHeadphones />
          </div>
          <div className="text-xl text-blue-600 hover:scale-105 mt-10">
            <AiOutlinePoweroff />
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
