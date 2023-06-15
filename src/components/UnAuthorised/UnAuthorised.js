import { logout } from "../../handlers/logoutHandler";


function UnAuthorised(props){

    return <div className="bg-warning text-white vh-100 d-flex align-item-center flex-column justify-content-center">
        <h2>OOPS!! User of {props.userType} type doesn't have sufficient permissions to access this page</h2>

        <p className="text-white" onClick={logout}> Move to login page </p>
    </div>
}

export default UnAuthorised;