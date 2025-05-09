import { useNavigate } from 'react-router-dom';
import TopBar from '../Reuseable/TopBar';
import { BaseUrl } from '../../utils/BaseUrl';
import { File_Middle_point } from '../../utils/MiddlePoint';
import { makeApiRequest } from '../../utils/axios';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';


interface FileItem {
    pdfFile: {
      fileName: string;
      path: string;
    };
    createdBy: string;
  }

const Files = () => {
    const navigate = useNavigate();
    const [files , setFiles] = useState<FileItem[]>([]);

    const fetchData = async() => {
        const url = BaseUrl + File_Middle_point;
        const response = await makeApiRequest({url});
        if(response.message){
            setFiles(response.files);
        }
    }

    useEffect(()=>{
        fetchData();
    } ,[])

    const handleCreateWorkflow = () => {
        navigate('/create-tool'); // Update to your target route
    };

    const handleTalk = () => {
        console.log('Talk to Assistant');
      };
    
      const handlePublish = () => {
        console.log('Publish clicked');
      }
    
      const handleChange = async(event : React.FormEvent) => {
        event.preventDefault();
        const {name , files} = event.target as HTMLInputElement;
        if (files){
        console.log(name , files[0]);
        const formData = new FormData;
        formData.append(name , files[0]);
        const url = BaseUrl + File_Middle_point;
        const method = "POST";
        const contentType = "multipart/form-data";
        const response = await makeApiRequest({url , method , data:formData , contentType });
        if (response.warning){
            toast.warning(response.warning);
        }else if(response.message){
            toast.success(response.message);
        }else if(response.error){
            toast.error(response.error);
        }
        console.log(response);
        }
      }

    return (
        <div className="w-full px-6 py-4">
           <TopBar
              title="Files"
              buttons={[
                { label: 'Talk to Assistant', onClick: handleTalk, variant: 'secondary' },
                { label: 'Publish', onClick: handlePublish, variant: 'primary' },
              ]}
            />

            <div className="w-full flex justify-between mt-4 md:mt-0">
                <ul className='text-white'>
                    {files?.map((file  , index)=>
                    <li className='p-2 bg-[#1C1C1C] mt-2 rounded-lg flex gap-5' key={index}>
                        {/* <iframe src={`http://localhost:5000/file/${file.pdfFile.fileName}`} width="100%" height="200px"></iframe> */}
                        <b className=''>{index+=1}</b>  <p className='font-100 text-[16px]'>{file.pdfFile.fileName}</p>
                    </li>
                    )}
                </ul>
                <div>
                    <div className="relative w-full md:w-64 lg:w-[326px]">
                        <input
                        type="text"
                        placeholder="Search by user roles"
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#55761C]"
                        />
                        <img
                        src="/search-icon.png" 
                        alt="Search"
                        className="absolute left-3 top-2.5 w-5 h-5 opacity-60"
                        />
                    </div>
                    {/* Right Card */}
                    <div className="bg-[#1C1C1C] rounded-xl p-8 w-[326px] text-center shadow-md mt-5">
                        <p className="text-gray-400 mb-6">
                            Workflows is now available to all Vapi users in Open Beta. Please check out the docs here.
                        </p>
                        <button
                            onClick={handleCreateWorkflow}
                            className="px-6 py-2 bg-[#55761C] text-white rounded-lg hover:bg-[#6e9a27] transition"
                        >
                            Create New Tool
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-center">
            <div className="p-4 text-center shadow-md mt-5 w-[326px]">
                <button onClick={handleCreateWorkflow} className='w-full'>
                    <div className="flex flex-col items-center border border-dotted border-gray-600 rounded-lg p-4">
                        <img
                            src="/file.png"
                            alt="Add Tool"
                            className="w-12 h-12 mx-auto mb-4 hover:scale-105 transition-transform duration-200 cursor-pointer"
                        />
                        <p>No properties configured. Click "Add Property" to add your first property</p>
                    </div>
                </button>
                <h2 className="text-xl font-semibold my-4">Files</h2>
                <p className="text-gray-400 mb-6">
                    No files uploaded yet
                    You can upload PDFs and other file types to provide additional context for your assistants during conversations.    </p>

                {/* Choose a File Button */}
                <label className="inline-block bg-[#55761C] text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-[#6e9a27] transition w-full">
                    Choose a File
                    <input type="file" name='pdfFile' onChange={ handleChange } className="hidden" />
                </label>
            </div>
</div>
        </div>
    );
};

export default Files;
