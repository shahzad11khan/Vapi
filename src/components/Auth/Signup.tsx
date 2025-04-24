import React, { ChangeEvent, FormEvent, useState } from 'react';
import { toast } from 'react-toastify';
import { BaseUrl } from "../../utils/BaseUrl";
import { Signup_Middle_Point } from "../../utils/MiddlePoint";
import { Signup_End_Point } from "../../utils/EndPoint";
import { makeApiRequest } from "../../utils/axios";
import { useNavigate } from 'react-router-dom';

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
  companyName: string;
}

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    companyName: ""
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))

  }
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const URL = BaseUrl + Signup_Middle_Point + Signup_End_Point;
    const method = "POST";

    try {
      const response = await makeApiRequest({
      url: URL,
      method,
      data: formData
    })

    console.log(response);
    
    if (response.warning) {
      toast.warn(response.warning);
    } else if (response.message) {
      toast.success(response.message); 
      navigate('/dashboard');
    } else if (response.error) {
      toast.error(response.error);    
    }} catch (error: any) {
       console.log("error", error)
    }


  }

  return (
    <div className="flex w-full h-screen  lg:h-screen ">
      <div className="w-full md:w-full  flex flex-col justify-center items-center p-8 ">
        <div className='flex gap-3'>
          <img src="/logo.png" alt="Voicecon Logo" className="w-16 h-16 mb-4" />

          <h1 className="text-3xl font-bold mb-2">Voicecon</h1>
        </div>
        <p className="text-gray-600 mb-6 text-[16px]">Signup into your account</p>

        <form onSubmit={handleSubmit} className=' flex justify-center items-center'>
          <div className="flex flex-wrap justify-start items-center p-4 gap-2 w-8/12 ">
            <div className="flex flex-col w-[48%]">
              <label htmlFor="firstName">First Name :</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full pl-3 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#55761C]"
              />
            </div>

            <div className="flex flex-col w-[48%]">
              <label htmlFor="lastName">Last Name :</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full pl-3 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#55761C]"
              />
            </div>

            <div className="flex flex-col w-[48%]">
              <label htmlFor="email">Email Id :</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="info@xyz.com"
                className="w-full pl-3 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#55761C]"
              />
            </div>

            <div className="flex flex-col w-[48%]">
              <label htmlFor="phone">phone No :</label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={formData.phone}

                placeholder="+(92) 0000000"
                onChange={handleChange}
                className="w-full pl-3 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#55761C]"
              />
            </div>

            <div className="flex flex-col w-[48%]">
              <label htmlFor="password">Password :</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="XXXXXXXXXXXX"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-3 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#55761C]"
              />
            </div>

            <div className="flex flex-col w-[48%]">
              <label htmlFor="confirmPassword">Confirm Password :</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Re-enter password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full pl-3 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#55761C]"
              />
            </div>

            <div className="flex flex-col w-[48%]">
              <label htmlFor="companyName">Company Name :</label>
              <input
                type="text"
                name="companyName"
                id="companyName"
                placeholder="XYZ Corp"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full pl-3 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#55761C]"
              />
            </div>

            <div className=" w-8/12">
              <button type="submit" className="w-full max-w-sm bg-[#55761C] text-white py-2 rounded-lg hover:bg-[#446013] transition mt-4">
                Signup
              </button>
            </div>
          </div>
        </form>








      </div>
      <div className="hidden md:flex w-5/12 bg-cover bg-center" style={{ backgroundImage: 'url(/signup.png)' }} />
    </div>
  );
};

export default Signup;
