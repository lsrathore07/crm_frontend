import { Link } from "react-router-dom";


function UnAuthenticated(){

    return <div className="bg-warning text-white vh-100 d-flex align-item-center flex-column justify-content-center">
        <h2>You need to be logged in to access this page</h2>

        <Link to="/">Move to Login Page</Link>
    </div>
}

export default UnAuthenticated;