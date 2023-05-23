import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { getAllTickets } from "../Api/ticket";
import MaterialTable from "material-table";
import useFetchUsers from "../hooks/fetchUsers";

function Admin() {

    const userName = localStorage.getItem("name")
    const [ticketDetails, setTicketDetails] = useState({})
    const [ticketStatusCount, setTicketStatusCount] = useState({})
    const [userDetails, fetchUsers] = useFetchUsers();
    
   
    // useEffect(() => {
    //     fetchTickets();
    //     fetchUsers();
    // }, []);


    // const fetchTickets = () => {
    //     getAllTickets()
    //         .then(res => {
    //             setTicketDetails(res.data)

    //             updateTicketsCount(res.data);
    //             console.log(res.data);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }

    const updateTicketsCount = (tickets) => {

        const data = {
            pending: 0,
            closed: 0,
            progress: 0,
            blocked: 0,
        }

        tickets.forEach((ticket) => {
            if (ticket.status === "OPEN") {
                data.pending += 1
            }
            else if (ticket.status === "PROGRESS") {
                data.progress += 1
            }
            else if (ticket.status === "BLOCKED") {
                data.blocked += 1
            }
            else {
                data.closed += 1
            }
        })

        setTicketStatusCount({ ...data })
    }

    const editTickets = (ticketDetails) => {
        console.log(ticketDetails)
    }

    return (
        <div style={{
            backgroundColor: "darkslategray"
        }}>
            <div className="row">
                <div className="col-1"></div>
                <Sidebar />
            </div>
            <div className="col my-4 text-light">
                <div className="container">
                    <h2 className="m-4">Welcome {userName}</h2>
                    <p className="text-warning">Take a quick look on ur admin stats</p>
                    <div className="row">
                        <div className="col-xs-12 col-lg-3 col-md-6 my-1">
                            <div className="card " style={{
                                backgroundColor: "black",
                                boxShadow: "0 0 10px )",
                                borderColor: "	#3498DB ",
                                borderBottom: "7px solid #3498DB ",

                            }}>
                                <div className="card-body">
                                    <h5 style={{ color: "#3498DB " }} className=" mb-2"><i className="bi bi-pencil-fill mx-2"></i>
                                        open
                                    </h5>
                                    <hr style={{ borderWidth: "4px", color: "#fff" }} />
                                    <div className="row ">
                                        <div className="col md-6">
                                            <h1 style={{ color: "#3498DB " }}>{ticketStatusCount.pending}</h1>
                                        </div>
                                        <div className="col">
                                            <div style={{ width: 50, height: 50 }}  >
                                                <CircularProgressbar styles={buildStyles({ textColor: "#3498DB ", pathColor: "#3498DB " })} value={ticketStatusCount.pending * 10} text={`${ticketStatusCount.pending * 10}%`} />
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-lg-3 col-md-6 my-1">
                            <div className="card" style={{
                                backgroundColor: "black",
                                borderColor: "#FFD700",
                                borderBottom: "7px solid #FFD700"
                            }}>
                                <div className="card-body">
                                    <h5 className="text-warning mb-2"><i className="bi bi-lightning-fill mx-2"></i>
                                        progress
                                    </h5>
                                    <hr style={{ borderWidth: "4px", color: "#fff" }} />
                                    <div className="row ">
                                        <div className="col md-6">
                                            <h1 className="text-warning">{ticketStatusCount.progress}</h1>
                                        </div>
                                        <div className="col">
                                            <div style={{ width: 50, height: 50 }}  >
                                                <CircularProgressbar styles={buildStyles({ pathColor: "#FFD700", textColor: "#FFD700" })} value={ticketStatusCount.progress} text={`${ticketStatusCount.progress}%`} />
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-lg-3 col-md-6 my-1">
                            <div className="card" style={{
                                backgroundColor: "black",
                                borderColor: "#1E8449 ",
                                borderBottom: "7px solid #1E8449 "


                            }}>
                                <div className="card-body">
                                    <h5 className="text-success mb-2"><i className="bi bi-check-circle mx-2"></i>
                                        closed
                                    </h5>
                                    <hr style={{ border: "2px solid" }} />
                                    <div className="row ">
                                        <div className="col md-6">
                                            <h1 className="text-success">{ticketStatusCount.closed}</h1>
                                        </div>
                                        <div className="col">
                                            <div style={{ width: 50, height: 50 }}  >
                                                <CircularProgressbar styles={buildStyles({ pathColor: "#1E8449 ", textColor: "#1E8449 " })} value={ticketStatusCount.closed} text={`${ticketStatusCount.closed}%`} />
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-md-6 col-lg-3 my-1">
                            <div className="card" style={{
                                background: "black",
                                borderColor: " #E74C3C",
                                borderBottom: "7px solid  #E74C3C"
                            }}>
                                <div className="card-body">
                                    <h5 className="text-danger mb-2"><i className="bi bi-x-circle mx-2"></i>
                                        blocked
                                    </h5>
                                    <hr style={{ borderWidth: "4px", color: "#fff" }} />
                                    <div className="row ">
                                        <div className="col md-6">
                                            <h1 className="text-danger">{ticketStatusCount.blocked}</h1>
                                        </div>
                                        <div className="col">
                                            <div style={{ width: 50, height: 50 }}  >
                                                <CircularProgressbar styles={buildStyles({ pathColor: "#E74C3C", textColor: "#E74C3C" })} value={ticketStatusCount.blocked} text={`${ticketStatusCount.blocked}%`} />
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div style={{ maxWidth: '100%' }} className="m-2">
                        <MaterialTable
                            columns={[
                                { title: 'USER ID', field: 'userId' },
                                { title: 'NAME', field: 'name' },
                                { title: 'EMAIL', field: 'email' },
                                { title: 'USER TYPE', field: 'userTypes' },
                                { title: 'STATUS', field: 'userStatus' }]}

                            title="USER RECORDS"

                            options={{
                                sorting:true,
                                rowStyle: { cursor: "pointer", backgroundColor: "lightgrey", textColor: "black" }
                            }}
                            data={userDetails}
                        />
                    </div>
                    <hr />
                    <div style={{ maxWidth: '100%' }} className="m-2">
                        <MaterialTable
                            onRowClick={(event, rowData) => editTickets(rowData)}
                            columns={[
                                { title: 'TICKET ID', field: '_id' },
                                { title: 'TITLE', field: 'title' },
                                { title: 'DESCRIPTION', field: 'description' },
                                { title: ' REQUESTOR', field: 'requestor' },
                                { title: 'PRIORITY', field: 'ticketPriority' },
                                { title: 'ASSIGNEE', field: 'assignee' },
                                { title: 'STATUS', field: 'status' },

                            ]}
                            title="TICKET RECORDS"

                            options={{
                                sorting: true,
                                rowStyle: { cursor: "pointer", backgroundColor: "lightgrey" }
                            }}
                            data={ticketDetails}


                        />
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Admin;
