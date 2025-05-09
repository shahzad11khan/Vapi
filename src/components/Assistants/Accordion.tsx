import React, { useEffect, useState } from 'react';
import { BaseUrl } from '../../utils/BaseUrl';
import { File_Middle_point } from '../../utils/MiddlePoint';
import { makeApiRequest } from '../../utils/axios';

interface Assistant {
    AssistantName: string;
    FirstPrompt : string;
    SystemPrompt : string;
    _id : string;
    createdBy : string;
  }
  
  interface AccordionFormProps {
    sellectedAssistant: Assistant | null;
    setSellectedAssistant : React.Dispatch<React.SetStateAction<Assistant | null>>
  }
  interface FileItem {
    pdfFile: {
      fileName: string;
      path: string;
    };
    createdBy: string;
  }

const AccordionForm: React.FC<AccordionFormProps> = ({sellectedAssistant , setSellectedAssistant}) => {
    // console.log(sellectedAssistant)
    const [isOpen, setIsOpen] = useState(true);
    const [files, setFiles] = useState<FileItem[]>([]);
    const [modeForm , setModelForm] = useState({
        FirstPrompt: "",
        SystemPrompt: "",
        Files: "",
        Provider: "",
    })

    // const [selectedIndex, setSelectedIndex] = useState(null);
    // const [newFileName, setNewFileName] = useState("");

    const handleSelectChange = async(e : React.ChangeEvent<HTMLSelectElement>) => {
    const {value} = e.target;
    if(value ){
        const url = BaseUrl + File_Middle_point +"/" + value;
        const response = await makeApiRequest({url ,method:"POST"});
        console.log(response);
        if(response.message){
            setModelForm((preValue)=>{
               return {...preValue , SystemPrompt:response.text}
            });
            if(sellectedAssistant){
            setSellectedAssistant({...sellectedAssistant, SystemPrompt:response.text})
            }
        }
    }
    };

    const fetchData = async() => {
        const url = BaseUrl + File_Middle_point;
        const response = await makeApiRequest({url});
        if(response.message){
            setFiles(response.files);
        }
    }

    useEffect(()=>{
        setModelForm({
            FirstPrompt: sellectedAssistant?.FirstPrompt || "",
            SystemPrompt: sellectedAssistant?.SystemPrompt || "",
            Files: "",
            Provider: "",
        })
        setIsOpen(true);
        if(sellectedAssistant){
            fetchData();
        }
    },[sellectedAssistant?._id])

    const HandleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {value , name} = event.target;
        setModelForm((preValue)=>{
            return {
                ...preValue,
                [name] : value
            }
        }) 
        setSellectedAssistant((preValue)=>{
            if (!preValue) return preValue;
            return {
                ...preValue,
                [name] : value
            }
        })
    }

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
                                <label className="text-[12px] mb-1">First Propmt</label>
                                <input
                                    type="text"
                                    placeholder="Enter model name"
                                    name='FirstPrompt'
                                    value={modeForm.FirstPrompt}
                                    onChange={HandleChange}
                                    className="p-2 rounded bg-[#1C1C1C] border border-gray-700 text-white"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-[12px] mb-1">System Prompt</label>
                                <textarea
                                    placeholder="e.g., You are a helpful assistant..."
                                    name='SystemPrompt'
                                    value={modeForm.SystemPrompt}
                                    onChange={HandleChange}
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
                                    name='Provider'
                                    value={modeForm.Provider}
                                    onChange={HandleChange}
                                    className="p-2 rounded bg-[#1C1C1C] border border-gray-700 text-white"
                                />
                            </div>

                            {/* <div className="flex flex-col">
                                <label className="text-[12px] mb-1">Files</label>
                                <input
                                    type="number"
                                    placeholder="e.g., 1"
                                    name='Files'
                                    value={modeForm.Files}
                                    onChange={HandleChange}
                                    className="p-2 rounded bg-[#1C1C1C] border border-gray-700 text-white"
                                />
                            </div> */}

                            <div className="flex flex-col ">
                                <label className="text-[12px] mb-1">Files</label>
                                    <select className='bg-[#1C1C1C] rounded-md p-2 border border-gray-700' onChange={handleSelectChange}>
                                    <option value={''}>Select File</option>
                                    {files.map((file, index) => (
                                        <option key={index}>{file.pdfFile.fileName}</option>
                                    ))}
                                    </select>
                            </div>
                        </div>


                    </div>
                </div>
            )}
        </div>
    );
};

export default AccordionForm;
