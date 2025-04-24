import React from 'react';
import SecondCard from '../Reuseable/SecondCard';
const SecondHeroSection: React.FC = () => {
  const Secondcards = [
    {
      title: 'Number of Concurrent Calls',
      value: '31.6k',
      // percentageChange: 56,
      // image: '/sidebarimages/totaluser.png', // replace with actual image path
    },
    {
      title: 'Success Evaluation',
      value: '2.7k',
      percentageChange: -4.2,
      image: '/sidebarimages/totalstore.png',
    },
    {
      title: 'Unsuccessful calls',
      value: '',
      // percentageChange: 9.8,
      // image: '/sidebarimages/totalrev.png',
    },

  ];

  return (
    
    <div className="mt-6 flex flex-wrap gap-5">
      {Secondcards.map((card, idx) => (
        <div className={`w-full ${idx === 0 ? 'lg:w-[359px]' : idx === 1 ? 'lg:w-[445px]' :  idx === 2 ? 'lg:w-[234px]' : idx===3 ? 'lg:w-[507px] ': 'lg:w-[425px]'} bg-[#1C1C1C] rounded-2xl`} key={idx}>
          <SecondCard
            title={card.title}
            count={card.value} 
            // percentageChange={card.percentageChange}
            // image={card.image}
            idx={idx}
          />
        </div>
      ))}
    </div>
    
  );
};

export default SecondHeroSection;
