import Navbar from '@/components/layout/Navbar'
import Banner from '@/components/Banner'
import Category from '@/components/Category'
import Covered from '@/components/Covered'
import MightLike from '@/components/MightLike'
import Guide from '@/components/Guide'
import Destinations from '@/components/Destinations'
import Footer from '@/components/layout/Footer'
import Copyright from '@/components/Copyright'

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Banner />
      <Category />
      <Covered />
      <MightLike />
      <Guide />
      <Destinations />
      <Footer />
      <Copyright />
    </div>
  )
}
