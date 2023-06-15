import { Button, Modal } from "react-bootstrap";
import { createNewTicket } from "../../Api/ticket";


function TicketCreationModal(props){

const createTicket=(e)=>{
    e.preventDefault()

  const title = e.target.title.value;
  const description = e.target.description.value;
  const priority = parseInt(e.target.priority.value)

  const ticket={title,description,priority}
   
  createNewTicket(ticket)
  .then(res=>{
    console.log("new ticket create successfully")
    if(res.status===201){
        window.location.href="/customer"
    }
  })
  .catch((err)=>{
    console.log(err)
  })
}

return <Modal show={props.show} onHide={props.onClose}style={{
    background: "rgba(0, 0, 0, 0.3)",
    backdropFilter: "blur(3px)",
    borderWidth: "10px",
    borderColor: "rgb(33, 232, 254)",
    fontFamily: "Lobster, cursive",
  }}>
    <Modal.Header closeButton style={{fontSize:"2rem",backgroundColor:"black"}}> 
        <Modal.Title style={{color:"#fff"}}>
            Create Ticket
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <form onSubmit={createTicket}>
            <div className="input-group mb-2">
                <span style={{
                    backgroundColor:"#2E86C1",
                    color:"floralwhite",
                    minWidth:"92px",
                    fontSize:"17px"              
            }} className="input-group-text ">Title</span>
            <input className="form-control" type="text" name="title" required/>
            </div>

            <div className="input-group  mb-2">
                <span style={{
                    backgroundColor:"#2E86C1",
                    color:"floralwhite",
                    minWidth:"92px",
                    fontSize:"17px"              
            }} className="input-group-text">Priority</span>
                <select name="priority" className="form-select">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                    <option value="5">Five</option>
                </select>
            </div>
           
            <div className="input-group mb-2">
            <textarea className="form-select" rows={4} type="text"  name="description" required/>
            </div>
            <div className="d-flex justify-content-between">
            <Button variant="danger" onClick={props.onClose}>Close</Button>
            <Button type="submit" variant="success" >Create</Button>
            </div>
        </form>
    </Modal.Body>
</Modal>

}

export default TicketCreationModal;