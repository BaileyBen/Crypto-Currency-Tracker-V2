import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { FaTwitter, FaFacebook, FaReddit, FaGithub } from 'react-icons/fa';
import DOMPurify from 'dompurify'

import { Link, useParams } from 'react-router-dom';

const Info = () => {
  const [coin, setCoin] = useState({});
  const params = useParams()

  const url =
    `https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`;

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoin(response.data);
      console.log(response.data);
    });
  }, [url]);

  return (
    <div className='info-div my-12 py-12'>
      <Link to={`/`}>
      <button className='text-bold text-white bg-black/70 border shadow-xl border-[#6900ff]/40 hover:border-[#6900ff]/70 px-3 py-2
      transform transition duration-500 hover:scale-110 hover:text-[#6900ff]/50 hover:border-[#6900ff] '>Return Home</button>
      </Link>
      <div className='flex py-8'>
        <img className='w-20 mr-8' src={coin.image?.large} alt='/' />
        <div>
          <p className='text-3xl font-bold font-Kanit text-yellow-500'>{coin?.name}</p>
          <p className='font-Marc'>({coin.symbol?.toUpperCase()} / USD)</p>
        </div>
      </div>

      <div className='grid md:grid-cols-2 gap-8'>
        <div>
          <div className='flex justify-between'>
            {coin.market_data?.current_price ? (
              <p className='text-3xl font-bold'>${coin.market_data.current_price.usd.toLocaleString()}</p>
            ) : null}
            <p className='font-Marc text-teal-400'>7 Day Chart</p>
          </div>
          <div>
            <Sparklines data={coin.market_data?.sparkline_7d.price}>
              <SparklinesLine color='teal' />
            </Sparklines>
          </div>
          <div className='flex justify-between py-4'>
            <div>
              <p className='text-gray-500 font-Kanit text-sm'>Market Cap</p>
              {coin.market_data?.market_cap ? (
                <p className='text-lg'>${coin.market_data.market_cap.usd.toLocaleString()}</p>
              ) : null}
            </div>
            <div>
              <p className='text-gray-500 font-Kanit text-sm'>Volume (24h)</p>
              {coin.market_data?.market_cap ? (
                <p className='text-lg'>${coin.market_data.total_volume.usd.toLocaleString()}</p>
              ) : null}
            </div>
          </div>

          <div className='flex justify-between py-4'>
            <div>
              <p className='text-gray-500 font-Kanit text-sm'>24h High</p>
              {coin.market_data?.high_24h ? (
                <p className='text-lg'>${coin.market_data.high_24h.usd.toLocaleString()}</p>
              ) : null}
            </div>
            <div>
              <p className='text-gray-500 font-Kanit text-sm'>24h Low</p>
              {coin.market_data?.low_24h ? (
                <p className='text-lg'>${coin.market_data.low_24h.usd.toLocaleString()}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div>
          <p className='text-xl font-semibold font-Kanit text-yellow-500'>Market Stats</p>
          <div className='flex justify-between py-4'>
            <div>
              <p className='text-gray-500 font-Kanit text-sm'>Market Rank</p>
              <p className='text-lg'>{coin.market_cap_rank}</p>
            </div>
            <div>
              <p className='text-gray-500 font-Kanit text-sm'>Hashing Algorithm</p>
              {coin.hashing_algorithm ? <p className='text-lg'>{coin.hashing_algorithm}</p> : null}
            </div>
            <div>
              <p className='text-gray-500 font-Kanit text-sm'>Trust Score</p>
              {coin.tickers ? <p className='text-lg'>{coin.liquidity_score.toFixed(2)}</p> : null}
            </div>
          </div>

          <div className='flex justify-between py-4'>
            <div>
              <p className='text-gray-500 font-Kanit text-sm'>Price Change (24h)</p>
              {coin.market_data ? (
                <p className='text-lg'>
                  {coin.market_data.price_change_percentage_24h.toFixed(2)}%
                </p>
              ) : null}
            </div>
            <div>
              <p className='text-gray-500 font-Kanit text-sm'>Price Change (7d)</p>
              {coin.market_data ? (
                <p className='text-lg'>{coin.market_data.price_change_percentage_7d.toFixed(2)}%</p>
              ) : null}
            </div>
            <div>
              <p className='text-gray-500 font-Kanit text-sm'>Price Change (14d)</p>
              {coin.market_data ? (
                <p className='text-lg'>
                  {coin.market_data.price_change_percentage_14d.toFixed(2)}%
                </p>
              ) : null}
            </div>
          </div>
          <div className='flex justify-between py-4'>
            <div>
              <p className='text-gray-500 font-Kanit text-sm'>Price Change (30d)</p>
              {coin.market_data ? (
                <p className='text-lg'>
                  {coin.market_data.price_change_percentage_30d.toFixed(2)}%
                </p>
              ) : null}
            </div>
            <div>
              <p className='text-gray-500 font-Kanit text-sm'>Price Change (60d)</p>
              {coin.market_data ? (
                <p className='text-lg'>
                  {coin.market_data.price_change_percentage_60d.toFixed(2)}%
                </p>
              ) : null}
            </div>
            <div>
              <p className='text-gray-500 font-Kanit text-sm'>Price Change (1y)</p>
              {coin.market_data ? (
                <p >{coin.market_data.price_change_percentage_1y.toFixed(2)}%</p>
              ) : null}
            </div>
          </div>
          <div className='flex justify-around p-8 text-accent'>
            <FaTwitter />
            <FaFacebook />
            <FaReddit />
            <FaGithub />
          </div>
        </div>
      </div>
      
           {/* Description */}
      <div className='py-4'>
        <p className='text-xl font-bold font-Kanit text-yellow-500'>About {coin.name}</p>
        <p className='font-Marc' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(coin.description ? coin.description.en : ''),}} ></p>
      </div>
    </div>
  )
              }
             
export default Info;