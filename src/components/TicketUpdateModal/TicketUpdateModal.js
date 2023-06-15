import { Modal,Button } from "react-bootstrap";
import fetchDisabledFields from "../../utils/fetchDisabledFieldData";
import { ThemeContext } from "../../App";
import { useContext } from "react";

const TicketUpdateModal=(props)=>{

    const {ticketUpdateModal,closeTicketUpdateModal,selectCurrTicket,onTicketUpdate,updateTicketFn}=props
    const {theme}=useContext(ThemeContext)
    
    const disabledField = fetchDisabledFields()

    return (
    <Modal show={ticketUpdateModal} onHide={closeTicketUpdateModal}  style={{
      background: "rgba(0, 0, 0, 0.3)",
      backdropFilter: "blur(3px)",
      borderWidth: "10px",
      borderColor: "rgb(33, 232, 254)",
      fontFamily: "Lobster, cursive",
    }}>
    <Modal.Header closeButton  style={{ backgroundColor: "black" }}>
      <Modal.Title style={{ color: "#fff", fontSize: "2rem" }}>Edit Details </Modal.Title>
    </Modal.Header>
    <Modal.Body style={{backgroundColor:(theme==="light"?"whitesmoke":"black")}}>
      <form onSubmit={updateTicketFn}>
        <div className="p-1">
          <h5
            className="card-subtitle mb-2 text-primary"> Ticked Id : {selectCurrTicket._id}
          </h5>

          <div className="input-group mb-3">
          <span
                className="input-group-text "
                style={{
                  minWidth: "92px",
                  backgroundColor: "black",
                  color: "#fff",
                  fontSize: "20px",
                }}
              > Title : </span>
            <input disabled={disabledField.title} type="text" name="title" value={selectCurrTicket.title} onChange={onTicketUpdate} />
          </div>

          <div className="input-group mb-3">
          <span
                className="input-group-text "
                style={{
                  minWidth: "92px",
                  backgroundColor: "black",
                  color: "#fff",
                  fontSize: "17px",
                }}
              > Assignee : </span>
            <input disabled={disabledField.assignee} type="text" name="assignee" value={selectCurrTicket.assignee} onChange={onTicketUpdate} />
          </div>

          <div className="input-group mb-3">
          <span
                className="input-group-text "
                style={{
                  minWidth: "92px",
                  backgroundColor: "black",
                  color: "#fff",
                  fontSize: "18px",
                }}
              > Status : </span>
            <input  disabled={disabledField.status} type="text" name="status" value={selectCurrTicket.status} onChange={onTicketUpdate} />
          </div>

          <div className="input-group mb-3">
          <span
                className="input-group-text "
                style={{
                  minWidth: "92px",
                  backgroundColor: "black",
                  color: "#fff",
                  fontSize: "18px",
                }}
              > Priority : </span>
            <input  disabled={disabledField.priority}  type="text" name="ticketPriority" value={selectCurrTicket.ticketPriority} onChange={onTicketUpdate} />
          </div>

          <div className="input-group mb-3">
          
          
            <textarea  disabled={disabledField.description} className="md-textarea form-control" rows="3" type="text" name="description" value={selectCurrTicket.description} onChange={onTicketUpdate} />
            
          </div>

        </div>
        <div className="d-flex justify-content-between ">
      
        <Button variant="danger" onClick={closeTicketUpdateModal}>
          Close
        </Button>
       
        <Button type="submit" variant="success" >
          Update
        </Button>
    
        </div>
        
      </form>
    </Modal.Body>
    <Modal.Footer>

    </Modal.Footer>
  </Modal>
)
}

export default TicketUpdateModal;