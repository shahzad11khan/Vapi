import React from 'react';
import BarChart from '../Reuseable/BarChart';
import DoughnutChart from './DoughnutChart';

interface CardProps {
  title: string;
  count: string | null;
  // percentageChange: number | string;
  // image: string;
  idx: number;
}

const SecondCard: React.FC<CardProps> = ({ title, count, idx }) => {
  return (
    <div className="p-3 text-white flex flex-col justify-between rounded-xl">
        <div>
          <h2 className="text-[12px] font-semibold">{title}</h2>
          <p
            className={`mt-1 font-bold ${count !== null && count !== '' ? 'text-[36px]' : 'text-[12px]'
              }`}
          >
            {count !== null && count !== ''
              ? count
              : 'There are no unsuccessful calls in the selected time period.'}
          </p>
          {idx === 1 && (
            <div className="w-full flex justify-center items-center py-2">
              <BarChart
                labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'june', 'july', 'august', 'sep', 'oct', 'nov', 'dec']}
                data={[290, 390, 230, 500, 270, 400, 600, 850, 200, 190, 475]}
                label="Monthly Calls"
                backgroundColor="#55761C"
              />
            </div>
          )}
          {idx === 0 && (
            <div className="w-full flex justify-center items-center py-2">
              <DoughnutChart
                labels={[]}
                data={[60, 25, 15]}
                label="Call Status"
              />

            </div>
          )}
        </div>

      </div>
  );
};

export default SecondCard;
