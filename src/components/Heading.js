import React from 'react'


const Heading = () => {
  return (
    <div>
        <div className='border font-bold text-white border-[#6900ff]/30 p-3 rounded-full shadow-xl mt-2 pl-0 pr-10'>
        <div className='flex justify-between'>
        <h1></h1>
        <h1>Coin</h1>
        <h1 classname=''>Price</h1>
        <h1 className='hide-mobile'>Volume</h1>
        <h1 className='hide-mobile'>Market Cap</h1>
        <h1>7 Day</h1>
        </div>
        </div>
    </div>
  )
}

export default Heading