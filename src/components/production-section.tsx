interface ProductDetail{
    name:string,
    image:string,
    price:number,
    rating:{
        rate:number,
        count:number,
    }
}
interface ProductSection{
    Heading:string,
    Subheading:string,
     ProductDetail:ProductDetail[],
     isCarousel:boolean,
     button?:string

}
import React from 'react'
import Sectionheader from './sectionheader'
import Header from './header'

const ProductSection = ( {Heading,Subheading}: ProductSection) => {
  return (
    <div className='flex flex-col justify-center'>
      <div>
        <div className='header'>
          <Sectionheader Heading={Heading} Subheading={Subheading}/>
          
        </div>
      </div>
    
    </div>
  )
}

export default ProductSection