import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleLogo from './assest/img/googlelogo.png'
import LoginImage from './assest/img/login.png'
import FacebookLogo from './assest/img/facebooklogo.png'
import LinkedInLogo from './assest/img/linkdinlogo.png'
import { Link } from 'react-router-dom';
import axios from './axiosconfig'

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();   


  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 


    // Validate email before making API call
    if (!credentials.email) {
      setError('Please enter your email address.');
      return; // Prevent unnecessary API call
    }
    
   

    try {
      const response = await axios.post('/login', {email:credentials.email,password:credentials.password});
      console.log(credentials.email,credentials.password)

      // No need to call `response.json()`, `response.data` is already parsed
      localStorage.setItem('token', response.data.token);

      if (response.status === 200) {
        navigate('/home');
      }
   
    } catch (err) {
      // Log the error details to understand better
      console.error('Error:', err.response ? err.response.data : err.message);
      alert('Enter Valid Credetails')
      setError('Something went wrong. Please try again later.');
    } finally {
      // Optionally, clear any error state after submission attempt
      setError('');
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center min-h-screen p-4 bg-gradient-to-r from-violet-300 to-violet-500 transition duration-500 ease-in-out">
      <div className="flex justify-center sm:justify-start sm:ml-8 mb-8 sm:mb-0">
        <img src={LoginImage} alt="login" className="max-w-full h-auto rounded-lg shadow-lg sm:w-1/3 w-full" />
      </div>

      <div className="flex justify-center sm:justify-start sm:ml-20 w-full sm:w-1/3">
        <form onSubmit={handleSubmit} className="border border-cyan-900 pt-5 bg-white rounded-lg p-6 shadow-xl w-full">
          <div className="text-center font-bold text-2xl mb-6">
            <h1 className="text-violet-700">Login</h1>
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="border rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
              value={credentials.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="border rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
              value={credentials.password}
              onChange={handleInputChange}
              required
            />
            <Link to="/forgot_password">
              <p className="font-thin text-right">Forgot password?</p>
            </Link>
          </div>
          {error && <p className="text-red-600 text-center mb-4">{error}</p>}
          <div className="bg-blue-400 text-center border rounded-full py-2 px-4 my-4 transition duration-150 ease-in-out hover:bg-blue-500">
            <button type="submit" className="text-white font-semibold">Submit</button>
          </div>
          <div className="flex justify-center items-center py-3 space-x-4">
            <button type="button" className="w-10 h-10 transition-transform transform hover:scale-110">
              <img src={GoogleLogo} alt="google_logo" className="w-8" />
            </button>
            <button type="button" className="w-10 h-10 transition-transform transform hover:scale-110">
              <img src={FacebookLogo} alt="facebook_logo" className="w-8" />
            </button>
            <button type="button" className="w-10 h-10 transition-transform transform hover:scale-110">
              <img src={LinkedInLogo} alt="linkedin_logo" className="w-8" />
            </button>
          </div>
          <p className="font-serif">
            Don't have an account yet?
            <Link to="/signup" className="text-blue-600 font-mono ml-2">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
