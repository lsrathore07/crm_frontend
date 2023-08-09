import { CircularProgressbar,buildStyles } from "react-circular-progressbar";
import createTicketsCount from "../../handlers/ticketHandler";
import { ThemeContext } from "../../App";
import { useContext } from "react";
import ModeButton from "../ModeButton";

const StatusDashboard=(props)=>{

   const {theme}=useContext(ThemeContext)    
  const userName=localStorage.getItem("name")
  // console.log(props.ticketDetails)
   
  const statusDetails=createTicketsCount(props.ticketDetails)
  // console.log(statusDetails)
  // const statusDetails = {
  //   open:5,
  //   closed:10,
  //   inProgress:12,
  //   blocked:6
  //  }

    return(  <div className="col my-4 text-light">
      <div className="d-flex justify-content-end">
      <ModeButton />   
      </div>
      <div  >
               
    <div className="container">
      <h1 className="m-4 text-warning" >Welcome {userName}</h1>
      <p className="text-warning">Take a quick look at your {localStorage.getItem("userType")} stats</p>
      <div className="row">
        <div className="col-xs-12 col-lg-3 col-md-6 my-1">
          <div
            className="card"
            style={{
              backgroundColor: "black",
              borderColor: "#3498DB",
              borderBottom: "7px solid #3498DB",
            }}
          >
            <div className="card-body">
              <h5 style={{ color: "#3498DB" }} className="mb-2">
                <i className="bi bi-pencil-fill mx-2"></i>
                open
              </h5>
              <hr style={{ borderWidth: "4px", color: "#fff" }} />
              <div className="row">
                <div className="col-md-6">
                  <h1 style={{ color: "#3498DB" }}>
                    {statusDetails.pending}
                    
                  </h1>
                </div>
                <div className="col">
                  <div style={{ width: 50, height: 50 }}>
                    <CircularProgressbar
                      styles={buildStyles({
                        textColor: "#3498DB",
                        pathColor: "#3498DB",
                      })}
                      value={statusDetails.pending * 10}
                      text={`${statusDetails.pending * 10}%`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-lg-3 col-md-6 my-1">
          <div
            className="card"
            style={{
              backgroundColor: "black",
              borderColor: "#FFD700",
              borderBottom: "7px solid #FFD700",
            }}
          >
            <div className="card-body">
              <h5 className="text-warning mb-2">
                <i className="bi bi-lightning-fill mx-2"></i>
                progress
              </h5>
              <hr style={{ borderWidth: "4px", color: "#fff" }} />
              <div className="row">
                <div className="col-md-6">
                  <h1 className="text-warning">
                    {statusDetails.progress}
                  </h1>
                </div>
                <div className="col">
                  <div style={{ width: 50, height: 50 }}>
                    <CircularProgressbar
                      styles={buildStyles({
                        pathColor: "#FFD700",
                        textColor: "#FFD700",
                      })}
                      value={statusDetails.progress * 10}
                      text={`${statusDetails.progress * 10}%`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-lg-3 col-md-6 my-1">
          <div
            className="card"
            style={{
              backgroundColor: "black",
              borderColor: "#1E8449",
              borderBottom: "7px solid #1E8449",
            }}
          >
            <div className="card-body">
              <h5 className="text-success mb-2">
                <i className="bi bi-check-circle mx-2"></i>
                closed
              </h5>
              <hr style={{ border: "2px solid" }} />
              <div className="row">
                <div className="col-md-6">
                  <h1 className="text-success">
                    {statusDetails.closed}
                  </h1>
                </div>
                <div className="col">
                  <div style={{ width: 50, height: 50 }}>
                    <CircularProgressbar
                      styles={buildStyles({
                        pathColor: "#1E8449",
                        textColor: "#1E8449",
                      })}
                      value={statusDetails.closed*10}
                      text={`${statusDetails.closed *10}%`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-md-6 col-lg-3 my-1">
          <div
            className="card"
            style={{
              background: "black",
              borderColor: " #E74C3C",
              borderBottom: "7px solid  #E74C3C",
            }}
          >
            <div className="card-body">
              <h5 className="text-danger mb-2">
                <i className="bi bi-x-circle mx-2"></i>
                blocked
              </h5>
              <hr style={{ borderWidth: "4px", color: "#fff" }} />
              <div className="row">
                <div className="col-md-6">
                  <h1 className="text-danger">
                    {statusDetails.blocked}
                  </h1>
                </div>
                <div className="col">
                  <div style={{ width: 50, height: 50 }}>
                    <CircularProgressbar
                      styles={buildStyles({
                        pathColor: "#E74C3C",
                        textColor: "#E74C3C",
                      })}
                      value={statusDetails.blocked*10}
                      text={`${statusDetails.blocked*10}%`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    )
}

export default StatusDashboard;