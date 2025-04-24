import React, { useState } from 'react';

interface HeaderProps {
  username: string;
  profileImage: string;
}

const Header: React.FC<HeaderProps> = ({ username, profileImage }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="w-full bg-[#254D4A] text-white h-[62px] flex items-center justify-between px-6 shadow-md">
      <div className="text-xl font-bold">ifixscreen</div>

      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center space-x-2 focus:outline-none"
        >
          <span className="font-medium">{username}</span>
          <img
            src={profileImage}
            alt="Profile"
            className="w-8 h-8 rounded-full border border-white"
          />
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg z-10">
            <a
              href="/profile"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Profile Page
            </a>
            <button
              onClick={() => {
                setDropdownOpen(false);
                alert('Logout logic here');
              }}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
