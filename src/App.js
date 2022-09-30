import {React, useState, useEffect} from 'react'
import axios from 'axios'
import Coins from './components/Coins'
import Navbar from './components/Navbar'
import Heading from './components/Heading'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Info from './components/Info'
import Footer from './components/Footer'
import Signin from './routes/Signin'
import Signup from './routes/Signup'
import { AuthContextProvider } from './context/AuthContext'
import Account from './routes/Account'
import Trending from './components/Trending'






function App() {

const [coins, setCoins] = useState([])
const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true'

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
    <AuthContextProvider>
    <Router basename="/Crypto-Currency-Tracker-V2">
    <Navbar />
    <Routes >
    <Route path="/signin" element={<Signin />}/>
    <Route path="/signup" element={<Signup />}/>
    <Route path="/account" element={<Account />}/>
    <Route path='/' element={<Coins coins={coins} />}/>
    <Route path="info/:coinId" element={<Info />}>
    <Route path=":coinId"/>
    </Route>
        </Routes>
        <Footer />
    </Router>
    </AuthContextProvider>

</div>
)
  
}

export default App;
