import React from 'react'


const Heading = () => {
  return (
    <div>
        <div className=' font-bold text-white bg-black/80 border border-[#6900ff]/40 p-3  shadow-xl mt-2 mr-2 ml-2 pr-10'>
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