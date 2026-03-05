import React from 'react';
import { Bounce, toast } from 'react-toastify';

const TaskStatus = ({ task, hendelConfrim }) => {

    const hendelResolve = () => {
        hendelConfrim(task);
        toast.success(`'${task.title}' Finaly Solved!`, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
            transition: Bounce,
        })
    }

    return (
        <div>
            <div className="w-full max-w-sm bg-white rounded-xl mt-5 shadow-sm border border-gray-100 p-4 md:p-5">
                <h3 className="text-base md:text-lg font-bold text-slate-800 leading-tight">
                    {task.title}
                </h3>
                <button onClick={hendelResolve} className="w-full mt-5 bg-[#00A843] hover:bg-[#05701a] text-white font-semibold py-2.5 rounded-lg md:text-base">
                    Complete
                </button>
            </div>
        </div>
    );
};

export default TaskStatus;