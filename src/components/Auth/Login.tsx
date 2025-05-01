import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { BaseUrl } from "../../utils/BaseUrl";
import { Signup_Middle_Point } from "../../utils/MiddlePoint";
import { Login_End_Point } from "../../utils/EndPoint";
import { makeApiRequest } from '../../utils/axios';


const Login: React.FC = () => {
  const navigation = useNavigate();
  const [formData, setFormData] = useState({
    email:'',
    password:''
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const URL = BaseUrl + Signup_Middle_Point + Login_End_Point;
    const method = "POST";
    const { email, password } = formData;

    // Basic client-side validation
    if (!email || !password) {
      toast.error('Please fill in both fields');
      return;
    }

    try {
    const response = await makeApiRequest({
          url: URL,
          method,
          data: formData
        })
         if (response?.warning) {
              toast.warn(response.warning);
            } else if (response?.message) {
              localStorage.setItem('token' , response.token)
              toast.success(response.message); 
              navigation('/dashboard');
            } else if (response?.err) {
              toast.error(response.err);    
            }

        // toast.success('Login successful!');
        // navigation('/dashboard'); 
    } catch (error) {
      toast.error('Login failed. Please try again.');
      console.error(error);
    }
  };
  return (
    <div className="flex w-full h-screen">
      {/* Left Image Section */}
      <div className="hidden md:flex w-full bg-cover bg-center" style={{ backgroundImage: 'url(/login.png)' }} />

      {/* Right Form Section */}
      <div className="w-full md:w-1/2 bg-[#1C1C1C] flex flex-col justify-center items-center p-8">
        {/* Top Image */}

        <div className='flex gap-3'>
          <img src="/logo.png" alt="Voicecon Logo" className="w-16 h-16 mb-4" />

          <h1 className="text-3xl font-bold mb-2">Voicecon</h1>
        </div>
        <p className="text-gray-600 mb-6 text-[16px]">Login into your account</p>
        <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto">
          <div className="w-full max-w-sm mb-4 relative">
            <input
              type="email"
              name="email"
    
              placeholder="info@provistechnologies.com"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#55761C] 
            "
            />
            <img src="email.png" className="absolute right-2 top-2 w-7 h-7 opacity-80" alt="email" />
          </div>

          <div className="w-full max-w-sm mb-2 relative">
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#55761C]"
            />
            <img src="/lock.png" className="absolute right-2 top-2 w-7 h-7 opacity-80" alt="password" />
          </div>


          <div className="w-full max-w-sm text-right mb-4">
            <Link to="/forgot-password" className="text-sm text-[#55761C] hover:underline">Forgot Password?</Link>
          </div>

          <button className="w-full max-w-sm bg-[#55761C] text-white py-2 rounded-lg hover:bg-[#446013] transition mb-4">
            Login
          </button>

          <div className="flex items-center w-full max-w-sm my-4">
            <div className="flex-grow h-px bg-[#55761C]" />
            <span className="px-3 text-white text-sm">OR</span>
            <div className="flex-grow h-px bg-[#55761C]" />
          </div>

          <Link to="Signup" className='w-full'>
            <button className="w-full max-w-sm border border-[#55761C] text-[#55761C] py-2 rounded-lg hover:bg-[#f5f5f5] transition">
              Signup Now
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
