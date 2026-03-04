import React from 'react';

const TaskStatus = ({ task }) => {
    
    return (
        <div>
            <div className="w-full max-w-sm bg-white rounded-xl mt-5 shadow-sm border border-gray-100 p-4 md:p-5">
                <h3 className="text-base md:text-lg font-bold text-slate-800 leading-tight">
                    {task.title}
                </h3>
                <button className="w-full mt-5 bg-[#00A843] hover:bg-[#05701a] text-white font-semibold py-2.5 rounded-lg md:text-base">
                    Complete
                </button>
            </div>
        </div>
    );
};

export default TaskStatus;