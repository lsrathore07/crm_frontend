import React, { useContext, useEffect } from "react";
import Sidebar from "../components/Sidebar";
// import { updateTicket } from "../Api/ticket";
// import { updateUser } from "../Api/user";
import TicketsTable from "../MaterialTable/ticketsTable";
import UserTable from "../MaterialTable/usersTable";
import StatusDashboard from "../components/statusDashboard/statusDashboard";
import useFetchTicket from "../hooks/fetchTickets";
import useFetchUsers from "../hooks/fetchUsers";
import useTicketUpdateHook from "../hooks/useTicketsUpdate";
import useUsersUpdateHook from "../hooks/useUserUpdate";
import TicketUpdateModal from "../components/TicketUpdateModal/TicketUpdateModal";
import UserUpdateModal from "../components/UserUpdateModal/UserUpdateModal";
import { useLocation } from "react-router-dom";
import PieChart from "../components/PieChart/PieChart";
import { ThemeContext } from "../App";
import PieChartUsersCount from "../components/PieChart/PieChartUsersCount";


function Admin() {
  // const userName = localStorage.getItem("name");
  // const [ticketDetails, setTicketDetails] = useState([]);
  // const [userDetails, setUserDetails] = useState([]);
  // upper three line not needed after making hooks

  const {theme}=useContext(ThemeContext);


  const location=useLocation();

  const [ticketDetails, fetchTickets] = useFetchTicket()
  const [userDetails] = useFetchUsers()

  const { editTicket, selectCurrTicket, ticketUpdateModal, closeTicketUpdateModal, updateTicketFn, onTicketUpdate } = useTicketUpdateHook(fetchTickets)
  const { selectCurrUser, setUserAndOpenModal,closeUserUpdateModal, updateUserFn, changeUserDetails, editUser, userUpdateModal } = useUsersUpdateHook()
  
  useEffect(()=>{

    const pathName=location.pathname;
    const userId=pathName.split("/")[2]

    if(!userId){
      return;
    }

    const user=userDetails.find((user)=>user.userId===userId);
    console.log(user)
    if(!user){
      return
    }
    
    setUserAndOpenModal(user);

  },[userDetails])
 
  return (
    <div className={(theme==="light")?" bg-dark text-white":"  text-black"}>
      <div className="row">
        <div className="col-1"></div>
        <Sidebar />
      </div>
      <div className="col my-4 text-light">
        <div className="container">
          <StatusDashboard ticketDetails={ticketDetails} />

          <div style={{ maxWidth: "100%" }} className="m-2" >
          <UserTable editUser={editUser} title={"USER RECORDS"} userDetails={userDetails} />
            <UserUpdateModal  
            userUpdateModal={userUpdateModal} 
            closeUserUpdateModal={closeUserUpdateModal}
            updateUserFn={updateUserFn}
            selectCurrUser={selectCurrUser}
            changeUserDetails={changeUserDetails}
            />
            
           
          </div>
          <hr />
          <div style={{ maxWidth: "100%" }} className="m-2" >
            <TicketsTable editTicket={editTicket} fetchTickets={fetchTickets} title={"TICKET RECORDS"} ticketDetails={ticketDetails}/>
            <TicketUpdateModal 
            ticketUpdateModal={ticketUpdateModal} 
            closeTicketUpdateModal={closeTicketUpdateModal}
            updateTicketFn={updateTicketFn}
            selectCurrTicket={selectCurrTicket}
            onTicketUpdate={onTicketUpdate}
            />
          </div>
          <div className="row">
            <div className="col-xs-25 col-lg-6 col-md-10 my-2">
            <PieChart  ticketDetails={ticketDetails}/>
            </div>
            <div className="col-xs-25 col-lg-6 col-md-10 my-2">
            <PieChartUsersCount userDetails={userDetails}/> 
            </div>
           
            
            
            </div>
        </div>
      </div>
    </div>
  );
}



export default Admin;
