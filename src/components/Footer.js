import React from 'react';
import { Link } from 'react-router-dom'
import { AiOutlineInstagram } from 'react-icons/ai';
import {
  FaFacebookF,
  FaGit,
  FaGithub,
  FaTiktok,
  FaTwitter,
} from 'react-icons/fa';


const Footer = () => {
  return (
    <div className='footer-div pt-5  '>
      <div className='grid md:grid-cols-2 '>
        <div className='flex justify-evenly w-full md:max-w-[300px] uppercase'>
          <div>
            <h2 className='font-bold font-Kanit text-yellow-500 '>Support</h2>
            <ul>
              <li className='text-sm py-2 font-Marc'>Help Center</li>
              <li className='text-sm py-2 font-Marc'>Contact Us</li>
              <li className='text-sm py-2 font-Marc'>API Status</li>
              <li className='text-sm py-2 font-Marc'>Documentation</li>
            </ul>
          </div>
          <div>
            <h2 className='font-bold text-yellow-500 font-Kanit '>Info</h2>
            <ul>
              <li className='text-sm py-2 font-Marc'>About Us</li>
              <li className='text-sm py-2 font-Marc'>Careers</li>
              <li className='text-sm py-2 font-Marc'>Invest</li>
              <li className='text-sm py-2 font-Marc'>Legal</li>
            </ul>
          </div>
        </div>
        <div className='text-right'>
          <div className='w-full flex justify-end'>
            <div className='w-full md:w-[300px] py-4 relative'>
              <div className='flex justify-center md:justify-end py-4 md:py-0 md:pb-4 mt-[-1rem]'>
              </div>
              <p className='text-center font-Kanit md:text-right '>Sign up for crypto news</p>
              <div className='py-4'>
                
              </div>
              <div className='flex py-4 justify-between text-accent'>
                <AiOutlineInstagram />
                <FaTiktok />
                <FaTwitter />
                <FaFacebookF />
                <FaGithub />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className='text-center py-4 font-Kanit text-yellow-500'>Powered by Coin Gecko</p>
    </div>
  );
};

export default Footer;