'use client';
import { useState } from 'react';
import ReusableModal from '../Reuseable/ReusableModal';
import TopBar from '../Reuseable/TopBar';

const PhoneNumber = () => {
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
              title="Phone Number"
              buttons={[
                { label: 'Talk to Assistant', onClick: handleTalk, variant: 'secondary' },
                { label: 'Publish', onClick: handlePublish, variant: 'primary' },
              ]}
            />


      {/* Center Card */}

      <div className='flex justify-center'>

        <div className="bg-[#1C1C1C] border border-gray-700 rounded-xl p-8 w-full max-w-md text-center shadow-md mt-5">
          <h2 className="text-xl font-semibold mb-4">Phone Numbers</h2>
          <p className="text-gray-400 mb-6">
            Assistants are able to be connected to phone numbers for calls.
            You can import from Twilio, vonage, or create a free number directly from Vapi for use with your assistants.        </p>
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
        array={[
          'Free Vapi Number',
          'Free Vapi SIP',
          'Import Twilio',
          'Import Vonage',
          'Import Telnyх',
          'BYO SIP',
        ]}
        submitText="Create"
        cancleText="Cancle"

        fields={[
          {
            label: 'Area Code',
            name: 'AreaCode',
            type: 'text',
            placeholder: 'Enter Area Code',
          },
        ]}
        onSubmit={(data) => {
          console.log('Workflow Created:', data);
        }}
        onCancle={(data) => {
          console.log('Workflow Cancle:', data);
        }}
        seconddescription="Functionality to create Vapi phone numbers is only available for the US. For phone numbers from other regions, please use the Import Phone Numbers feature."
      />




    </div>
  );
};

export default PhoneNumber;
