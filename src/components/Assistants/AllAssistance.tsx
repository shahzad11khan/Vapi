import { useEffect, useState } from "react"
import { BaseUrl } from "../../utils/BaseUrl";
import { makeApiRequest } from "../../utils/axios";
import { Assistant_Middle_Point } from "../../utils/MiddlePoint";

interface Assistant {
    AssistantName: string;
    FirstPrompt : string;
    SystemPrompt : string;
    _id : string;
    createdBy : string;
  }

    
  interface Props {
    setSellectedAssistant: React.Dispatch<React.SetStateAction<Assistant | null>>;
  }


const AllAssistant : React.FC<Props> = ({setSellectedAssistant}) => {
  const [isOpen , setIsOpen] = useState(false);
  const url = BaseUrl + Assistant_Middle_Point;
  const [assistants , setAssistants] = useState<Assistant[]>([]);
  const fetchData = async() => {
    const response = await makeApiRequest({url});
    console.log(response);
    setAssistants(response)
  }

  const handleAssistant = (id:string) => {
    const assistant = assistants.filter(el=> el._id == id);
    setSellectedAssistant(assistant[0]);
    setIsOpen(!isOpen)
  }

  useEffect(()=>{fetchData()} ,[])
  
  return (
    <div className="text-white font-semibold  border-[#1C1C1C] rounded-xl shadow mt-4">
    {/* all assintances Header */}
    <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
    >
        <h2 className="text-[12px]">All Assistant</h2>
        <span className="text-lg">{isOpen ? '−' : '+'}</span>
    </div>
    {/* Accordion Content */}
    {isOpen && (
        assistants ? assistants.map((assistant, index) => (
            <div key={index} className="mt-4">
                <p onClick={()=>handleAssistant(assistant._id)} className=" text-gray-300 mb-4 cursor-pointer hover:bg-gray-800 p-2 rounded-lg">
                    {assistant.AssistantName}
                </p>
            </div>
        ))
        :
        <p>no Assistance add </p>
    )}

    </div>
  );
}

export default AllAssistant