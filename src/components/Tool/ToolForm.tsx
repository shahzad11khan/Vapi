import { useState } from "react";
const ToolForm = () => {
    const [isOn, setIsOn] = useState(false);

    return (

        <div className="w-full px-6 py-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <h1 className="text-2xl font-semibold text-white">Function Tool</h1>
                <div className="flex gap-4">
                    <button className="bg-[#1C1C1C] text-white px-5 py-2 rounded-lg hover:bg-[#333] transition">
                        Talk to Assistant
                    </button>
                    <button
                        className="bg-[#55761C] text-white px-5 py-2 rounded-lg hover:bg-[#446013] transition"
                    >
                        Publish
                    </button>
                </div>
            </div>

            <div>
                <div className="w-4/12 text-center shadow-md mt-5">
                    <label className="text-gray-300 mb-2 flex" htmlFor="toolName">
                        Tool Name
                    </label>
                    <input
                        type="text"
                        id="toolName"
                        className="w-full px-4 py-2 rounded-lg bg-[#2C2C2C] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#55761C]"
                        placeholder="Enter tool name"
                        required
                    />


                </div>
                <div className="w-full text-center shadow-md mt-5">
                    <label className="text-gray-300 mb-2 flex" htmlFor="description ">
                        Description
                    </label>
                    <textarea
                        id="description"
                        className="w-full px-4 py-2 rounded-lg bg-[#2C2C2C] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#55761C]"
                        placeholder="Enter tool description"
                        required
                    />
                </div>

                <div>
                    <label className="text-gray-300" htmlFor="description ">
                        Options
                    </label>
                    <div className="w-full text-center shadow-md mt-2 bg-[#2C2C2C] p-4 rounded-xl border border-gray-600">
                        <div className="flex justify-between items-center w-full">
                            <span className=" text-white text-sm">Tool executes asynchronously</span>

                            <button
                                onClick={() => setIsOn(!isOn)}
                                className={`w-14 h-8 flex items-center rounded-full p-1 duration-300 ease-in-out ${isOn ? "bg-[#55761C]" : "bg-gray-300"
                                    }`}
                            >
                                <div
                                    className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${isOn ? "translate-x-6" : ""
                                        }`}
                                ></div>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <label className="text-gray-300" htmlFor="description ">
                        Strict
                    </label>
                    <div className="w-full text-center shadow-md mt-2 bg-[#2C2C2C] p-4 rounded-xl border border-gray-600">
                        <div className="flex justify-between items-center w-full">
                            <span className=" text-white text-sm">Enforces strict parameter validation</span>

                            <button
                                onClick={() => setIsOn(!isOn)}
                                className={`w-14 h-8 flex items-center rounded-full p-1 duration-300 ease-in-out ${isOn ? "bg-[#55761C]" : "bg-gray-300"
                                    }`}
                            >
                                <div
                                    className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${isOn ? "translate-x-6" : ""
                                        }`}
                                ></div>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-full shadow-md mt-2 bg-[#2C2C2C] p-4 rounded-xl border border-gray-600">
                    <p className="">Strict</p>
                    <div className="flex justify-between items-center w-full">
                        <span className=" text-white text-sm">Tool executes asynchronously</span>

                        <button
                            onClick={() => setIsOn(!isOn)}
                            className={`w-14 h-8 flex items-center rounded-full p-1 duration-300 ease-in-out ${isOn ? "bg-[#55761C]" : "bg-gray-300"
                                }`}
                        >
                            <div
                                className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${isOn ? "translate-x-6" : ""
                                    }`}
                            ></div>
                        </button>
                    </div>
                    <div>
                        <p className="flex">Properties</p>
                        <div className="h-[70px] w-full border-2 border-gray-600 border-dotted mt-1 flex justify-center items-center bg-[#1C1C1C]">
                            <p className="">No properties configured. Click "Add Property" to add your first property</p>
                        </div>
                    </div>
                    <div>
                        <p>Server Settings</p>
                        <label htmlFor="serverUrl" className="text-[8px]">Server URL</label>
                        <input type="text" name="serverUrl" className="w-full shadow-md mt-2 h-8 bg-[#1C1C1C] p-4 rounded border border-[#86B535]" />
                    </div>
                    <div className="flex gap-2 ">
                        <div className="w-7/12">         
                               <label htmlFor="SecretToken" className="text-lg">Secret TokenL</label>
                            <input type="password" name="SecretToken" className="w-full shadow-md mt-2 h-8 bg-[#2C2C2C] p-4 rounded border border-gray-600" placeholder="******************" />
                        </div>
                        <div className="w-5/12">                    <label htmlFor="Timeout (seconds)" className="text-lg">Timeout (seconds)</label>
                            <input type="text" name="Timeoutseconds" className="w-full shadow-md mt-2 h-8 bg-[#2C2C2C] p-4 rounded border border-gray-600" placeholder="69"/>
                        </div>
                    </div>
                </div>

                <div className="py-3">
                    <div className="flex justify-between items-center w-full">
                        <span className=" text-white text-lg">HTTP Headers</span>
                    </div>
                    <div>
                        <p className="text-sm">Custom HTTP headers to include in API requests to your server</p>
                        <div className="h-[70px] w-full border-2 border-gray-600 border-dotted mt-1 flex justify-center items-center bg-[#1C1C1C]">
                            <p className="">No properties configured. Click "Add Property" to add your first property</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="flex justify-between items-center w-full">
                        <span className=" text-white text-lg">Messages</span>
                    </div>
                    <div>
                        <p className="text-sm">Custom HTTP headers to include in API requests to your server</p>
                        <div className="h-[70px] w-full border-2 border-gray-600 border-dotted mt-1 flex justify-center items-center bg-[#1C1C1C]">
                            <p className="">No properties configured. Click "Add Property" to add your first property</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ToolForm;
