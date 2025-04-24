import React, { useState } from 'react';

const AccordionForm: React.FC = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="text-white font-semibold  border-[#1C1C1C] rounded-xl shadow mt-4">
            {/* Accordion Header */}
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h2 className="text-[12px]">Model</h2>
                <span className="text-lg">{isOpen ? '−' : '+'}</span>
            </div>

            {/* Accordion Content */}
            {isOpen && (
                <div className="mt-4">
                    {/* Description */}
                    <p className="text-[8px] text-gray-300 mb-4">
                        Configure the behaviour of the assistant
                    </p>

                    {/* 2 Column Form */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[471px] ">

                        <div className='flex flex-col gap-y-4'>
                            <div className="flex flex-col">
                                <label className="text-[12px] mb-1">First Promt</label>
                                <input
                                    type="text"
                                    placeholder="Enter model name"
                                    className="p-2 rounded bg-[#1C1C1C] border border-gray-700 text-white"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-[12px] mb-1">System Prompt</label>
                                <textarea
                                    placeholder="e.g., You are a helpful assistant..."
                                    className="p-2 rounded bg-[#1C1C1C] border border-gray-700 text-white h-[259px] resize-none overflow-y-auto"
                                    style={{ textAlign: 'left' }}
                                />
                            </div>

                        </div>

                        <div className='flex flex-col gap-y-4'>
                            <div className="flex flex-col">
                                <label className="text-[12px] mb-1">Provider</label>
                                <input
                                    type="text"
                                    placeholder="e.g., GPT-4"
                                    className="p-2 rounded bg-[#1C1C1C] border border-gray-700 text-white"
                                />
                            </div>



                            <div className="flex flex-col">
                                <label className="text-[12px] mb-1">Files</label>
                                <input
                                    type="number"
                                    placeholder="e.g., 1"
                                    className="p-2 rounded bg-[#1C1C1C] border border-gray-700 text-white"
                                />
                            </div>
                        </div>


                    </div>
                </div>
            )}
        </div>
    );
};

export default AccordionForm;
