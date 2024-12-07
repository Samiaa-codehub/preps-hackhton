import Image from "next/image";
import mobile from "./../../public/mobile.png";
import herologo from "./../../public/herologo.png";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="">
      <div className=" flex md:flex-row flex-col md:mx-auto  ">
        <div className="  max-w-full md:w-[217px] md:ml-[135px] ml-[45px] text-center py-8 gap-[16px] md:border-r-[0.5px] md:border-gray-200   md:flex flex-col">
          <span className="flex mt-2">
            <p className="font-semibold text-[16px] text-left hover:text-red-400 hover:underline">
              Woman’s Fashion
            </p>
          </span>
          <span className="flex mt-2">
            <p className="font-semibold text-[16px] text-left hover:text-red-400 hover:under">
              Men’s Fashion
            </p>
          </span>

          <p className=" font-semibold text-[16px] text-left mt-2 hover:text-red-400 hover:underline">
            Electronics
          </p>
          <p className=" font-semibold text-[16px] text-left mt-2 hover:text-red-400 hover:underline">
            Home & Lifestyle
          </p>
          <p className=" font-semibold text-[16px] text-left mt-2 hover:text-red-400 hover:underline">
            Medicine
          </p>
          <p className=" font-semibold text-left text-[16px] mt-2 hover:text-red-400 hover:underline">
            Sports & Outdoor
          </p>
          <p className=" font-semibold text-left text-[16px] mt-2 hover:text-red-400 hover:underline">
            Medicine
          </p>
          <p className=" font-semibold text-left text-[16px] mt-2 hover:text-red-400 hover:underline">
            Groceries & Pets
          </p>
          <p className=" font-semibold text-[16px] text-left mt-2 hover:text-red-400 hover:underline">
            Health & Beauty
          </p>
        </div>
        <div className="mx-auto md:py-8 ">
          <div className="max-w-full md:w-[892px]  bg-[#000000] flex flex-col justify-between  md:flex-row md:justify-between gap-8 md:py-8  md:ml-8">
            <div className="w-[110px]  py-8 gap-[12px]">
              <div className="w-[190px]   flex  ml-8">
                <Image
                  src={herologo}
                  alt="herologo"
                  width={40}
                  height={49}
                  objectFit="cover"
                />
                <p className="text-[16px] font-semimedium text-[white]  py-2 md:w-[126px]  md:ml-2">
                  iPhone 14 Series
                </p>
              </div>
              <h2 className="text-[#FAFAFA] w-[294px] text-[48px] font-[600] py-2 ml-8">
                Up to 10% off Voucher
              </h2>
              <div className="flex gap-2   text-center mx-auto">
              <button className="text-[#FAFAFA] md:py-4  mx-auto border-b-2 border-[white] text-center hover:text-red-400 flex ">
                Shop Now
              
{/* <FaArrowRight className="text-[white] md:mt-6  mb-8 w-[24px]"/> */}
              
</button>
<FaArrowRight className="text-[white]  md:mt-6  px-2 w-[24px]"/>

</div>
              
            </div>
            <div className="">
              <Image
                src={mobile}
                alt="hero"
                width={496}
                height={352}
                className="w-[496px] md:ml-8"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
