import React, { useState } from 'react';

const Ticket = ({ ticket, index, statusCount, setStatusCount, taskStatus, setTaskStatus }) => {

    const [isSelected, setIsSelected] = useState(false);

    const hendeleClick = (ticket) => {
        setIsSelected(!isSelected);
        setStatusCount(statusCount + 1);

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
                    <span className="badge bg-[#6EE7B7] text-[#065F46] border-none px-4 py-3 font-medium gap-2">
                        <span className="w-2 h-2 bg-[#059669] rounded-full"></span> {ticket.status}
                    </span>
                </div>

                <p className="text-[#6B7280] text-sm leading-relaxed mb-6">
                    {ticket.description}
                </p>

                <div className="border-t border-gray-100 pt-4 flex justify-between items-center mt-auto">
                    <div className="flex gap-4 items-center">
                        <span className="text-sm text-[#9CA3AF]">#{ticket.id}</span>
                        <span className="text-xs font-bold text-[#EF4444] uppercase">{ticket.priority}</span>
                    </div>
                    <div className="flex items-center gap-4 text-[#4B5563]">
                        <span className="text-sm font-semibold">{ticket.assignedTo}</span>
                        <span className="text-sm flex items-center gap-1">
                            <span> 📅 </span> {ticket.createdAt}
                        </span>
                    </div>
                </div>
            </button>
        </div>
    );
};

export default Ticket;