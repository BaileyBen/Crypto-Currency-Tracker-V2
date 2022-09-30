import React from 'react'


const Heading = () => {
  return (
    <div>
        <div className='rounded-div font-bold text-white text-xl p-3   shadow-xl mb-5 mt-5 '>
        <h1 className='absolute'>Rank</h1>
        <div className='flex justify-between'>
        <h1></h1>
        
        <h1><span className='text-black/80 md:hidden'>0</span>Coin</h1>
        <h1 classname=''>Price/USD<span className='text-black/80 hide-mobile'>p</span></h1>
        <h1 className='hide-mobile'>Volume</h1>
        <h1 className='hide-mobile'>Market Cap</h1>
        <div className=''>
        <h1>7 Day</h1>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Heading