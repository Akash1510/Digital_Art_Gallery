import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from './axiosconfig';

const Forgot_Password = () => {
  const [credentials, setcredentials] = useState({ email: "" });
  const [error, seterror] = useState("");
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();

    if (!credentials.email) {
      seterror("Please enter your email");
      return; // Prevent further execution
    }

    try {
      const res = await axios.post('/forgot_password', { email: credentials.email });
      console.log(res.data);
      if (res.status === 200) {
        navigate('/reset_password');
      } else {
        seterror("Invalid Email");
      }
    } catch (error) {
      console.log(error);
      seterror("An error occurred. Please try again.");
    }
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-violet-300'>
      <div className='flex justify-center'>
        <form onSubmit={handlesubmit} className='border rounded-lg p-5 bg-white border-violet-600'>
          <div>
            <h1 className='text-3xl text-center mb-3'>Forgot Password</h1>
          </div>
          <div className='text-center p-2'>
            <input
              type='email'
              name='email'
              placeholder='Enter Your Email'
              id='password'
              className='border rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-violet-500'
              value={credentials.email}
              onChange={(e) => setcredentials({ email: e.target.value })}
              required
            />
            {error && <p className="text-red-600 text-center mb-4">{error}</p>}
          </div>
          <div className='text-center'>
            <button type='submit' className='w-full py-2 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition'>
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Forgot_Password;
