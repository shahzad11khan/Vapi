import  { useState } from 'react';

const AssistantForm = () => {
  const [denoisingEnabled, setDenoisingEnabled] = useState(true);
  const [confidenceThreshold, setConfidenceThreshold] = useState(false);
  const [useNumerals, setUseNumerals] = useState(false);

  return (
    <div className="text-white space-y-6 p-6 bg-[#1C1C1C] rounded-xl shadow-lg">
      {/* Top Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="text-[12px] block mb-1">First Message</label>
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
          <label className="text-[12px] block mb-1">Model</label>
          <input
            type="text"
            className="w-full p-2 rounded bg-[#1C1C1C] border border-gray-700"
            placeholder="Enter model"
          />
        </div>
      </div>

      {[{
        title: "Background Denoising Enabled",
        desc: "Filter background noise while the user is talking.",
        value: denoisingEnabled,
        onChange: () => setDenoisingEnabled(!denoisingEnabled),
      }, {
        title: "Confidence Threshold",
        desc: "Filter background noise while the user is talking.",
        value: confidenceThreshold,
        onChange: () => setConfidenceThreshold(!confidenceThreshold),
      }, {
        title: "Use Numerals",
        desc: "Convert numbers from words to digits in transcription.",
        value: useNumerals,
        onChange: () => setUseNumerals(!useNumerals),
      }].map((item, index) => (
        <div key={index} className="flex justify-between items-start border-b border-gray-700 pb-4">
          <div>
            <h4 className="font-semibold text-[12px]">{item.title}</h4>
            <p className=" text-gray-400 text-[8px]">{item.desc}</p>
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

      <div>
        <label className="text-[12px] block mb-1">Keyterms</label>
        <textarea
          className="w-full p-2 rounded bg-[#1C1C1C] border border-gray-700"
          placeholder="Add keyterms here..."
          style={{ height: '72px' }}
        />
      </div>
      <p className='text-[12px] text-gray-400'>Enter keywords separated by spaces. These will be used as key terms for transcription.</p>
    </div>
  );
};

export default AssistantForm;
