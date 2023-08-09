import { Button, Modal } from "react-bootstrap"


const UserUpdateModal=(props)=>{
 
    const {userUpdateModal ,closeUserUpdateModal ,updateUserFn,selectCurrUser,changeUserDetails}=props

    return (
        <Modal show={userUpdateModal} onHide={closeUserUpdateModal} style={{
          background: "rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(3px)",
          borderWidth: "10px",
          borderColor: "rgb(33, 232, 254)",
          fontFamily: "Lobster, cursive",
        }}>
              <Modal.Header closeButton style={{backgroundColor:"#fff"}}>
                <Modal.Title style={{color: "#000", fontSize: "2rem" }}>Edit Details </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form onSubmit={updateUserFn}>
                  <div className="m-2">
                    <h5
                      className="card-subtitle mb-2 text-primary"> User Id : {selectCurrUser.userId}
                    </h5>

                    <div className="input-group mb-3">
                      <span style={{
                        backgroundColor:"#2E4053 ",
                        minWidth:"92px",
                        color:"#fff"
                      }} className="input-group-text"> Name : </span>
                      <input type="text" className="form-control" disabled name="name" value={selectCurrUser.name} />
                    </div>

                    <div className="input-group mb-3">
                      <span style={{
                        backgroundColor:"#2E4053 ",
                        minWidth:"92px",
                        color:"#fff"
                      }}  className="input-group-text"> User Id : </span>
                      <input type="text" className="form-control"  disabled name="userId" value={selectCurrUser.userId} />
                    </div>

                    <div className="input-group mb-3">
                      <span style={{
                        backgroundColor:"#2E4053 ",
                        minWidth:"92px",
                        color:"#fff"
                      }}  className="input-group-text"> Email : </span>
                      <input type="text" className="form-control"  disabled name="email" value={selectCurrUser.email} />
                    </div>

                    <div className="input-group mb-3">
                      <span style={{
                        backgroundColor:"#2E4053 ",
                        minWidth:"92px",
                        color:"#fff"
                      }}  className="input-group-text"> Status : </span>
                      <select name="status" value={selectCurrUser.userStatus} className="form-select" onChange={changeUserDetails}>
                        <option value="APPROVED">APPROVED</option>
                        <option value="PENDING">PENDING</option>
                        <option value="REJECTED">REJECTED</option>
                      </select>
                    </div>


                  </div>
                  <div className="d-flex justify-content-between">

                 
                  <Button variant="danger" onClick={closeUserUpdateModal}>
                    Close
                  </Button>
                  <Button type="submit" variant="primary" >
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

export default UserUpdateModal;