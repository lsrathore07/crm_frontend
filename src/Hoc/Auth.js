import UnAuthenticated from "../components/UnAuthenticated/UnAuthenticated";
import UnAuthorised from "../components/UnAuthorised/UnAuthorised";
import constants from "../utils/constants"
import { useLocation } from "react-router-dom";

function Auth(props){
   
    const location=useLocation()

    const userType=localStorage.getItem("userType")

    if(!userType){
        return <UnAuthenticated/>
    }

    var requiredUserType=null

    const page =location.pathname.split("/")[1];
    console.log(location)
    if(page === "customer"){
        requiredUserType=constants.userType.customer;
    }
    else if(page==="engineer"){
        requiredUserType=constants.userType.engineer
    }
    else{
        requiredUserType=constants.userType.admin
    }

 
    if(userType!==requiredUserType){
        return <UnAuthorised userType={userType}/>
      }

    return  <div>
        {props.children}
    </div>
}

export default Auth