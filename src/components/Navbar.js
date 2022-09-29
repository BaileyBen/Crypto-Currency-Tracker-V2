import React from 'react'
import {FaCoins} from 'react-icons/fa'
import {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link} from 'react-router-dom'

const Navbar = () => {

    const [nav, setNav] = useState(false)

    const ToggleNav = () => {
      setNav(!nav)
    }
 
  return (
    
    <div className='flex justify-center text-2xl pt-3 bg-black/80 shadow-md pb-3   '>
      
        <div className='icon text-yellow-500'>
        <FaCoins/>
        </div> 
        <div className='heading'>
          <Link to="/">
          <p className='font-semibold text-gray-300'><span className='text-[#6900ff]'>
            C</span>rypto<span className='text-[#6900ff]'>
            G</span>ainz</p>
            </Link>
           </div>
           
    
           <div className='flex ml-10 hide-mobile max-w-[80] mt-1 text-base'>
            <Link to="/signin">
           <button className='w-full font-semibold rounded-xl shadow-xl text-yellow-500 hover:text-[#6900ff]'>Login</button>
           </Link>
           </div>
           <div className='flex ml-10 hide-mobile max-w-[80] mt-1 text-base'>
           <Link to="/signup">
           <button className='w-full font-semibold rounded-xl shadow-xl text-yellow-500 hover:text-[#6900ff]'>Register</button>
           </Link>
           </div>
           <div className='flex ml-10 hide-mobile max-w-[80] mt-1 text-base'>
           <Link to="/account">
           <button className='w-full font-semibold rounded-xl shadow-xl text-yellow-500 hover:text-[#6900ff]'>Account</button>
           </Link>
           </div>

          <div className='flex ml-10 md:hidden'>
            
            <h1 className='text-sm'></h1>
           <div onClick={ToggleNav}className='cursor-pointer z-10 mt-2'>
  {nav ? <AiOutlineClose className=' text-yellow-500 hover:text-[#6900ff]' size={25}/> : <AiOutlineMenu className=' text-yellow-500 hover:text-[#6900ff]' size={25}/>}
</div>
{/* Mobile Menu */}
<div className={nav 
? 'fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] ease-in duration-300 z-10'
: 'fixed left-[100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-300'
}>
  <div className='flex flex-col w-full p-4'>
      <Link to="/signin">
      <button className='w-full my-2 p-3 font-bold rounded-2xl shadow-xl bg-[#29065a] text-yellow-500 hover:text-[#6900ff] hover:bg-yellow-500'>Login</button>
      </Link>
      <Link to="/signup">
      <button className='w-full my-2 p-3 font-bold rounded-2xl shadow-xl bg-[#29065a] text-yellow-500 hover:text-[#6900ff] hover:bg-yellow-500'>Register</button>
      </Link>
  </div>
</div>
</div>

    </div>
   
   
   
  )
}

export default Navbar