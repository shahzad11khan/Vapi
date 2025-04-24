const AssistantForm11 = () => {
    return (
      <div className="text-white space-y-6 p-6 bg-[#1C1C1C] rounded-xl shadow-lg">
        {/* Top Inputs */}
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="text-sm block mb-1">Select Tools</label>
            <select
              className="w-full p-5 bg-[#1C1C1C] border rounded-xl border-gray-700"
            >
              <option value="">Tools</option>
              <option value="tool1">Tool 1</option>
              <option value="tool2">Tools 2</option>
              <option value="tool3">Tool 3</option>
             
            </select>
          </div>
        </div>
      </div>
    );
  };
  
  export default AssistantForm11;
  