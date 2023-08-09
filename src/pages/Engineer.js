import { useContext } from "react";
import TicketsTable from "../MaterialTable/ticketsTable";
import PieChart from "../components/PieChart/PieChart";
import Sidebar from "../components/Sidebar";
import TicketUpdateModal from "../components/TicketUpdateModal/TicketUpdateModal";
import StatusDashboard from "../components/statusDashboard/statusDashboard";
import useFetchTicket from "../hooks/fetchTickets";
import useTicketUpdateHook from "../hooks/useTicketsUpdate";
import { ThemeContext } from "../App";

function Engineer() {

  const [ticketDetails, fetchTickets] = useFetchTicket()
  const { editTicket, selectCurrTicket, ticketUpdateModal, closeTicketUpdateModal, updateTicketFn, onTicketUpdate } = useTicketUpdateHook(fetchTickets)

  const { theme } = useContext(ThemeContext)

  return (
    <div className={(theme === "light") ? " bg-dark text-white" : "  text-black"} >
      <div className="row">
        <div className="col-1"></div>
        <Sidebar />
      </div>
      <div className="col my-4">
        <div className="container">
          <StatusDashboard ticketDetails={ticketDetails} />
          <TicketsTable ticketDetails={ticketDetails} title={"TICKETS ASSIGNED TO YOU..."} editTicket={editTicket} />
          <TicketUpdateModal
            ticketUpdateModal={ticketUpdateModal}
            closeTicketUpdateModal={closeTicketUpdateModal}
            updateTicketFn={updateTicketFn}
            selectCurrTicket={selectCurrTicket}
            onTicketUpdate={onTicketUpdate}
          />
        </div>
        <div >
          <PieChart ticketDetails={ticketDetails} />
        </div>
      </div>
    </div>
  )
}

export default Engineer;