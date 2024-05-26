import Image from 'next/image'

const CovBox = ({ title, text, img }) => {
  return (
    <div className="mx-5 md:w-[20%] w-[80%] flex flex-col justify-center items-center text-center  mb-5">
      <Image src={img} alt={title} width={200} height={200} />
      <h2 className="mt-2 font-[600] text-[24px]">{title}</h2>
      <p className="mt-1 font-[400] text-[18px">{text}</p>
    </div>
  )
}

const Covered = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#F7F8FF] py-8">
      <h1 className="text-[24px] font-[700]">We've got you covered</h1>
      <div className="bg-[#4B4CFF] w-40 h-1 my-3"></div>
      <div className="flex justify-around items-center mt-3 flex-col md:flex-row">
        <CovBox
          title="Explore top attractions"
          text="Experience the best of your destination, with attractions, tours, activities and more"
          img="/assets/cov3.png"
        />
        <CovBox
          title="Fast and flexible "
          text="Book tickets online in minutes, with free cancellation on many attractions"
          img="/assets/cov2.png"
        />
        <CovBox
          title="Support when you need it"
          text="Booking.com's global Customer Service team is here to help 24/7"
          img="/assets/cov1.png"
        />
      </div>
    </div>
  )
}

export default Covered
