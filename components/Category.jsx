import Image from 'next/image'
import Heading from './utility/Heading'
import Paragraph from './utility/Paragraph'

const CatBox = ({ title, img, text }) => {
  return (
    <div className="mx-5 md:w-[20%] w-[80%] flex flex-col justify-center md:items-start items-center text-center md:text-start mb-5">
      <Image src={img} alt={title} width={300} height={200} />
      <h2 className="mt-2 font-[600] text-[24px]">{title}</h2>
      <p className="mt-1 font-[400] text-[18px">{text}</p>
    </div>
  )
}

const Category = () => {
  return (
    <div className="flex flex-col justify-center items-center py-8">
      <Heading text="Top Things to Do by category" />
      <div className="bg-[#4B4CFF] w-28 h-1 my-3"></div>
      <p className="text-center mb-8 font-[400] text-[18px]">
        Travelers' Choice Best of the Best winners
      </p>
      <div className="flex justify-center items-center flex-col md:flex-row">
        <CatBox
          img="/assets/Rectangle 4315cat1.png"
          title="Top Overall"
          text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat."
        />
        <CatBox
          img="/assets/Rectangle 4316cat2.png"
          title="Bucket List"
          text="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt"
        />
        <CatBox
          img="/assets/Rectangle 4317cat3.png"
          title="Food & Culinary"
          text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat."
        />
        <CatBox
          img="/assets/Rectangle 4318cat4.png"
          title="Nature & Outdoor"
          text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat."
        />
      </div>
    </div>
  )
}

export default Category
