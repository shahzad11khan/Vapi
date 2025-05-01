import React from 'react';
import HeroSection from './HeroSection';
import SecondHeroSection from './SecondHeroSection';
import BarChart from '../Reuseable/BarChart';
const   Dashboard: React.FC = () => {
  return (
    <div>
    <HeroSection/>  
    <SecondHeroSection    />  

     <div className='mt-6 lg:h-[221px] shadow-md text-white bg-[#1C1C1C] rounded-2xl p-4 w-5/12'>
      <h2 className="text-[12px] font-semibold">Average call Duration by Assistant</h2>
      <div className="flex justify-center items-center mt-4 ">
          <BarChart
            labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'june', 'july', 'august', 'sep', 'oct', 'nov', 'dec']}
            data={[290, 390, 230, 500, 270, 400, 600, 850, 200, 190, 475]}
            label="Monthly Calls"
            backgroundColor="#55761C"
          />
        </div>
      </div>
      </div>
  );
};

export default Dashboard;
