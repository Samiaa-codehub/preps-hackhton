import React from 'react'
import speaker from "./../../public/speaker.png";
import Image from 'next/image';
const Soundhero = () => {
  return (
    <div className="py-[66px]">
      <div className="max-w-7xl bg-[#000000] left-[135px]  mx-auto top-[2526px] flex md:flex-row flex-col justify-between ">
        <div className="mx-auto py-[66px]" >
          <p className='text-[#00FF66] w-[90px] text-[16px] font-[600] px-4 mt-[75px]' >Categories</p>
          <h2 className='md:text-[48px] text-[35px] font-[600] text-[white] md:w-[443px] px-4 '>Enhance Your Music Experience</h2>
          <ul className='flex space-x-4 ml-4 py-4'>
            <li className='w-[62px] h-[62px] bg-[white] rounded-[50%] text-[black] text-center py-2'>
              <p className='text-[16px] font-[600] md:px-4 '>23</p>
              <p className='text-[11px] font-[400] md:px-4'>Hours</p>
            </li>
            <li className='w-[62px] h-[62px] bg-[white] rounded-[50%] text-[black] text-center py-2'>
              <p className='text-[16px] font-[600] px-4 '>05</p>
              <p className='text-[11px] font-[400] px-4'>Days</p>
            </li>
            <li className='w-[62px] h-[62px] bg-[white] rounded-[50%] text-[black] text-center py-2'>

              <p className='text-[16px] font-[600] px-4 '>59</p>
              <p className='text-[11px] font-[400] px-4'>Minutes</p>


            </li>
            <li className='w-[62px] h-[62px] bg-[white] rounded-[50%] text-[black] text-center py-2'>
              <p className='text-[16px] font-[600] px-4 '>35</p>
              <p className='text-[11px] font-[400] px-4'>Seconds</p>


            </li>
          </ul>
          <button className="bg-[#00FF66] text-[white] text-[16px] font-[500] md:w-[171px] py-2 px-8 rounded-[4px] md:mt-8 ml-4">Buy Now!</button>
        </div>
        <div>
          <Image
            src={speaker}
            alt='speaker-image'
            width={568}
            height={330}
          />
        </div>
      </div>
    </div>
  )
}

export default Soundhero