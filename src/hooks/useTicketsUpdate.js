import { updateTicket } from "../Api/ticket";
import { useState } from "react";

const useTicketUpdateHook = (fetchTickets) => {

    const [selectCurrTicket, setSelectCurrTicket] = useState({})
    const [ticketUpdateModal, setTicketUpdateModal] = useState(false)
  
    const editTicket = (ticketDetail) => {
      // console.log(ticketDetail);
      setTicketUpdateModal(true)
      setSelectCurrTicket(ticketDetail)
    };
  
    const closeTicketUpdateModal = () => {
      setTicketUpdateModal(false)
    }
  
    const onTicketUpdate = (e) => {
      
      const fieldName = e.target.name;
  
      if (fieldName === "title") {
        selectCurrTicket.title = e.target.value;
      }
      else if (fieldName === "ticketPriority") {
        selectCurrTicket.ticketPriority = e.target.value;
      }
      else if (fieldName === "description") {
        selectCurrTicket.description = e.target.value;
      }
      else if (fieldName === 'status') {
        selectCurrTicket.status = e.target.value;
      }
      else if (fieldName === "assignee") {
        selectCurrTicket.assignee = e.target.value;
      }
  
      setSelectCurrTicket({ ...selectCurrTicket })
    }
  
    const onDeleteFn=()=>{
       fetchTickets();
    }
    const updateTicketFn = (e) => {
      e.preventDefault();
  
      updateTicket(selectCurrTicket).then((res) => {
        console.log("Ticket update successfully");
        setTicketUpdateModal(false);
        fetchTickets();
      })
        .catch(err => {
          console.log(err.message);
        })
    }
  
    return { editTicket, selectCurrTicket,onDeleteFn, ticketUpdateModal, closeTicketUpdateModal, updateTicketFn, onTicketUpdate }
  
  }

  export default useTicketUpdateHook