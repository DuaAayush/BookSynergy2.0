import React, { useState } from 'react';
import { FaFacebookF, FaXing, FaRegEye, FaRegEyeSlash, FaGoogle } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
export default function Login({ name, pass }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState(name || '');
  const [password, setPassword] = useState(pass || '');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

  const handleLogin = () => {
    if (!username || !password) {
      toast.error("Please enter both username and password.");
      return;
    }
    // Handle login logic here
    console.log('Logging in with', username, password);
    navigate("/")

  };

  return (
    <div className='h-screen w-full bg-[#171616] text-white'>
      <div className='flex justify-center items-center h-full'>
        <div className='w-2/3 bg-[#262626] p-8 rounded'>
          <h1 className='text-4xl mb-6'>Login</h1>
          <div className='mb-4'>
            <label className='block text-white text-2xl'>Username*</label>
            <input type='text' className='w-full p-3 rounded bg-[#171616] text-white border-none' placeholder='Username' onChange={(e) => setUsername(e.target.value)} value={username} required />
          </div>
          <div className='mb-4'>
            <label className='block text-white text-2xl'>Password*</label>
            <input type={passwordVisible ? 'text' : 'password'} className='w-full p-3 rounded bg-[#171616] text-white border-none' placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password} required />
            <span onClick={togglePasswordVisibility} className='absolute cursor-pointer right-4 top-4'>
              {passwordVisible ? <FaRegEyeSlash size={20} /> : <FaRegEye size={20} />}
            </span>
          </div>
          <Link to='/signup'><div className='border-2 w-fit p-[10px] mb-[25px] ' >Signup</div></Link> 
          <button className='w-full p-3 bg-[#001524] rounded text-xl' onClick={handleLogin}>Login</button>
          <div className='text-center mt-4'>
            <span className='mr-4 '>Or Sign In with</span>
            <div className='flex items-center justify-center mt-[20px]'>
              <a href="#" className='text-blue-600 mx-2'><FaFacebookF size={24} /></a>
              <a href="#" className='text-blue-600 mx-2'><FaGoogle size={24} /></a>
            </div>
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}
