import "../components/button/Btn.css"
import { useContext, useEffect } from "react";
import TicketsTable from "../MaterialTable/ticketsTable";
import Sidebar from "../components/Sidebar";
import TicketUpdateModal from "../components/TicketUpdateModal/TicketUpdateModal";
import StatusDashboard from "../components/statusDashboard/statusDashboard";
import useFetchTicket from "../hooks/fetchTickets";
import useTicketUpdateHook from "../hooks/useTicketsUpdate";
import TicketCreationModal from "../components/TicketCreationModal/TicketCreationModal";
import useCreateTicket from "../hooks/useCreateTicket";
import { useLocation } from "react-router-dom";
import PieChart from "../components/PieChart/PieChart";
import { ThemeContext } from "../App";

function Customer() {
 
  const location=useLocation();
 
  const {theme}=useContext(ThemeContext)

  useEffect(()=>{
   const path=location.pathname;

   const isCreateTicketTrue = path.split("/")[2]==="createTicket";

   if(isCreateTicketTrue){
    openCreateTicketModal()

   }
  },[])
  //   const updateTicketsCount = (tickets) => {
  //     const ticketsCount = createTicketsCount(tickets)
  //     setTicketStatusCount({ ...ticketsCount });
  //   };
  // const [ticketStatusCount, setTicketStatusCount] = useState({});
  const [ticketDetails,fetchTickets]=useFetchTicket()
  const { editTicket, selectCurrTicket, ticketUpdateModal, closeTicketUpdateModal, updateTicketFn, onTicketUpdate } = useTicketUpdateHook(fetchTickets)
  const {openCreateTicketModal,closeCreateTicketModal,createTicketModal}=useCreateTicket()

      return (
        <div className={(theme==="light")?" bg-dark text-white":"  text-black"} >
      <div className="row">
        <div className="col-1"></div>
        <Sidebar />
      </div>
      <div className="col my-4">
      <div className="container">
      <StatusDashboard ticketDetails={ticketDetails}/>
       <input className="button m-4 p-3 " type="submit" value="Raise Ticket" onClick={openCreateTicketModal}/>
       <TicketCreationModal show={createTicketModal} onClose={closeCreateTicketModal}/>
        
        <TicketsTable ticketDetails={ticketDetails} title={"TICKETS RAISED BY YOU..."} editTicket={editTicket}/>
        <TicketUpdateModal
            ticketUpdateModal={ticketUpdateModal} 
            closeTicketUpdateModal={closeTicketUpdateModal}
            updateTicketFn={updateTicketFn}
            selectCurrTicket={selectCurrTicket}
            onTicketUpdate={onTicketUpdate}
            />
            <br/>
            
            <PieChart ticketDetails={ticketDetails}/> 
            
            
        </div>
      </div>

      
        </div>
        

  )
}

export default Customer;