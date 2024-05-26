const Guide = () => {
  return (
    <div className="flex justify-center pb-10">
      <div className="relative w-[88%] h-[450px] flex items-center text-center">
        <img
          src="/assets/forest.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover rounded-[10px] filter brightness-50"
        />
        <div className="relative z-10 p-4 text-white flex justify-center flex-col pl-9 items-center md:items-start">
          <h1 className="text-[47px] font-[700]">Your go-to-guide for fall</h1>
          <p className="mt-2 text-[24px] font-[500]">
            How to take on the season—at home and afar
          </p>
          <button className="text-black bg-white text-[22px] font-[700] text-center w-[241px] h-[74px] rounded-[90px] mt-9 mb-3">
            Read More
          </button>
        </div>
      </div>
    </div>
  )
}

export default Guide
