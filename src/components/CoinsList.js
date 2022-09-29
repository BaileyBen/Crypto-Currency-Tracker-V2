import React from 'react'
import { Link } from 'react-router-dom';
import { Sparklines, SparklinesLine } from 'react-sparklines';


const CoinsList = (props) => {
  return (
    <div>

  
      <div className='border font-semibold text-gray-300 border-[#6900ff]/20 p-3 rounded-full shadow-xl mt-2 mb-5 pl-10 pr-10
      transform transition duration-500 hover:scale-110 hover:border-[#6900ff]/90 mt-5 '>
      <div className='flex justify-between items-center'>
        <p className='text-yellow-500'>{props.coins.market_cap_rank}</p>
        <Link to={`/Info/${props.coins.id}`}>
        <div>
          <img className='w-10 h-10' src={props.coins.image} alt={props.coins.id} />
          <p className='uppercase'>[{props.coins.symbol}]</p>
          <p className='text-sm text-yellow-500 hover:text-[#6900ff]'>[ More Info ]</p>
        </div>
        </Link>
        <p>${props.coins.current_price.toLocaleString()}</p>
        <p className='hide-mobile'>${props.coins.total_volume.toLocaleString()}</p>
        <p className='hide-mobile'>{props.coins.market_cap.toLocaleString()}</p>
        <div className='w-20 h-100'>
        <Sparklines className='' data={props.coins.sparkline_in_7d.price}>
          <SparklinesLine color='teal' />
          </Sparklines>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoinsList