import React from 'react'
import CoinsList from '../components/CoinsList'
import Heading from './Heading'
import Navbar from './Navbar'
import Trending from './Trending'


const Coins = (props) => {
  return (

    <div>
     
    <Heading/>
        {props.coins.map(coins => {
            return (
   
                <CoinsList coins={coins} key={coins.id} />
            )
        })}
        <Trending />
    </div>
  )
}

export default Coins