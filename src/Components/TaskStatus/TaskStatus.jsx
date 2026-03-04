import React from 'react';
import { Bounce, toast } from 'react-toastify';

const TaskStatus = ({ task }) => {

    const hendelConfrim = () =>{
        toast.warn('Task Completed Successfully', {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        })
    }
    
    return (
        <div>
            <div className="w-full max-w-sm bg-white rounded-xl mt-5 shadow-sm border border-gray-100 p-4 md:p-5">
                <h3 className="text-base md:text-lg font-bold text-slate-800 leading-tight">
                    {task.title}
                </h3>
                <button onClick={()=>{hendelConfrim ()}} className="w-full mt-5 bg-[#00A843] hover:bg-[#05701a] text-white font-semibold py-2.5 rounded-lg md:text-base">
                    Complete
                </button>
            </div>
        </div>
    );
};

export default TaskStatus;