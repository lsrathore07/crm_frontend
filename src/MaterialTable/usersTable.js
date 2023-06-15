import MaterialTable from "material-table";


function UserTable(props) {
  return (
    <div id="users">
    <MaterialTable
      style={{
        color: "black",
        background: "whitesmoke",
        borderWidth: "1px",
      }}
      onRowClick={(event, rowData) => props.editUser(rowData)}
      columns={[
        { title: 'USER ID', field: 'userId' },
        { title: 'NAME', field: 'name' },
        { title: 'EMAIL', field: 'email' },
        { title: 'ROLE', field: 'userTypes' },
        { title: 'STATUS', field: 'userStatus' }]}
    
      title={props.title}
      options={{
        sorting: true,
        exportButton: true,
        serioulnumber:true,
        headerStyle: {
          backgroundColor: "mediumblue",
          fontSize: "1.2em",
          alignItems: "center",
          color: "white",
        },
        rowStyle: {
          border: "2px solid gray",
          cursor: "pointer",
        },
      }}
      data={props.userDetails}
    />
    </div>
  );
}

export default UserTable;




{/* <MaterialTable
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
/> */}