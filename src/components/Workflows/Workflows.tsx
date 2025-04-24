'use client';
import { useState } from 'react';
import ReusableModal from '../Reuseable/ReusableModal';
import TopBar from '../Reuseable/TopBar';
const Workflows = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateWorkflow = () => {
    setIsModalOpen(true);
  };
  const handleTalk = () => {
    console.log('Talk to Assistant');
  };

  const handlePublish = () => {
    console.log('Publish clicked');
  };

  return (
    <div className="w-full px-6 py-4">
  <TopBar
        title="WorkFlow"
        buttons={[
          { label: 'Talk to Assistant', onClick: handleTalk, variant: 'secondary' },
          { label: 'Publish', onClick: handlePublish, variant: 'primary' },
        ]}
      />
      <div className="w-full flex justify-end mt-4 md:mt-0">
  <div className="relative w-full md:w-64 lg:w-[326px]">
    <input
      type="text"
      placeholder="Search by user roles"
      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#55761C]"
    />
    <img
      src="/search-icon.png" 
      alt="Search"
      className="absolute left-3 top-2.5 w-5 h-5 opacity-60"
    />
  </div>
</div>

      {/* Right Card */}
      <div className="w-full flex justify-end items-center">
        <div className="bg-[#1C1C1C] rounded-xl p-8 w-[326px] text-center shadow-md mt-5">
          <h2 className="text-xl font-semibold mb-4">Right</h2>
          <p className="text-gray-400 mb-6">
            Looks like you don’t have any workflows yet. Create one to get started.
          </p>
          <button
            onClick={handleCreateWorkflow}
            className="px-6 py-2 bg-[#55761C] text-white rounded-lg hover:bg-[#6e9a27] transition"
          >
            Create New Workflow
          </button>
        </div>
      </div>
<div className="w-full flex justify-center">
      <div className="bg-[#1C1C1C] border border-gray-700 rounded-xl p-8 w-full max-w-md lg:w-[326px] text-center shadow-md">
        <h2 className="text-xl font-semibold mb-4">Workflows</h2>
        <p className="text-gray-400 mb-6">
          Looks like you don’t have any workflows yet. Create one to get started.
        </p>
        <button
          onClick={handleCreateWorkflow}
          className="px-6 py-2 bg-[#55761C] text-white rounded-lg hover:bg-[#6e9a27] transition"
        >
          Create New Workflow
        </button>
      </div>
      </div>
      {/* Modal */}
      <ReusableModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode="form"
        title="Create New Workflow"
        description="Give your workflow a name and optionally assign an assistant"
        submitText="Create"
        fields={[
          {
            label: 'Workflow Name',
            name: 'name',
            type: 'text',
            placeholder: 'Enter name',
          },
          {
            label: 'Choose Assistant',
            name: 'assistant',
            type: 'select',
            options: ['Support Bot', 'HR Assistant'],
          },
        ]}
        onSubmit={(data) => {
          console.log('Workflow Created:', data);
        }}
      />
    </div>
  );
};

export default Workflows;
