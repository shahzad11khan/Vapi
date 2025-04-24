import React from 'react';
import BarChart from '../Reuseable/BarChart';

interface CardProps {
  title: string;
  rate: string | null;
  count: number | string;
  percentageChange: number;
  image: string;
  idx: number;
}

const Card: React.FC<CardProps> = ({ title, count, rate, idx, percentageChange, image }) => {
  return (
    <div className="p-3 text-white flex flex-col justify-between ">
          <h2 className="text-[12px] font-semibold items-start">{title}</h2>
          <p className="text-3xl font-bold mt-1">{count}</p>
      {/* <div className=" bg-red-300"> */}
        <div className=' flex justify-center items-center flex-col'>
          <div className="">
            <input
              type='range'
              name="range"
              min="0"
              max="100"
              className={`${idx === 0 || idx === 1 ? "block mt-[40px]" : "hidden"} rounded-lg ${idx === 0 ? "w-[234px] " : "w-[175px]  accent-[black]"} appearance: none  accent-[#55761C]`}
            />
            <label htmlFor="range">{rate}</label>
          </div>
          {idx === 2 && (
            <div className="w-full flex justify-center items-center py-2">
              <BarChart
                labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'june', 'july', 'august', 'sep', 'oct', 'nov', 'dec']}
                data={[290, 390, 230, 500, 270, 400, 600, 850, 200, 190, 475]}
                label="Monthly Calls"
                backgroundColor="#55761C"
              />
            </div>
          )}
        </div>

      {/* </div> */}
    </div>
  );
};

export default Card;
