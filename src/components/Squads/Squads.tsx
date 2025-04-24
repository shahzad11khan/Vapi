import { useState } from 'react';
import ReusableModal from '../Reuseable/ReusableModal';
import TopBar from '../Reuseable/TopBar';

const Squads = () => {
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
              title="Squads"
              buttons={[
                { label: 'Talk to Assistant', onClick: handleTalk, variant: 'secondary' },
                { label: 'Publish', onClick: handlePublish, variant: 'primary' },
              ]}
            />

      {/* Right Card */}
      <div className="w-full flex justify-center items-center">
        <div className=" p-8 w-[400px] text-center shadow-md mt-5">
          <h2 className="text-xl font-semibold mb-4">Squads</h2>
          <p className="text-gray-400 ">
          Squads is a workflow tool that you use to connect multiple assistants into one flow.</p>

<p className="text-gray-400 mb-6">They can be fully configured and utilize existing, tools, prompts, settings, or can have unique overrides.
          </p>
          <button
            onClick={handleCreateWorkflow}
            className="px-6 py-2 bg-[#55761C] text-white rounded-lg hover:bg-[#6e9a27] transition"
          >
            New Squads
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

export default Squads;
