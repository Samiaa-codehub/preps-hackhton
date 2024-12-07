import Cardone from "@/components/card1";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Soundhero from "@/components/hero2";
import ProductSection from "@/components/production-section";
import Topheader from "@/components/topheader";
import Wishlist from "@/components/wishlist";
import Image from "next/image"

export default function Home() {
  return (
    <div className="h-screen">
      <Topheader/>
      <Header/>
      
      <Hero/>
      
      <ProductSection
      Subheading="Today's"
      Heading="Hellow world"
      />
      <Soundhero/>
      {/* <Cardone/> */}
      <Wishlist/>
      {/* <Footer/> */}
    </div>
  );
}
