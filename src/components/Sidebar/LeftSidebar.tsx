import {  useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const LeftSidebar: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<number | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);


const location = useLocation();


  const handleButtonClick = (index: number) => {
    setSelectedButton(index);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const [openIndex, setOpenIndex] = useState<string | number | null>(null);
  const handleToggle = (index : string | number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // Sample button data
  const buttonData = [
    {
      name: 'OverView',
      path: '/dashboard',
      icon: '/overview.png',
    },
    {
      name: 'Assistant',
      path: '/Assistant',
      icon: '/Calendar.png',
    },
    {
      name: 'Workflows',
      path: '/Workflows',
      icon: '/Activity.png',
    },
    {
      name: 'Phone Numbers',
      path: '/PhoneNumbers',
      icon: '/Vector.png',
    },
    {
      name: 'Tools',
      path: '/Tools',
      icon: '/upfile.png',
    },
    {
      name: 'Files',
      path: '/Files',
      icon: '/Vector.png',
    },
    {
      name: 'Squads',
      path: '/Squads',
      icon: '/Vector.png',
    },
  
  ];

  const sectionData = [
    {
      title: 'Test',
      children: ['Test 1', 'Test 2', 'Test 3'],
    },
    {
      title: 'Overview',
      children: [],
    },
    {
      title: 'Community',
      children: [],
    },
    {
      title: 'Org Settings',
      children: [],
    },
    {
      title: 'Account Settings',
      children: [],
    },
  ];


  return (
    <div className="w-[240px] h-[145vh] bg-[#1C1C1C] p-3 gap-4 flex flex-col shadow-2xl m-5 text-center rounded-2xl">
      {/* Dropdown Button at the Top */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 cursor-pointer" onClick={toggleDropdown}>
          <img
            src="/image.png" // Replace with your profile icon path
            alt="User"
            className="w-8 h-8 rounded-full"
          />
          <div>
            <p>Full Stack</p>
            <span className="text-white font-medium">Username</span>
          </div>
          <img
            src="/uparrow.png" // Replace with your profile icon path
            alt="User"
            className="w-8 h-8 rounded-full"
          />
        </div>
        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="absolute bg-white text-black p-2 rounded-md shadow-lg mt-2">
            <ul>
              <li className="py-1 px-3 hover:bg-gray-200 cursor-pointer">Profile</li>
              <li className="py-1 px-3 hover:bg-gray-200 cursor-pointer">Logout</li>
            </ul>
          </div>
        )}
      </div>

      {/* Sidebar Buttons */}
      {buttonData.map((button, index) => (
        <Link to={button.path} key={index}>
          <button
            onClick={() => handleButtonClick(index)}
            className={`flex items-center space-x-4 ${
              selectedButton === index || location.pathname === button.path ? 'bg-gray-800 border-gray-500' : ''
            } rounded-lg px-[15px] h-[48px] w-[97%] text-left hover:bg-gray-700 hover:border-2 hover:border-gray-500 hover:border-dotted transition-all duration-200 text-white`}
          >
            <img src={button.icon} alt={button.name} className="w-6 h-6" />
            <span className="font-medium text-[15px] leading-[28px] font-open-sans">
              {button.name}
            </span>

            {/* Show dot if the button is selected */}
            {selectedButton === index || location.pathname === button.path ? (
              <img
                src="/dot.png" // Replace with your dot icon path
                alt="dot"
                className="w-2 h-2 ml-auto"
              />
            ):null}
          </button>
        </Link>
      ))}
     <ul className="text-[10px] whitespace-nowrap p-3">
      {sectionData.map((section, index) => (
        <li key={index} className="pt-5 first:pt-0">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => handleToggle(index)}
          >
            <span className="uppercase">{section.title}</span>
            <span className="w-[123px] h-[1px] bg-[#272830]"></span>
            <span className="text-[#53731B]">{openIndex === index ? '˅' : '^'}</span>
          </div>

          {openIndex === index && section.children.length > 0 && (
            <ul className="pl-4 pt-2 space-y-1 transition-all duration-300">
              {section.children.map((child, idx) => (
                <li key={idx} className="text-white hover:underline cursor-pointer">
                  {child}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>

    </div>
  );
};

export default LeftSidebar;
