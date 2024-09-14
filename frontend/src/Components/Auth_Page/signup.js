import React from 'react'
import Google_logo from './assest/img/googlelogo.png'
import facebook_logo from './assest/img/facebooklogo.png'
import linkdin_logo from './assest/img/linkdinlogo.png'
import { Link}  from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from './axiosconfig';

const Signup = () => {  // Changed 'signup' to 'Signup'
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: ''
  });

  
  const handleSubmit = async (e) => {
   e.preventDefault();
   try {
    const response = await axios.post('/signup', {name:credentials.name,email:credentials.email,password:credentials.password});
    console.log(credentials.name,credentials.email,credentials.password)
    localStorage.setItem('token',response.data.token)
    navigate('/login')
    } catch (error) {
      console.log(error);

  }
  }
  const Change = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value});
  }

  return (
    <>
      <div className='flex justify-center items-center min-h-screen bg-violet-300 '>
        <div className='flex justify-center'>
          <form onSubmit={handleSubmit} className='border rounded-lg p-5 bg-white border-violet-600'>
            <div>
              <h1 className='text-3xl text-center mb-3'>Sign Up</h1>
            </div>
            <div className='text-center p-2'>
              <input 
                type='text'
                name='name'
                value={credentials.name}
                onChange={Change}
                id='name'
                placeholder='Your Name'
                className='border rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-violet-500'
              />
            </div>
            <div className='text-center p-2'>
              <input 
                type="text"
                name='email'
                value={credentials.email}
                onChange={Change}
                id='email'
                placeholder='Enter your Email'
                className='border rounded-md w-full p-2  focus:outline-none focus:ring-2 focus:ring-violet-500'
              />
            </div>
            <div className='text-center p-2'>
              <input 
                type="password"
                name='password'
                value={credentials.password}
                onChange={Change}
                placeholder='Password'
                id="password"
                className='border rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-violet-500' 
              />
            </div>
            <div className='border rounded-full text-center bg-blue-400 h-auto hover:bg-blue-500'>
              <button type='submit' className='text-white p-2 font-semibold mt-auto '>
                Submit
              </button>
            </div>
            <div className='flex justify-center items-center py-3 space-x-4'>
              <button className='w-10 h-10 transition-transform transform hover:scale-110'>
                <img src={Google_logo} alt="google_logo" className='w-8' />
              </button>
              <button className='w-10 h-10 transition-transform transform hover:scale-110'>
                <img src={facebook_logo} alt="facebook_logo" className='w-8' />
              </button>
              <button className='w-10 h-10 transition-transform transform hover:scale-110'>
                <img src={linkdin_logo} alt="linkedin_logo" className='w-8' />
              </button>
            </div>
            <p className="font-serif">
              Already Have an Account? 
              <Link to='/login' className='text-blue-600 font-mono ml-2'>Sign In</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup;
