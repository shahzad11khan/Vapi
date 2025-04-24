import { useState } from "react";

const AssistantForm7 = () => {
  const [timeout, setTimeout] = useState(55);

  return (
    <div className="text-white space-y-6 p-6 bg-[#1C1C1C] rounded-xl shadow-lg">
      <div className="grid grid-cols-1 gap-4">
        <div>
          <p className="w-full p-2 rounded-md bg-[#1C1C1C] border border-gray-700 text-gray-700 text-[8px]">
            This is the prompt that's used to summarize the call. The output is stored in call.analysis.summary. You can also find the summary in the Call Logs Page
          </p>

          <label className="text-white font-semibold mt-2  text-[12px]">Prompt</label>
          <p className="w-full p-2 rounded-md bg-[#1C1C1C]  text-gray-700">This is the prompt that's used to evaluate if the call was successful.</p>
          <p className="w-full p-2 rounded-md bg-[#1C1C1C] border border-gray-700 text-gray-700 text-[8px]">
            You are an expert note-taker. You will be given a transcript of a call. Summarize the call in 2-3 sentences, if applicable
          </p>
          <label className="text-white font-semibold mt-2 text-[12px]">Success Evaluation Rubric</label>
          <p className="w-full p-2 rounded-md bg-[#1C1C1C]  text-gray-700 text-[8px]">This is the prompt that's used to evaluate if the call was successful.</p>
          <p className="w-full p-2 rounded-md bg-[#1C1C1C] border border-gray-700 text-gray-700">
          This enforces the rubric of the evaluation upon the Success Evaluation.          </p>

          <div className="flex justify-between items-center mt-2">
            <h3 className="text-[8px] text-gray-500">Select Evaluation Rubric</h3>
            <div className="flex items-center gap-2">
              <input
                type="range"
                min="0"
                max="100"
                value={timeout}
                onChange={(e) => setTimeout(Number(e.target.value))}
                className="w-40 accent-[#55761C]"
              />
              <span className="text-[8px] text-white">{timeout}s</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssistantForm7;
