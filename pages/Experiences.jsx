

import { useState } from "react";
import { workList } from "../components/data";

const Experiences = () => {
    const [activeTab, setActiveTab] = useState(workList[0]?.id || "");

    return (
        <div className="py-36 text-white flex flex-col items-center gap-y-7 ">
            <div className="flex items-center gap-x-5 lg:pl-50">
                <div className="text-lg md:text-2xl lg:text-3xl  font-bold">
                    <span className="pr-1 text-green-400 font-mono">{"> "}02.</span>
                    Experience
                </div>
                <div className="w-32 md:w-44 lg:w-72 h-0.5 bg-white"></div>
            </div>
            <div className=" flex flex-col md:flex-row">
                {/* Button List - Row on small, Column on Medium+ */}
                <div className="flex flex-row md:flex-col mx-auto
                border-b md:border-b-0 md:border-r">
                    {workList.map((list) => (
                        <button
                            key={list.id}
                            onClick={() => setActiveTab(list.id)}
                            className={`px-4 py-2 text-sm md:text-lg font-medium transition-colors 
                                cursor-pointer
                                ${activeTab === list.id
                                    ? "border-b-2 md:border-b-0 md:border-r-2 bg-gray-500 rounded-sm border-amber-400 text-amber-400"
                                    : "text-gray-500 hover:text-gray-700"
                                }`}
                        >
                            {list.name}
                        </button>
                    ))}
                </div>

                {/* Content Section */}

                <div className="mt-4 md:mt-0 md:ml-4">
                    {workList.map((list) =>
                        activeTab === list.id && (
                            <div key={list.id} className="p-4">
                                <div>
                                    <p className="text-lg font-medium">{list.description}</p>
                                    {list.time && (
                                        <p className="text-amber-300 text-sm">
                                            {list.time}
                                        </p>
                                    )}
                                </div>
                                {list.story && (
                                    <div className="text-sm text-gray-400 pt-5 md:pl-7 text-justify">
                                        {list.story.map((point, index) => (
                                            <p key={index}>
                                                <span className="text-green-400">{"> "}</span>
                                                {point}
                                            </p>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )
                    )}
                </div>

            </div>
        </div>
    );
};

export default Experiences;

