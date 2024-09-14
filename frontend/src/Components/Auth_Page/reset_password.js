import React, { useState } from 'react';
import axios from './axiosconfig';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {

  const [formdata,setformdata] = useState({
    email: '',
    newPassword:'',
    confirmPassword:'',
    otp:''
  })
  const navigate = useNavigate();

  const[error,seterror] = useState('');

  const onChanges = (e)=>{
    setformdata({...formdata,[e.target.name]:e.target.value});
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formdata.confirmPassword !== formdata.newPassword) {
      seterror("Passwords do not match!");
      return;
    }

    try {
      const res = await axios.post('/reset_password', {
        email: formdata.email,
        newPassword: formdata.newPassword,
        confirmPassword: formdata.confirmPassword,
        otp: formdata.otp
      });

      console.log(res.data);

      if (res.status === 200) {
        alert('Password Changed Successfully');
        navigate('/login'); // Use navigate function to redirect
      } else {
        seterror('Invalid Credentials');
      }
    } catch (error) {
      console.log(error);
      seterror('Invalid Credentials');
    }
  }

  return (
    <div className='flex justify-center items-center min-h-screen bg-violet-300'>
      <div className='flex justify-center'>
        <form onSubmit={handleSubmit} className='border rounded-lg p-5 bg-white border-violet-600'>
          <div>
            <h1 className='text-3xl text-center mb-3'>Reset Password</h1>
          </div>
          <div className='text-center p-2'>
            <input
              type='email'
              name='email'
              placeholder='Email'
              id='email'
              value={formdata.email}
              onChange={onChanges}
              className='border rounded-sm w-full p-2 focus:outline-none focus:ring-2 focus:ring-violet-500'
              required
            />
          </div>
          <div className='text-center p-2'>
            <input
              type='password'
              name='newPassword'
              placeholder='New Password'
              id='password'
              value={formdata.newPassword}
              onChange={onChanges}
              className='border rounded-sm w-full p-2 focus:outline-none focus:ring-2 focus:ring-violet-500'
              required
            />
          </div>
          <div className='text-center p-2 mb-2'>
            <input
              type='password'
              name='confirmPassword'
              placeholder='Confirm Password'
              id='cPassword'
              value={formdata.confirmPassword}
              onChange={onChanges}
              className='border rounded-sm w-full p-2 focus:outline-none focus:ring-2 focus:ring-violet-500'
              required
            />
          </div>
          <div className='text-center p-2 mb-2'>
            <input
              type='text'
              name='otp'
              placeholder='OTP'
              id='otp'
              value={formdata.otp}
              onChange={onChanges}
              className='border rounded-sm w-full p-2 focus:outline-none focus:ring-2 focus:ring-violet-500'
              required
            />
          </div>
          <div className='text-center'>
            <button type='submit' className='w-full py-2 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition'>
              Submit
            </button>
          </div>
          {error && <div className='text-red-500 text-center mt-3'>{error}</div>}

        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
