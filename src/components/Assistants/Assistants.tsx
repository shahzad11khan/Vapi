import React, { useState } from 'react';
import AccordionForm from './Accordion';
import Accordion from '../Reuseable/Accordion';
import AssistantForm from './AssistantForm';
import AssistantForm1 from './AssitantsForm1';
import AssistantForm2 from './AssistantForm2';
import AssistantForm3 from './AssistantForm3';
import AssistantForm4 from './AssistantForm4';
import AssistantForm5 from './AssistandForm5';
import AssistantForm6 from './AssistandForm6';
import AssistantForm7 from './AssistandForm7';
import AssistantForm8 from './AssistandForm8';
import AssistantForm9 from './AssistandDorm9';
import AssistantForm10 from './AssistandForm10';
import AssistantForm11 from './AssistandForm11';
import AssistantForm12 from './AssistandForm12';
import AssistantForm13 from './AssistantForm13';
import AssistantForm14 from './AssistantForm14';
import TopBar from '../Reuseable/TopBar';


const Assistants: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState('Model');

    const categories = ['Model', 'Deepgram', 'GPT-4.0', 'Tools', 'Analysis', 'Advanced'];
    const items = [
        {
            image: '/red.png', // Replace with actual image path
            name: 'Vapi Fored Cost',
        },
        {
            image: '/oringe.png',
            name: 'vapi',
        },
        {
            image: '/purple.png',
            name: 'web',
        },
        {
            image: '/blue.png',
            name: 'Deepgram',
        },
    ];
    const handleTalk = () => {
        console.log('Talk to Assistant');
      };
    
      const handlePublish = () => {
        console.log('Publish clicked');
      };

    return (
        <div className="w-full px-6 py-4 ">
             <TopBar
        title="Assistants"
        buttons={[
          { label: 'Talk to Assistant', onClick: handleTalk, variant: 'secondary' },
          { label: 'Publish', onClick: handlePublish, variant: 'primary' },
        ]}
      />

            <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-300 mt-6 pb-4">
                {/* Radio Buttons */}
                <div className="flex flex-wrap gap-4">
                    {categories.map((category) => (
                        <label key={category} className="flex items-center gap-2 cursor-pointer text-white">
                            <input
                                type="radio"
                                name="category"
                                value={category}
                                checked={selectedCategory === category}
                                onChange={() => setSelectedCategory(category)}
                                className="accent-[#55761C]"
                            />
                            <span className="text-sm">{category}</span>
                        </label>
                    ))}
                </div>

                {/* Search Box */}
                <div className="relative mt-4 md:mt-0 w-full md:w-64">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#55761C]"
                    />
                    <img
                        src="/search-icon.png" // Replace with your image path
                        alt="Search"
                        className="absolute left-3 top-2.5 w-5 h-5 opacity-60"
                    />
                </div>
            </div>

           

            <div className="flex gap-6 mt-3">
                {items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                        {/* Image */}
                        <img
                            src={item.image}
                            alt={`Image ${idx + 1}`}
                            className="w-5 h-5 object-cover rounded-full"
                        />

                        <span
                            className=" text-white px-3 py-1 rounded-full text-[12px] font-medium"
                        >
                            {item.name}
                        </span>

                    </div>
                ))}
            </div>
            <div className="flex w-full gap-4 mt-2">
                <div className="w-[80%]">
                    <p className="text-white font-semibold border-2 border-[#1C1C1C] p-4 rounded-xl shadow">Riley</p>
                    <div className='flex text-white mt-2 gap-2 text-[12px]'>
                        <img
                            src={'/red.png'}
                            alt={`Image `}
                            className="w-5 h-5 object-cover rounded-full"
                        />
                        Model
                    </div>
                    <div className="text-white font-semibold border-2 border-[#1C1C1C] p-4 rounded-xl shadow mt-2">
                        <AccordionForm />
                    </div>
                    <div className="text-white font-semibold border-2 border-[#1C1C1C] p-4 rounded-xl shadow mt-2">
                        <Accordion title="TRANSCRIBER" description="Configure the behaviour of the assistant">
                            <AssistantForm />
                        </Accordion>
                    </div>
                    <div className="text-white font-semibold border-2 border-[#1C1C1C] p-4 rounded-xl shadow mt-2">
                        <Accordion title="TRANSCRIBER" description="Configure the behaviour of the assistant">
                            <AssistantForm1 />
                        </Accordion>
                    </div>
                    <div className="text-white font-semibold border-2 border-[#1C1C1C] p-4 rounded-xl shadow mt-2">
                        <Accordion title="TRANSCRIBER" description="Configure the behaviour of the assistant">
                            <AssistantForm2 />
                        </Accordion>
                    </div>
                    <div className="text-white font-semibold border-2 border-[#1C1C1C] p-4 rounded-xl shadow mt-2">
                        <Accordion title="Tools" description="Configure the behaviour of the assistant">
                            <AssistantForm3 />
                        </Accordion>
                    </div>

                    <div className="text-white font-semibold border-2 border-[#1C1C1C] p-4 rounded-xl shadow mt-2">
                        <Accordion title="Predefined Functions" description="Configure the behaviour of the assistant">
                            <AssistantForm4 />
                        </Accordion>
                    </div>
                   
                    <div className="text-white font-semibold border-2 border-[#1C1C1C] p-4 rounded-xl shadow mt-2">
                        <Accordion title="Custom Functions" description="">
                            <AssistantForm5 />
                        </Accordion>
                    </div>

                    <div className="text-white font-semibold border-2 border-[#1C1C1C] p-4 rounded-xl shadow mt-2">
                        <Accordion title="Summary" description="">
                            <AssistantForm6 />
                        </Accordion>
                    </div>
                    <div className="text-white font-semibold border-2 border-[#1C1C1C] p-4 rounded-xl shadow mt-2">
                        <Accordion title="Success Evaluation" description="">
                            <AssistantForm7 />
                        </Accordion>
                    </div>
                    <div className="text-white font-semibold border-2 border-[#1C1C1C] p-4 rounded-xl shadow mt-2">
                        <Accordion title="Privacy" description="This section allows you to configure the privacy settings for the assistant">
                            <AssistantForm8 />
                        </Accordion>
                    </div>
                    <div className="text-white font-semibold border-2 border-[#1C1C1C] p-4 rounded-xl shadow mt-2">
                        <Accordion title="Privacy" description="This section allows you to configure the privacy settings for the assistant">
                            <AssistantForm9 />
                        </Accordion>
                    </div>
                    <div className="text-white font-semibold border-2 border-[#1C1C1C] p-4 rounded-xl shadow mt-2">
                        <Accordion title="Start Speaking Plan" description="This is the plan for when the assistant should start talking.">
                            <AssistantForm10 />
                        </Accordion>
                    </div>
                    <div className="text-white font-semibold border-2 border-[#1C1C1C] p-4 rounded-xl shadow mt-2">
                        <Accordion title="Voicemail Detection" description="Configure how the assistant detects and handles voicemail.">
                            <AssistantForm11 />
                        </Accordion>
                    </div>
                    <div className="text-white font-semibold border-2 border-[#1C1C1C] p-4 rounded-xl shadow mt-2">
                        <Accordion title="Stop Speaking Plan" description="This is the plan for when the assistant should stop talking.">
                            <AssistantForm12 />
                        </Accordion>
                    </div>
                    <div className="text-white font-semibold border-2 border-[#1C1C1C] p-4 rounded-xl shadow mt-2">
                        <Accordion title="Call Timeout Settings" description="Configure when the assistant should end a call based on silence ur duration.">
                            <AssistantForm13 />
                        </Accordion>
                    </div>
                    <div className="text-white font-semibold border-2 border-[#1C1C1C] p-4 rounded-xl shadow mt-2">
                        <Accordion title="Keypad Input Settings" description="Configure whether a user can input digits via the leypad, and when to process the input.">
                            <AssistantForm13 />
                        </Accordion>
                    </div>
                    <div className="text-white font-semibold border-2 border-[#1C1C1C] p-4 rounded-xl shadow mt-2">
                        <Accordion title="Messaging" description="Message configuration for messages that are sent to and from the assistant.">
                            <AssistantForm14 />
                        </Accordion>
                    </div>

                </div>


                {/* 20% Width Div */}
                <div className='w-[20%] flex flex-col'>
                <div className=" h-40 bg-gray-200 p-4 rounded-md shadow flex flex-col">
                    <p className="text-gray-800 font-semibold">This is the 20% width div</p>
                </div>
                    <button className="bg-[#55761C] text-white px-5 py-2 rounded-lg hover:bg-[#446013] transition mt-2">
                        Create Assistant
                    </button>  
                    </div>            
            </div>
        </div>
    );
};

export default Assistants;
