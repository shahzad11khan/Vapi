import React from 'react';

const FilterBar: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 px-6  text-white shadow-md rounded-md mt-6">
      {/* Page Title */}
      <h2 className="text-[17px] font-semibold text-white font-poppins">Overview</h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 items-center">
        {/* Start Date */}
        <div className="flex flex-col">
          <label className="text-sm text-white mb-1">Start Date</label>
          <input
            type="date"
            className="border border-gray-300 rounded-md px-3 py-2 text-sm"
          />
        </div>

        {/* End Date */}
        <div className="flex flex-col">
          <label className="text-sm text-white mb-1">End Date</label>
          <input
            type="date"
            className="border border-gray-300 rounded-md px-3 py-2 text-sm"
          />
        </div>

        {/* Dropdown for Assistants */}
        <div className="flex flex-col">
          <label className="text-sm text-white mb-1">Select Assistant</label>
          <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
            <option value="">All Assistants</option>
            <option value="assistant1">John Doe</option>
            <option value="assistant2">Jane Smith</option>
            <option value="assistant3">Michael Lee</option>
            <option value="assistant4">Sarah Brown</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
