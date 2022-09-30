import React, { useState } from 'react';
import { AiFillLock, AiOutlineMail } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { signUp } = UserAuth();
  
    const handleSubmit = async (e) => {
      e.preventDefault()
      setError('')
      try {
        await signUp(email,password)
        navigate('/signin')
      } catch (e) {
        setError(e.message)
        console.log(e.message)
      }
    }

  return (
    <div>
    <div className='max-w-[400px] mx-auto min-h-[600px] px-4 py-20'>
        <h1 className="text-2xl font-Kanit front-bold">Register</h1>
        {error ? <p className='bg-red-300 p-3 my-2'>{error}</p> : null}
        <form onSubmit={handleSubmit}>
            <div className="my-4">
                <label font-Marc>Email</label>
                <div className='my-2 w-full relative rounded-2xl shadow-xl'>
                    <input onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border border-input rounded-2xl text-black" type="email" />
                    <AiOutlineMail className='absolute right-2 top-3 text-black'/>
                </div>
            </div>
            <div className="my-4">
               <label font-Marc>Password</label> 
               <div className='my-2 w-full relative rounded-2xl shadow-xl'>
                <input onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-input rounded-2xl text-black" type="password" />
                <AiFillLock className='absolute right-2 top-3 text-black' />
               </div>
            </div>
            <button className="text-yellow-500 font-Kanit font-semibold w-full my-2 p-3 bg-[#3d048d] hover:text-[#6900ff] hover:bg-yellow-500 rounded-2xl shadow-xl">Sign up</button>
        </form>
        <p className='font-Kanit'>Already have an account? <Link className="text-yellow-500 hover:text-[#6900ff]" to='/signin'>Login</Link></p>
    </div>
</div>
  )
}

export default Signup