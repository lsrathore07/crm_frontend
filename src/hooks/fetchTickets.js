import { useState, useEffect } from "react";
import { getAllTickets } from "../Api/ticket";

const useFetchTicket = () => {
    const [ticketDetails, setTicketDetails] = useState([]);
    useEffect(() => { fetchTickets() }, [])
  
  
    const fetchTickets = () => {
      getAllTickets()
        .then((res) => {
          setTicketDetails(res.data);
          // updateTicketsCount(res.data);
           console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    return  [ticketDetails,fetchTickets]
  }
  
  export default useFetchTicket;