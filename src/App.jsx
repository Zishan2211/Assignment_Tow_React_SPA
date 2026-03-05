import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Customer from './Components/Customer/Customer'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/NavBar/Navbar'
import SelectedTicket from './Components/SelectedTicket/SelectedTicket'
import { Bounce, ToastContainer } from 'react-toastify'


const fetchCustomerTickets = async () => {
  const res = await fetch('/CustomerTickets.json')
  return res.json();
}
const CustomerTickets = fetchCustomerTickets();


function App() {
  const [statusCount, setStatusCount] = useState(0);
  const [taskStatus, setTaskStatus] = useState([]);
  const [resolvedCount, setResolvedCount] = useState(0);
  const [resolvedTasks, setResolvedTasks] = useState([]);

  const hendelConfrim = (payload) => {
    const filteredTask = taskStatus.filter(task => task.id !== payload.id);
    setTaskStatus(filteredTask);
    if (statusCount > 0) {
      setStatusCount(statusCount - 1);
    }
    setResolvedCount(oldTask => oldTask + 1);
    setResolvedTasks([...resolvedTasks, payload]);
  }

  return (
    <>
      <Navbar></Navbar>
      <Banner statusCount={statusCount} resolvedCount={resolvedCount}></Banner>

      <Suspense fallback={<div className="flex justify-center items-center min-h-[50vh] w-full"><span className="loading loading-bars loading-xl"></span></div>}>

        <div className="flex flex-col lg:flex-row rounded-t-3xl gap-5 max-w-300 mx-auto bg-[#F3F4F6] p-4 md:pt-14 md:pb-14">
          <Customer
            taskStatus={taskStatus}
            setTaskStatus={setTaskStatus}
            statusCount={statusCount}
            setStatusCount={setStatusCount}
            CustomerTickets={CustomerTickets}
          ></Customer>
          <SelectedTicket
            hendelConfrim={hendelConfrim}
            taskStatus={taskStatus}
            resolvedTasks={resolvedTasks}
          ></SelectedTicket>
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
        theme="colored"
        transition={Bounce} />
    </>
  )
}

export default App
