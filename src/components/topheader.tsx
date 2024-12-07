import { RiArrowDropDownLine } from "react-icons/ri";

import React from 'react'

const Topheader = () => {
  return (
    
        <div className='w-full mx-auto hidden md:flex flex  px-8 bg-[#000000]'>
            <div className='max-w-7xl mx-auto  flex justify-evenly'>
                <h5 className='text-[#FAFAFA] font-medium text-[14px] py-[16px]'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h5>
                <h4 className='text-[#FAFAFA] font-semibold text-[16px] underline text-center py-[14px]'>ShopNow</h4>
            </div>
            <div className="w-[78px] h-Hug-[24px] py-[16px] text-[#FAFAFA] text-[16px] font-medium flex">
                <h5>English
                    </h5>
                <RiArrowDropDownLine size={24} />
                

            </div>
        </div>
    
    
  )
}

export default Topheader