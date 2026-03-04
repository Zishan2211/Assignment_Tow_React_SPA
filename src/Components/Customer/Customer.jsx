import React, { use } from 'react';
import Ticket from '../Ticket/Ticket';

const Customer = ({ CustomerTickets, statusCount, setStatusCount }) => {

    const ticketsData = use(CustomerTickets);
    console.log(ticketsData);

    return (
        < div className="flex-1" >
            <h2 className="text-3xl font-bold text-[#374151] mb-8">Customer Tickets</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {
                    ticketsData.map((ticket, index) => <Ticket setStatusCount={setStatusCount} statusCount={statusCount} key={index} ticket={ticket} />
                    )
                }

            </div>
        </div >
    );
};

export default Customer;