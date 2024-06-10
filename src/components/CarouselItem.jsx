import React from 'react'

function CarouselItem() {
  return (
    <div className='flex  max-sm:flex-col max-sm:flex-wrap w-8/12 gap-2 mt-3 max-sm:w-screen'>
        <img className=' w-[66%] border-2 grey max-sm:w-[100%]' src="https://estore.nu/img/campaign/en/original/banner1.webp" alt="" />
        <img className=' w-[33%] border-2 grey max-sm:w-[100%]' src="https://estore.nu/img/campaign/en/original/banner1.webp" alt="" />
    </div>
  )
}

export default CarouselItem