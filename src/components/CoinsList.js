import React from 'react'
import { Link } from 'react-router-dom';
import { Sparklines, SparklinesLine } from 'react-sparklines';


const CoinsList = (props) => {
  return (
    <div>

      
      <div className='item-div border font-semibold text-gray-300 bg-black/70 hover:bg-black/90 border-[#6900ff]/50 pr-3 p-3 pl-5 rounded-lg shadow-2xl mt-2 mr-2 ml-2  
      transform transition duration-500 hover:scale-110 hover:border-[#6900ff]  '>
      <Link to={`/Info/${props.coins.id}`}>
      <div className='flex justify-between items-center'>
        <p className='text-yellow-500'>{props.coins.market_cap_rank}</p>
        
        <div>
          <img className='w-6 mr-2 rounded-full' src={props.coins.image} alt={props.coins.id} />
          <p className='uppercase font-Marc'>{props.coins.symbol}</p>
          
        </div>
        
        <p>${props.coins.current_price.toLocaleString()}</p>
        <p className='hide-mobile'>${props.coins.total_volume.toLocaleString()}</p>
        <p className='hide-mobile'>{props.coins.market_cap.toLocaleString()}</p>
        <div className='w-20 h-100'>
        <Sparklines data={props.coins.sparkline_in_7d.price}>
          <SparklinesLine color='teal' />
          </Sparklines>
          </div>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default CoinsList