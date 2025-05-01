import React from 'react';
import Card from '../Reuseable/Card';
import FilterBar from '../Reuseable/secondheader';

const HeroSection: React.FC = () => {
  const cards = [
    {
      title: 'Total Call Minutes',
      range:'Response Rate',
      value: '0.00',
      // percentageChange: 56,
      // image: '/sidebarimages/totaluser.png', 
    },
    {
      title: 'Number of Calls',
      value: '1',
      range:'Response Rate',
      // percentageChange: -4.2,
      // image: '/sidebarimages/totalstore.png',
    },
    {
      title: 'Reason Call Ended',
      range:'',
      value: '',
      // percentageChange: 9.8,
      // image: '/sidebarimages/totalrev.png',
    },
  ];

  return (
    <>
    <FilterBar />
    <div className="flex flex-wrap gap-5 mt-6 w-full">
      {cards.map((card, idx) => (
        <div className={`w-full lg:h-[221px] ${idx === 1 ? 'lg:w-[230px]' : idx===2 ?'lg:w-[500px]' :'lg:w-[270px]'} ${idx === 1 ? 'bg-[#55761C]':'bg-[#1C1C1C]'} rounded-2xl`} key={idx}> 
          <Card
            title={card.title}
            count={card.value}
            rate={card.range}
            // percentageChange={card.percentageChange}
            // image={card.image}
            idx={idx}
          />
        </div>
      ))}
    </div>
    </>
  );
};

export default HeroSection;
