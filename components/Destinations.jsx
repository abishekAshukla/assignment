import Image from 'next/image'

const DesBox = ({ img, title, text }) => {
  return (
    <div className="relative inline-block mt-5 mx-5 w-[70%] md:w-[20%]">
      <Image
        src={img}
        alt={title}
        width={350}
        height={200}
        className="block w-full h-auto filter brightness-75"
      />
      <div className="absolute bottom-0 left-0 text-white p-2 text-start">
        <h3 className="font-[600] text-[21px]">{title}</h3>
        <p className="font-[400] text-[18px]">31 things to do</p>
      </div>
    </div>
  )
}

const Destinations = () => {
  return (
    <div className="text-center pb-8">
      <h1 className="font-[700] text-[24px]">Explore more destinations</h1>
      <p className="font-[400] text-[18px] my-3">
        Find things to do in cities around the world
      </p>
      <div className="flex flex-wrap justify-center items-center">
        <DesBox img="/assets/des1.png" title="Dubai" text="31 things to do" />
        <DesBox
          img="/assets/des2.png"
          title="Abudhabi"
          text="31 things to do"
        />
        <DesBox img="/assets/des3.png" title="Sharjah" text="31 things to do" />
        <DesBox
          img="/assets/des4.png"
          title="Ras AI khaimath"
          text="31 things to do"
        />
        <DesBox
          img="/assets/des5.png"
          title="Paris"
          text="Explore 1,000+ experiences"
        />
        <DesBox
          img="/assets/des6.png"
          title="Paris"
          text="Explore 1,000+ experiences"
        />
        <DesBox
          img="/assets/des7.png"
          title="Paris"
          text="Explore 1,000+ experiences"
        />
        <DesBox
          img="/assets/des8.png"
          title="Paris"
          text="Explore 1,000+ experiences"
        />
        <DesBox
          img="/assets/des9.png"
          title="Paris"
          text="Explore 1,000+ experiences"
        />
        <DesBox
          img="/assets/des10.png"
          title="Paris"
          text="Explore 1,000+ experiences"
        />
        <DesBox
          img="/assets/des11.png"
          title="Paris"
          text="Explore 1,000+ experiences"
        />
        <DesBox
          img="/assets/des12.png"
          title="Paris"
          text="Explore 1,000+ experiences"
        />
        <DesBox
          img="/assets/des13.png"
          title="Paris"
          text="Explore 1,000+ experiences"
        />
        <DesBox
          img="/assets/des14.png"
          title="Paris"
          text="Explore 1,000+ experiences"
        />
        <DesBox
          img="/assets/des15.png"
          title="Paris"
          text="Explore 1,000+ experiences"
        />
        <DesBox
          img="/assets/des16.png"
          title="Paris"
          text="Explore 1,000+ experiences"
        />
      </div>
    </div>
  )
}

export default Destinations
