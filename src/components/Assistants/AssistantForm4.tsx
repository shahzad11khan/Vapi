import { useState } from "react";


const AssistantForm4 = () => {
     const [denoisingEnabled, setDenoisingEnabled] = useState(true);
      // const [confidenceThreshold, setConfidenceThreshold] = useState(false);
      const [useNumerals, setUseNumerals] = useState(false);
    return (
      <div className="text-white space-y-6 p-6 bg-[#1C1C1C] rounded-xl shadow-lg">
        {/* Top Inputs */}
        <div className="grid grid-cols-1 gap-4">
        {[{
        title: "Enable End Call Function",
        desc: "Filter background noise while the user is talking.",
        value: denoisingEnabled,
        onChange: () => setDenoisingEnabled(!denoisingEnabled),
      },{
        title: "Dial Keypad",
        desc: "Convert numbers from words to digits in transcription.",
        value: useNumerals,
        onChange: () => setUseNumerals(!useNumerals),
      }].map((item, index) => (
        <div key={index} className="flex justify-between items-start border-b border-gray-700 pb-4">
          <div>
            <h4 className="font-semibold text-[12px]">{item.title}</h4>
            <p className="text-[8px] text-white">{item.desc}</p>
          </div>
          <div>
            <button
              onClick={item.onChange}
              className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${
                item.value ? 'bg-green-500' : 'bg-gray-600'
              }`}
            >
              <span
                className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform duration-300 ${
                  item.value ? 'translate-x-0.5' : '-translate-x-7'
                }`}
              />
            </button>
          </div>
        </div>
      ))}
        </div>
        <div>
        <label className="text-white font-semibold text-[12px]">Forwarding Phone Number</label>
        <input type="number" 
        className="w-full border border-gray-700 rounded-md p-2 mt-1"
        placeholder="01234"
        />
        </div>

      </div>
    );
  };
  
  export default AssistantForm4;
  