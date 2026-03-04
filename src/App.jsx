import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Customer from './Components/Customer/Customer'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/NavBar/Navbar'
import SelectedTicket from './Components/SelectedTicket/SelectedTicket'


const fetchCustomerTickets = async () => {
  const res = await fetch('/public/CustomerTickets.json')
  return res.json();
}
const CustomerTickets = fetchCustomerTickets();


function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>

      <Suspense fallback={<div className="flex justify-center items-center min-h-[50vh] w-full">
        <span className="loading loading-bars loading-xl"></span>
      </div>}>
        <div className="flex flex-col lg:flex-row gap-5 max-w-300 mx-auto bg-[#F3F4F6] p-4 md:pt-25">
          <Customer CustomerTickets={CustomerTickets}></Customer>
          <SelectedTicket></SelectedTicket>
        </div>
      </Suspense>

      <Footer></Footer>
    </>
  )
}

export default App
