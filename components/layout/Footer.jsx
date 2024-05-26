import Image from 'next/image'

const Footer = () => {
  return (
    <div className="w-full pt-5 pb-7 flex justify-center items-center">
      <Image
        src="/assets/footer.png"
        alt={'footer'}
        width={1350}
        height={408}
      />
    </div>
  )
}

export default Footer
