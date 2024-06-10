import React from 'react'

function Card() {
  return (
    <div className='flex flex-wrap w-[25%]  max-sm:w-screen max-sm:px-0 px-3 border'>
        <div className='w-[50%] flex flex-wrap justify-center items-center'>
            <img className='w-40' src="https://cdn.estore.nu/112813-home_default/painting-set-with-non-drip-roller.jpg" alt="" />
        </div>
        <div className='w-[50%]'>
                <h1 className='inline'>Home & Kitchen</h1>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
        </div>
    </div>
  )
}

 export default Card
