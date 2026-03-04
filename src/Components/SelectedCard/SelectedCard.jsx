import React from 'react';

const SelectedCard = () => {
    return (
        <div>
            {/* Task Status start new component waiting for implementation */}

            <div className="flex flex-wrap w-60">
                <div>
                    <h2 className="text-2xl font-bold text-[#374151]">Task Status</h2>
                    <p className="text-sm text-[#9CA3AF] mt-2 font-medium">Select a ticket to add to Task Status</p>
                </div>

                <div>
                    <h2 className="text-2xl pt-10 font-bold text-[#374151]">Resolved Task</h2>
                    <p className="text-sm text-[#9CA3AF] mt-2 font-medium">No resolved tasks yet.</p>
                </div>
            </div>
        </div>
    );
};

export default SelectedCard;