import React, { useState } from 'react';
import { Bounce, toast } from 'react-toastify';
import dateLogo from "../../assets/DateLogo.png"

const Ticket = ({ ticket, index, statusCount, setStatusCount, taskStatus, setTaskStatus }) => {

    const [isSelected, setIsSelected] = useState(false);
    const statusBg = ticket.status === "In Progress" ? "bg-yellow-500 text-white" : "bg-green-400 text-black";
    const priorityColor =
        ticket.priority === "High PRIORITY" ? "text-red-600" :
            ticket.priority === "Medium PRIORITY" ? "text-green-600" :
                ticket.priority === "Low PRIORITY" ? "text-yellow-600" : "text-gray-500";

    const hendeleClick = (ticket) => {
        setIsSelected(!isSelected);
        setStatusCount(statusCount + 1);
        toast.warn('🦄Ticket Successfully In Progress', {
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
        setTaskStatus([...taskStatus, ticket])
    }

    return (
        <div key={index} >

            <button disabled={isSelected} onClick={() => {
                hendeleClick(ticket)
            }}
                className={`bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col ${isSelected === true ? 'ring-6 ring-cyan-900' : ''}`}>
                <div className="flex justify-between items-start mb-3">

                    <h3 className="font-bold text-[#111827] text-xl">{ticket.title}</h3>
                    <span className={`badge border-none px-4 py-3 font-medium gap-2 ${statusBg}`}>
                        <span className={`w-2 h-2 rounded-full ${ticket.status === "In Progress" ? 'bg-white' : 'bg-[#059669]'}`}></span>
                        {ticket.status}
                    </span>
                </div>

                <p className="text-[#6B7280] text-sm leading-relaxed mb-6">
                    {ticket.description}
                </p>

                <div className="border-t border-gray-100 pt-4 flex justify-between items-center mt-auto">
                    <div className="flex gap-4 items-center">
                        <span className="text-sm text-[#9CA3AF]">#{ticket.id}</span>
                        <span className={`text-xs font-bold uppercase ${priorityColor}`}>
                            {ticket.priority}
                        </span>
                    </div>
                    <div className="flex items-center gap-4 text-[#4B5563]">
                        <span className="text-sm font-semibold">{ticket.assignedTo}</span>
                        <span className="text-sm flex items-center gap-1">
                            <span> <img className='w-4 h-4' src={dateLogo} alt="" /> </span> {ticket.createdAt}
                        </span>
                    </div>
                </div>
            </button>
        </div>
    );
};

export default Ticket;