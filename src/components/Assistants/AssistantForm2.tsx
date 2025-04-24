import { useState } from "react";
const AssistantForm2 = () => {
  const [isOn, setIsOn] = useState(false);

    return (
      <div className="text-white space-y-6 p-6 bg-[#1C1C1C] rounded-xl shadow-lg">
        {/* Top Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="text-[12px] block mb-1">Provider</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-[#1C1C1C] border border-gray-700"
              placeholder="Enter your first message"
            />
          </div>
          <div>
            <label className="text-[12px] block mb-1">Provider</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-[#1C1C1C] border border-gray-700"
              placeholder="Enter provider"
            />
          </div>
          <div>
            <label className="text-[12px] block mb-1">Provider</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-[#1C1C1C] border border-gray-700"
              placeholder="Enter provider"
            />
          </div>
        </div>

        <div>
          <h3 className="text-[12px] font-semibold">Punctuation Boundaries</h3>
          <p className="text-[8px] text-gray-400 mt-1">These are the punctuations that are considered valid boundaries or delimiters. This helps decides the chunks that are sent to the voice provider for the voice generation as the LLM tokens are streaming in.</p>
          <input
              type="text"
              className="w-full p-2 rounded bg-[#1C1C1C] border border-gray-700 mt-1"
              placeholder="Vapi"
            />
          <h3 className="text-[12px] font-semibold mt-1">Ue Numerials</h3>
         
          <div className="flex justify-between items-center w-full">
      <span className=" text-white text-[8px]">Convert numbers from words to digits in transcription</span>

      <button
        onClick={() => setIsOn(!isOn)}
        className={`w-14 h-8 flex items-center rounded-full p-1 duration-300 ease-in-out ${
          isOn ? "bg-[#55761C]" : "bg-gray-300"
        }`}
      >
        <div
          className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${
            isOn ? "translate-x-6" : ""
          }`}
        ></div>
      </button>
         </div>

            
        </div>

        
  
      </div>
    );
  };
  
  export default AssistantForm2;
  