import React from "react";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


const Header = () => {
  return (
    <div className="w-full  p-4 flex justify-between border-b-2 border-gray-300">
      <div className="max-w-7xl   flex justify-between md:mx-[66px]">
        <h1 className="text-[black] text-[24px] font-bold ">Exclusive</h1>
        <ul className="  hidden md:flex justify-between gap-5 py-2 md:mx-[66px]">
          <li className="underline text-[16px] font-medium text-center hover:text-red-400">
            Home
          </li>
          <li className="text-[16px] font-medium text-center hover:underline hover:text-red-400">Contact</li>
          <li className="text-[16px] font-medium text-center hover:underline hover:text hover:text-red-400">About</li>
          <li className="text-[16px] font-medium text-center hover:underline hover:text-red-400">Sign Up</li>
        </ul>
      </div>
      <div className="w-[347px] h-Hug-[38px]  hidden md:flex space-x-4 ">
        <button className="w-[230px] h-[38px] pt-[7px] pb-[7px] pl-[20px] pr-[12px] gap-[12px] bg-[#F5F5F5] rounded-[4px] flex">
        <input placeholder="What are you looking for?" type="text" className="text-[black] text-[12px] w-[153px] h-[18px] font-normal opacity-[50%]"></input><IoIosSearch/>

        </button>
        <CiHeart className="w-[28px] h-[28px]" />
        <MdOutlineShoppingCart  className="w-[28px] h-[28px]"/>
        <FaRegUserCircle  className="w-[28px] h-[28px] "/>

      </div>
    
    <Sheet>
    <SheetTrigger>
      <button className="text-[26px] rounded-md md:hiiden lg:hidden">
    <IoMdMenu />
</button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Exclusive</SheetTitle>
        <SheetDescription>
        </SheetDescription>
        <ul className=" flex  flex-col justify-between gap-5 py-2 md:mx-[66px]">
        <li className="text-[12px] font-medium text-center hover:underline hover:text-red-400">
          Home
        </li>
        <li className="text-[12px] font-medium text-center hover:underline hover:text-red-400">Contact</li>
        <li className="text-[12px] font-medium text-center hover:underline hover:text">About</li>
        <li className="text-[12px] font-medium text-center hover:underline hover:text-red-400">Sign up</li>
</ul>
<div className="w-[200px]  flex flex-col space-x-4 ">
<button className=" px-6 py-2  bg-[#F5F5F5] rounded-[4px] flex mt-2">
        <input placeholder="What are you looking for?" type="text" className="text-[black] text-[12px] w-[153px] h-[18px] font-normal opacity-[50%]"></input><IoIosSearch/>

</button>
<div className="flex justify-start items-center mt-2 space-x-4">
<CiHeart className="w-[20px] h-[20px] " />
<MdOutlineShoppingCart  className="w-[20px] h-[20px]"/>
</div>
</div>


      </SheetHeader>       

    </SheetContent>
  </Sheet>
  </div>
  );
};

export default Header;
