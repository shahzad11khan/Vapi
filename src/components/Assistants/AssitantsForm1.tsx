const AssistantForm1 = () => {

  return (
    <div className="text-white space-y-6 p-6 bg-[#1C1C1C] rounded-xl shadow-lg">
      {/* Top Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-[12px] block mb-1">Provider</label>
          <input
            type="text"
            className="w-full p-2 rounded bg-[#1C1C1C] border border-gray-700"
            placeholder="Enter your first message"
          />
        </div>
        <div>
          <label className="text-[12px] block mb-1">vapi</label>
          <input
            type="text"
            className="w-full p-2 rounded bg-[#1C1C1C] border border-gray-700"
            placeholder="Enter provider"
          />
        </div>
      </div>

    </div>
  );
};

export default AssistantForm1;
