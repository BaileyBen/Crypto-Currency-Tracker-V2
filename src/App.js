import {React, useState, useEffect} from 'react'
import axios from 'axios'
import Coins from './components/Coins'
import Navbar from './components/Navbar'
import Heading from './components/Heading'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Info from './components/Info'
import Footer from './components/Footer'






function App() {

const [coins, setCoins] = useState([])
const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=10&page=1&sparkline=true'

useEffect(() => {
    axios.get(url).then((response) => {
        setCoins(response.data)
        console.log(response.data[0])
    }).catch((error) => {
        console.log(error)
    })
}, [url])


return (
<div>
<Navbar /> 
    <Router basename="/Crypto-Currency-Tracker-V2">
    <Routes >
    <Route path='/' element={<Coins coins={coins} />}/>
    <Route path="info/:coinId" element={<Info />}>
    <Route path=":coinId"/>
    </Route>
        </Routes>
</Router>
<Footer />
</div>
)
  
}

export default App;
