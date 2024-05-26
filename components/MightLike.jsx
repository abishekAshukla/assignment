import Image from 'next/image'
import { FaRegHeart, FaStar } from 'react-icons/fa'
import { CiStar } from 'react-icons/ci'
import { IoIosArrowForward } from 'react-icons/io'

const LikeBox = ({ title, img, text }) => {
  return (
    <div className="mx-5 md:w-[20%] w-[80%] flex flex-col justify-center md:items-start items-center text-center md:text-start mb-5">
      <div className="relative inline-block">
        <Image
          src={img}
          alt={title}
          width={393}
          height={302}
          className="block w-full h-auto"
        />
        <FaRegHeart className="absolute top-2 right-2 text-white text-2xl" />
      </div>
      <h2 className="mt-2 font-[600] text-[24px]">{title}</h2>
      <p className="mt-1 font-[400] text-[18px">{text}</p>
      <div className="flex mt-2 justify-center items-center">
        <FaStar className="text-[#FFB800]" />
        <FaStar className="text-[#FFB800]" />
        <FaStar className="text-[#FFB800]" />
        <CiStar className="text-[#FFB800]" />
        <CiStar className="text-[#FFB800]" />
        <p className="ml-2">2,182 Reviews</p>
      </div>
    </div>
  )
}

const MightLike = () => {
  return (
    <div className="py-8">
      <div className="flex justify-between items-center px-20">
        <h1 className="text-[24px] font-[700]">You might like these</h1>
        <div className="bg-[#E5E5E5] rounded-full flex justify-center items-center w-5 h-5">
          <IoIosArrowForward />
        </div>
      </div>
      <div className="flex justify-center items-center flex-col md:flex-row mt-8">
        <LikeBox
          img="/assets/like1.png"
          title="Burj Khalifa"
          text="1 Mohammed Bin Rashid Boulevard, Dubai, Emirate of Dubai, United"
        />
        <LikeBox
          img="/assets/like2.png"
          title="The Dubai Fountain"
          text="1 Mohammed Bin Rashid Boulevard, Dubai, Emirate of Dubai, United"
        />
        <LikeBox
          img="/assets/like3.png"
          title="Dubai Frame"
          text="1 Mohammed Bin Rashid Boulevard, Dubai, Emirate of Dubai, United"
        />
        <LikeBox
          img="/assets/like4.png"
          title="Ski Dubai"
          text="1 Mohammed Bin Rashid Boulevard, Dubai, Emirate of Dubai, United"
        />
      </div>
    </div>
  )
}

export default MightLike
