import Image from 'next/image'
import Dropdown from '../utility/Dropdown'

const Navbar = () => {
  return (
    <div className="bg-white h-[100px] flex  items-center justify-around px-3 ">
      <Image
        src="/assets/Group 1000005861logo.png"
        alt="Example image"
        width={190}
        height={130}
        className="hidden md:flex"
      />

      {/* search bar */}
      <div className="flex border border-black bg-white justify-between h-[40px] rounded-[100px] w-full md:w-[50%]">
        <Dropdown />
        <input
          className="h-full border-none outline-none w-[700px]"
          type="text"
        />
        <div className="flex justify-between items-center rounded-tr-[50%] rounded-br-[50%]">
          <div>
            <Image
              src="/assets/Groupmic.png"
              alt="Example image"
              width={20}
              height={20}
            />
          </div>
          <div className="mx-4">
            <Image
              src="/assets/Group 1000005862camera.png"
              alt="Example image"
              width={20}
              height={20}
            />
          </div>
          <div className="rounded-tr-[50%] rounded-br-[50%]">
            <Image
              src="/assets/Mask grouprobot.png"
              alt="Example image"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>

      {/* options */}
      <div className=" bg-white w-[25%] justify-around items-center hidden md:flex">
        <div>
          <Image
            src="/assets/Group 1000005860language.png"
            alt="Example image"
            width={30}
            height={30}
          />
        </div>
        <div className="bg-black text-white text-xs rounded-[100px] flex justify-center items-center px-3 py-1">
          AI Tools
        </div>
        <div className="bg-[#0047EB] text-white text-xs rounded-[100px] flex justify-center items-center px-3 py-2">
          <div className="bg-[#F800C0] rounded-[100px] px-3 py-1 mr-2">
            Login
          </div>
          <div>Signup</div>
        </div>
        <div className="bg-black flex flex-col justify-center items-center rounded-[20px] h-10 w-14">
          <div className="w-5 h-[3px] bg-white"></div>
          <div className="w-5 h-[3px] bg-white my-[5px]"></div>
          <div className="w-5 h-[3px] bg-white"></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
