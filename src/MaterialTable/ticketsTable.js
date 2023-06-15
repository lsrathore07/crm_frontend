import { Icon } from "@mui/material";
import MaterialTable from "material-table";
import Swal from "sweetalert2";
import { deleteTicket } from "../Api/ticket";


function TicketsTable(props) {
const DeleteTicket=(_id)=>{
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then(async (result)=>{
    if(result.value) {
      const isticketDeleted = await deleteTicketApi(_id)

      if(isticketDeleted){
        props.onTicketsdeleted();
      }
    }
  })
}

const deleteTicketApi = async (_id) => {
    deleteTicket(_id)
    .then((res)=>{
     
      Swal.fire(
        "Deleted!",
        `Ticket ${_id} has been deleted`,
        "success"
      );
      return true;
    })
    .catch((err)=>{
      Swal.fire("Error!",`OOPS Something went Wrong`, "warning")
      console.log(err)
    })
    return false;
}

  return (
    <div id="tickets">
      
    <MaterialTable
      style={{
        color: "black",
        background: "whitesmoke",
        borderWidth: "1px",
      }}
      onRowClick={(event, rowData) => props.editTicket(rowData)}
      columns={[
        { title: "TICKET ID", field: "_id" },
        { title: "TITLE", field: "title" },
        { title: "DESCRIPTION", field: "description" },
        { title: "REQUESTOR", field: "requestor" },
        { title: "PRIORITY", field: "ticketPriority" },
        { title: "ASSIGNEE", field: "assignee" },
        { title: "STATUS", field: "status" },
      ]}
      actions={[
        (rowData)=> ({
          icon:"delete",
          tooltip:"Delete Tickets",
          onClick:()=>{
            DeleteTicket(rowData._id)
          },
        })
       
      ]}
      title={props.title}
      options={{
        sorting: true,
        exportButton: true,
        actionsColumnIndex: -1,
        serioulnumber:true,
        headerStyle: {
          backgroundColor: "mediumblue",
          fontSize: "1.2em",
          alignItems: "center",
          color: "white",
          textTransform: "uppercase",
        },
        rowStyle: {
          border: "2px solid gray",
          cursor: "pointer",
        },
      }}
      data={props.ticketDetails}
    />
    </div>
  );
}

export default TicketsTable;