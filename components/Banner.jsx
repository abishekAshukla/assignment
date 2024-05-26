import { IoIosArrowDown } from 'react-icons/io'

const BannerOption = ({ title, sub }) => {
  return (
    <div className="flex justify-center items-center py-2 border-l-[2px] px-7 location">
      <div>
        <p>{title}</p>
        <input type="text" placeholder={sub} />
      </div>
      <div className="text-[#D9D9D9] ml-7  text-[25px]">
        <IoIosArrowDown />
      </div>
    </div>
  )
}

const Banner = () => {
  return (
    <div className="relative w-full flex justify-center items-center text-center h-screen md:h-[500px]">
      <img
        src="/assets/buildings.jpeg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 p-4 text-white flex justify-center flex-col items-center">
        <h1 className="text-[49px] font-[500]">
          Attractions, activities and experiences
        </h1>
        <p className="mt-2 text-[30px] font-[400]">
          What do you want to see and do?
        </p>

        <div className="w-[90%] md:w-[110%] bg-white text-black text-[15px] font-[400] rounded-[20px] md:rounded-[100px] text-left mt-7">
          <div className="flex justify-between py-3 flex-col md:flex-row">
            <div className="hidden md:flex py-2  px-9 w-[35%]">
              <div>
                <p>Location</p>
                <input type="text" placeholder="Type Location" />
              </div>
            </div>
            <div className="flex md:hidden justify-center">
              <BannerOption title="Location" sub={'Type Location'} />
            </div>
            <BannerOption title={'Sep 23'} sub={'Select a Date'} />
            <BannerOption title={'Categories'} sub={'Used'} />
            <BannerOption title={'Filter'} sub={'Price, Beds and More'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
