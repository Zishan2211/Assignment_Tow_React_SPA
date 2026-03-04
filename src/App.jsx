import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Customer from './Components/Customer/Customer'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/NavBar/Navbar'
import SelectedTicket from './Components/SelectedTicket/SelectedTicket'
import { Bounce, ToastContainer } from 'react-toastify'


const fetchCustomerTickets = async () => {
  const res = await fetch('/public/CustomerTickets.json')
  return res.json();
}
const CustomerTickets = fetchCustomerTickets();


function App() {
  const [statusCount, setStatusCount] = useState(0);
  const [taskStatus, setTaskStatus] = useState([]);




  return (
    <>
      <Navbar></Navbar>
      <Banner statusCount={statusCount}></Banner>

      <Suspense fallback={<div className="flex justify-center items-center min-h-[50vh] w-full">
        <span className="loading loading-bars loading-xl"></span>
      </div>}>
        <div className="flex flex-col lg:flex-row gap-5 max-w-300 mx-auto bg-[#F3F4F6] p-4 md:pt-25">
          <Customer
            taskStatus={taskStatus}
            setTaskStatus={setTaskStatus}
            statusCount={statusCount}
            setStatusCount={setStatusCount}
            CustomerTickets={CustomerTickets}
          ></Customer>
          <SelectedTicket taskStatus={taskStatus}></SelectedTicket>
        </div>
      </Suspense>

      <Footer></Footer>
      <ToastContainer position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce} />
    </>
  )
}

export default App
