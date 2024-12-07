import React from 'react'


const Sectionheader = ({Heading,Subheading}:{Heading:string,Subheading:string}) => {
  return (
    <div className='py-[66px]'>

<div className='flex text-center gap-4 px-8'>
<div className="w-5 h-10 bg-[#D84444] rounded"/>
<h3 className='text-[#D84444] text-lg  font-semibold'>{Subheading}</h3>
</div>
<div className='px-8 mt-2'>
    <h1 className='text-[35px] text-[#D84444]'>{Heading}</h1>
</div>
    </div>
  )
}

export default Sectionheader