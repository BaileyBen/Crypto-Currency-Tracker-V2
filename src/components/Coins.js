import React from 'react'
import CoinsList from '../components/CoinsList'
import Heading from './Heading'
import Navbar from './Navbar'


const Coins = (props) => {
  return (

    <div>
     
    <Heading/>
        {props.coins.map(coins => {
            return (
   
                <CoinsList coins={coins} key={coins.id} />
            )
        })}
    </div>
  )
}

export default Coins