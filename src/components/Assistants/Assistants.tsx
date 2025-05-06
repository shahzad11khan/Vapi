import React, { useRef, useState } from 'react';
import AccordionForm from './Accordion';
import Accordion from '../Reuseable/Accordion';
import AssistantForm from './AssistantForm';
import AssistantForm1 from './AssitantsForm1';
import AssistantForm2 from './AssistantForm2';
import AssistantForm3 from './AssistantForm3';
import AssistantForm4 from './AssistantForm4';
import AssistantForm5 from './AssistandForm5';
import AssistantForm6 from './AssistandForm6';
import AssistantForm7 from './AssistandForm7';
import AssistantForm8 from './AssistandForm8';
import AssistantForm9 from './AssistandDorm9';
import AssistantForm10 from './AssistandForm10';
import AssistantForm11 from './AssistandForm11';
import AssistantForm12 from './AssistandForm12';
import AssistantForm13 from './AssistantForm13';
import AssistantForm14 from './AssistantForm14';
import TopBar from '../Reuseable/TopBar';
import { BaseUrl } from '../../utils/BaseUrl';
import { Assistant_Middle_Point, Chat_Middle_Point} from '../../utils/MiddlePoint';
import { makeApiRequest } from '../../utils/axios';
import { toast } from 'react-toastify';
import AllAssistant from './AllAssistance';

  interface SpeechRecognitionEvent extends Event {
    readonly resultIndex: number;
    readonly results: SpeechRecognitionResultList;
}


declare global {
    interface Window {
        webkitSpeechRecognition: any;
        SpeechRecognition: any;
        mozSpeechRecognition: any;
        msSpeechRecognition: any;
    }
}

interface Assistant {
    AssistantName: string;
    FirstPrompt : string;
    SystemPrompt : string;
    _id : string;
    createdBy : string;
  }

const Assistants: React.FC = () => {

    const [selectedCategory, setSelectedCategory] = useState('Model');
    const [ boxView , setBoxView] = useState(false);
    const [sellectedAssistant, setSellectedAssistant] = useState<Assistant | null>(null);
    const [AssistantFormData , setAssistantForm] = useState({
        AssistantName:"",
        FirstPrompt:"",
        SystemPrompt:""
    });
    const [speak , setSpeak] = useState(false);
    const [start , setStart] = useState(false);

    const uri = BaseUrl + Assistant_Middle_Point;
    
    const synth = window.speechSynthesis;
    
      const finalTranscriptRef = useRef('');

    const recognition = new(
        window.SpeechRecognition ||
        window.webkitSpeechRecognition ||
        window.mozSpeechRecognition ||
        window.msSpeechRecognition)();

    recognition.interimResults = true;
    const categories = ['Model', 'Deepgram', 'GPT-4.0', 'Tools', 'Analysis', 'Advanced'];
    const items = [
        {
            image: '/red.png', // Replace with actual image path
            name: 'Vapi Fored Cost',
        },
        {
            image: '/oringe.png',
            name: 'vapi',
        },
        {
            image: '/purple.png',
            name: 'web',
        },
        {
            image: '/blue.png',
            name: 'Deepgram',
        },
    ];

    const speakText = (speakText:string) => {
        if (synth.speaking) synth.cancel();
        const utterance = new SpeechSynthesisUtterance(speakText);
        utterance.lang = 'en-US';
    
        utterance.onend = () => {
            finalTranscriptRef.current ='';
            recognition.start();
          };
    
        synth.speak(utterance);
      };

    const handleTalk = () => {
        if(!sellectedAssistant) {
            return toast.warning("you won't  select assistant ")
        }
        setStart(true);
        const { FirstPrompt } =(sellectedAssistant);
        speakText(FirstPrompt);
      };

    const handleStopTalk = () => {
        if(start && !speak) {
            synth.cancel()
        }else{
         recognition.stop(); 
        } 
        setStart(false);
    }

      recognition.onstart = () => {
        console.log("start")
        // finalTranscriptRef.current = '';
        setSpeak(true);
      };

      recognition.onend = async() => {
        console.log('stop')
        setSpeak(false);
        const finalText = finalTranscriptRef.current.trim();
        if (!finalText) return;
    
        // setData((preArr) => [
        //   ...preArr,
        //   {
        //     message: finalText,
        //     type: 'user',
        //   },
        // ]);
        // setInputData('');

     if(!sellectedAssistant) {
            return toast.warning(" assistant or speaking text is messing ")
        }

        const {SystemPrompt , FirstPrompt , _id} = sellectedAssistant;
        const updateUrl = BaseUrl + Assistant_Middle_Point + `/${_id}`;
        const updateData = {FirstPrompt , SystemPrompt };
        const updateMethod = "PUT";
        const updatedResponse = await makeApiRequest({url:updateUrl , method:updateMethod , data : updateData});
        console.log(updatedResponse)

        const chatUrl = BaseUrl + Chat_Middle_Point;
        const chatMethod = "POST";
        const chatData = {finalText , SystemPrompt };
        const response = await makeApiRequest({url : chatUrl , method : chatMethod , data : chatData});
        if(response.message){
            speakText(response.geminiResponse);
        }else(response.error)(
            toast.error(response.error)
        )


        // if(updatedResponse.message){
        //     speakText(updatedResponse.geminiResponse)
        // }else if(updatedResponse.error)(
        //     toast.error(updatedResponse.error)
        // )
      }

    recognition.onresult = (event : SpeechRecognitionEvent) => {
        let interimTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscriptRef.current += transcript;
          } else {
            interimTranscript += transcript;
          }
        }
        console.log(interimTranscript)
        // setInputData(finalTranscriptRef.current + interimTranscript);
      };
    
      const handlePublish = () => {
        console.log('Publish clicked');
      };

      const handleChange =(e:React.FormEvent) => {
        e.preventDefault();
        const {name , value} = e.target as HTMLInputElement;
        setAssistantForm((preForm)=>{
            return{...preForm , [name]: value}
        })
      }



      const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault();
        const method = "POST";
        const response = await makeApiRequest({
          url: uri,
          method,
          data: AssistantFormData
        });        
        console.log(response);
        if (response?.warning) {
            toast.warn(response.warning);
        } else if (response?.message) {
            toast.success(response.message);
            setBoxView(false)
            setAssistantForm({
                AssistantName:"",
                FirstPrompt:"",
                SystemPrompt:""
            }) 
        } else if (response?.err) {
            toast.error(response.err);    
        }
      }

    return (
        <div className="w-full px-6 py-4 relative ">
            {/* create assistance toggle form */}
            {boxView && 
                <div className='h-[100vh] backdrop-blur-[5px] bg-white/1 p-10 top-0 left-[21%] fixed w-[80%] z-50'>
                <form onSubmit={handleSubmit} className='border-[2px] border-[#1c1c1c79] bg-black rounded-2xl w-[400px] fixed p-5 flex flex-col gap-3 top-[50%] left-[40%] -translate-[50%] ' >
                    <div className='flex flex-col'>
                        <label htmlFor="assistantName" className="text-[12px] mb-1">Assistant Name</label>
                        <input 
                        type="text" 
                        className="p-2 rounded bg-[#1C1C1C] border border-gray-700 text-white" 
                        name="AssistantName" id="" value={AssistantFormData.AssistantName} 
                        onChange={handleChange}
                        required
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="firstPrompt" className="text-[12px] mb-1">First Prompt</label>
                        <input 
                        type="text" 
                        className="p-2 rounded bg-[#1C1C1C] border border-gray-700 text-white"
                        name="FirstPrompt" id="" value={AssistantFormData.FirstPrompt}
                        onChange={handleChange}
                        required 
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="systemPrompt" className="text-[12px] mb-1">System Prompt</label>
                        <textarea 
                        className="p-2 rounded bg-[#1C1C1C] border border-gray-700 text-white h-[200px] resize-none overflow-y-auto" 
                        name="SystemPrompt" 
                        id="" value={AssistantFormData.SystemPrompt}
                        onChange={handleChange}
                        required 
                        />
                    </div>
                    <div className='flex justify-between'>
                    <button type='submit'  className="cursor-pointer bg-[#55761C] text-white px-5 py-2 rounded-lg hover:bg-[#446013] transition mt-2">
                        Save Assistant
                    </button>
                    <button onClick={()=> setBoxView(false)} className="cursor-pointer bg-[#55761C] text-white px-5 py-2 rounded-lg hover:bg-[#446013] transition mt-2">
                        Cancel
                    </button> 
                    </div>
                </form>
                </div>
                }
            <TopBar
            title="Assistants"
            buttons={[            
                !start ?
                { label: `${start ? !speak ? 'Speaking' :'Listining' : 'Talk to Assistant'}`, onClick: handleTalk, variant: 'secondary' }
                :
                { label : 'Stop Assistant', onClick: handleStopTalk , variant: 'secondary'},
                { label: 'Publish', onClick: handlePublish, variant: 'primary' },
            ]}
            />

            <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-300 mt-6 pb-4">
                {/* Radio Buttons */}
                <div className="flex flex-wrap gap-4">
                    {categories.map((category) => (
                        <label key={category} className="flex items-center gap-2 cursor-pointer text-white">
                            <input
                                type="radio"
                                name="category"
                                value={category}
                                checked={selectedCategory === category}
                                onChange={() => setSelectedCategory(category)}
                                className="accent-[#55761C]"
                            />
                            <span className="text-sm">{category}</span>
                        </label>
                    ))}
                </div>

                {/* Search Box */}
                <div className="relative mt-4 md:mt-0 w-full md:w-64">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#55761C]"
                    />
                    <img
                        src="/search-icon.png" // Replace with your image path
                        alt="Search"
                        className="absolute left-3 top-2.5 w-5 h-5 opacity-60"
                    />
                </div>
            </div>

           

            <div className="flex gap-6 mt-3">
                {items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                        {/* Image */}
                        <img
                            src={item.image}
                            alt={`Image ${idx + 1}`}
                            className="w-5 h-5 object-cover rounded-full"
                        />

                        <span
                            className=" text-white px-3 py-1 rounded-full text-[12px] font-medium"
                        >
                            {item.name}
                        </span>

                    </div>
                ))}
            </div>
            <div className="flex w-full gap-4 mt-2">
                <div className="w-[80%]">
                    {/* <p className="text-white font-semibold border-2 border-[#1C1C1C] p-4 rounded-xl shadow">Riley</p> */}
                    <div className="text-white font-semibold border-2 border-[#1C1C1C] p-4 rounded-xl shadow mt-2">
                        <AllAssistant setSellectedAssistant={setSellectedAssistant} />
                    </div>
                    <div className='flex text-white mt-2 gap-2 text-[12px]'>
                        <img
                            src={'/red.png'}
                            alt={`Image `}
                            className="w-5 h-5 object-cover rounded-full"
                        />
                        Model
                    </div>
                    <div className="text-white font-semibold border-2 border-[#1C1C1C] p-4 rounded-xl shadow mt-2">
                        <AccordionForm sellectedAssistant={sellectedAssistant} setSellectedAssistant={setSellectedAssistant} />
                    </div>
                    <div className="text-white font-semibold border-2 border-[#1C1C1C] p-4 rounded-xl shadow mt-2">
                        <Accordion title="TRANSCRIBER" description="Configure the behaviour of the assistant">
                            <AssistantForm />
                        </Accordion>
                    </div>
                    <div className="text-white font-semibold border-2 border-[#1C1C1C] p-4 rounded-xl shadow mt-2">
                        <Accordion title="TRANSCRIBER" description="Configure the behaviour of the assistant">
                            <AssistantForm1 />
                        </Accordion>
                    </div>
                    <div className="text-white font-semibold border-2 border-[#1C1C1C] p-4 rounded-xl shadow mt-2">
                        <Accordion title="TRANSCRIBER" description="Configure the behaviour of the assistant">
                            <AssistantForm2 />
                        </Accordion>
                    </div>
                    <div className="text-white font-semibold border-2 border-[#1C1C1C] p-4 rounded-xl shadow mt-2">
                        <Accordion title="Tools" description="Configure the behaviour of the assistant">
                            <AssistantForm3 />
                        </Accordion>
                    </div>

                    <div className="text-white font-semibold border-2 border-[#1C1C1C] p-4 rounded-xl shadow mt-2">
                        <Accordion title="Predefined Functions" description="Configure the behaviour of the assistant">
                            <AssistantForm4 />
                        </Accordion>
                    </div>
                   
                    <div className="text-white font-semibold border-2 border-[#1C1C1C] p-4 rounded-xl shadow mt-2">
                        <Accordion title="Custom Functions" description="">
                            <AssistantForm5 />
                        </Accordion>
                    </div>

                    <div className="text-white font-semibold border-2 border-[#1C1C1C] p-4 rounded-xl shadow mt-2">
                        <Accordion title="Summary" description="">
                            <AssistantForm6 />
                        </Accordion>
                    </div>
                    <div className="text-white font-semibold border-2 border-[#1C1C1C] p-4 rounded-xl shadow mt-2">
                        <Accordion title="Success Evaluation" description="">
                            <AssistantForm7 />
                        </Accordion>
                    </div>
                    <div className="text-white font-semibold border-2 border-[#1C1C1C] p-4 rounded-xl shadow mt-2">
                        <Accordion title="Privacy" description="This section allows you to configure the privacy settings for the assistant">
                            <AssistantForm8 />
                        </Accordion>
                    </div>
                    <div className="text-white font-semibold border-2 border-[#1C1C1C] p-4 rounded-xl shadow mt-2">
                        <Accordion title="Privacy" description="This section allows you to configure the privacy settings for the assistant">
                            <AssistantForm9 />
                        </Accordion>
                    </div>
                    <div className="text-white font-semibold border-2 border-[#1C1C1C] p-4 rounded-xl shadow mt-2">
                        <Accordion title="Start Speaking Plan" description="This is the plan for when the assistant should start talking.">
                            <AssistantForm10 />
                        </Accordion>
                    </div>
                    <div className="text-white font-semibold border-2 border-[#1C1C1C] p-4 rounded-xl shadow mt-2">
                        <Accordion title="Voicemail Detection" description="Configure how the assistant detects and handles voicemail.">
                            <AssistantForm11 />
                        </Accordion>
                    </div>
                    <div className="text-white font-semibold border-2 border-[#1C1C1C] p-4 rounded-xl shadow mt-2">
                        <Accordion title="Stop Speaking Plan" description="This is the plan for when the assistant should stop talking.">
                            <AssistantForm12 />
                        </Accordion>
                    </div>
                    <div className="text-white font-semibold border-2 border-[#1C1C1C] p-4 rounded-xl shadow mt-2">
                        <Accordion title="Call Timeout Settings" description="Configure when the assistant should end a call based on silence ur duration.">
                            <AssistantForm13 />
                        </Accordion>
                    </div>
                    <div className="text-white font-semibold border-2 border-[#1C1C1C] p-4 rounded-xl shadow mt-2">
                        <Accordion title="Keypad Input Settings" description="Configure whether a user can input digits via the leypad, and when to process the input.">
                            <AssistantForm13 />
                        </Accordion>
                    </div>
                    <div className="text-white font-semibold border-2 border-[#1C1C1C] p-4 rounded-xl shadow mt-2">
                        <Accordion title="Messaging" description="Message configuration for messages that are sent to and from the assistant.">
                            <AssistantForm14 />
                        </Accordion>
                    </div>

                </div>


                {/* 20% Width Div */}
                <div className='w-[20%] flex flex-col'>
                <div className=" h-40 bg-gray-200 p-4 rounded-md shadow flex flex-col">
                    <p className="text-gray-800 font-semibold">This is the 20% width div</p>
                </div>
                    <button onClick={()=> setBoxView(true)} className="cursor-pointer bg-[#55761C] text-white px-5 py-2 rounded-lg hover:bg-[#446013] transition mt-2">
                        Create Assistant
                    </button>  
                    </div>            
            </div>
        </div>
    );
};

export default Assistants;
