import React, { useState } from 'react';
import { FaFacebookF, FaXing, FaRegEye, FaRegEyeSlash, FaGoogle } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import Login from './Login';
import 'react-toastify/dist/ReactToastify.css';

export default function Signup() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisible2, setPasswordVisible2] = useState(false);
  const [myfullname, setmyfullname] = useState('');
  const [myemail, setmyemail] = useState('');
  const [myusername, setmyusername] = useState('');
  const [mypassword, setmypassword] = useState('');
  const [mypassword2, setmypassword2] = useState('');
  const [showlogin, setshowlogin] = useState(false);
  const [showsignup, setshowsignup] = useState(true);

  const myfullnameinput = (event) => setmyfullname(event.target.value);
  const myemailinput = (event) => setmyemail(event.target.value);
  const myusernameinput = (event) => setmyusername(event.target.value);
  const mypasswordinput = (event) => setmypassword(event.target.value);
  const mypasswordinput2 = (event) => setmypassword2(event.target.value);
  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);
  const togglePasswordVisibility2 = () => setPasswordVisible2(!passwordVisible2);

  const mainsignuphandler = () => {
    if (!myfullname || !myemail || !myusername || !mypassword || !mypassword2) {
      toast.error("Please fill required details to become member!");
      return;
    }

    if (mypassword !== mypassword2) {
      toast.error("Passwords do not match!");
      return;
    }

    if (!myusername.includes("@") && !myusername.includes("#")) {
      toast.error("Please include @ or # in your username");
      return;
    }

    

    setshowlogin(true);
    setshowsignup(false);
  };

  return (
    <div className=' bg-[#171616] text-white'>
      {showlogin && <Login name={myusername} pass={mypassword} />}
      {showsignup && (
        <div className='flex justify-center items-center h-full'>
          <div className='w-2/3 bg-[#262626] p-8 rounded'>
            <h1 className='text-4xl mb-6 text-center'>Sign Up</h1>
            <div className='mb-4'>
              <label className='block text-white text-2xl'>Full name*</label>
              <input type='text' className='w-full p-3 rounded bg-[#171616] text-white border-none' placeholder='Full Name' onChange={myfullnameinput} value={myfullname} required />
            </div>
            <div className='mb-4'>
              <label className='block text-white text-2xl'>E-mail*</label>
              <input type='email' className='w-full p-3 rounded bg-[#171616] text-white border-none' placeholder='Email' onChange={myemailinput} value={myemail} required />
            </div>
            <div className='mb-4'>
              <label className='block text-white text-2xl'>Username*</label>
              <input type='text' className='w-full p-3 rounded bg-[#171616] text-white border-none' placeholder='Username' onChange={myusernameinput} value={myusername} required />
            </div>
            <div className='mb-4'>
              <label className='block text-white text-2xl'>Password*</label>
              <input type={passwordVisible ? 'text' : 'password'} className='w-full p-3 rounded bg-[#171616] text-white border-none' placeholder='Password' onChange={mypasswordinput} value={mypassword} required />
              <span onClick={togglePasswordVisibility} className='absolute cursor-pointer right-4 top-4'>
                {passwordVisible ? <FaRegEyeSlash size={20} /> : <FaRegEye size={20} />}
              </span>
            </div>
            <div className='mb-4'>
              <label className='block text-white text-2xl'>Confirm Password*</label>
              <input type={passwordVisible2 ? 'text' : 'password'} className='w-full p-3 rounded bg-[#171616] text-white border-none' placeholder='Confirm Password' onChange={mypasswordinput2} value={mypassword2} required />
              <span onClick={togglePasswordVisibility2} className='absolute cursor-pointer right-4 top-4'>
                {passwordVisible2 ? <FaRegEyeSlash size={20} /> : <FaRegEye size={20} />}
              </span>
            </div>
            <button className='w-full p-3 bg-[#001524] rounded text-xl' onClick={mainsignuphandler}>Signup</button>
            <div className='text-center mt-4'>
              <span className='mr-4'>Or Sign Up with</span>
              <div className='flex items-center justify-center mt-[20px]'>
                <a href="#" className='text-blue-600 mx-2'><FaFacebookF size={24} /></a>
                <a href="#" className='text-blue-600 mx-2'><FaGoogle size={24} /></a>
              </div>
            </div>
            <ToastContainer />
          </div>
        </div>
      )}
    </div>
  );
}
