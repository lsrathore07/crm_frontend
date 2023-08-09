import { CNavItem,   CSidebarToggler, CSidebar,  CSidebarNav, CNavTitle } from "@coreui/react";
import { logout } from "../handlers/logoutHandler";
import { Link } from "react-scroll";


const Sidebar = () => {

const userType=localStorage.getItem("userType")


    return (
        <div>
            <CSidebar unfoldable className="vh-100 bg-black">
                <CSidebarNav>
                <CNavTitle className="text-light fw-normal">A CRM Application</CNavTitle>
                    {/* <CNavItem href="#">
                       <i className="bi bi-bar-chart-fill  text-white m-2 p-2"/>
                        Dashboard
                    </CNavItem>
                     */}
                    <CNavItem href="#">
                        <i className="bi bi-house-fill text-white m-2 p-2"/>
                        Home
                       
                    </CNavItem>
                   { userType==="ADMIN" &&  <Link to="users" spy={true} smooth={true}>
                    <CNavItem href="#">
                        <i className="bi bi-file-earmark-person-fill text-white m-2 p-2"/>
                            Users
                    </CNavItem>
                    </Link>}

                    <Link to="tickets" spy={true} smooth={true}>
                    <CNavItem href="#" >
                    <i className="bi bi-ticket-detailed-fill text-white m-2 p-2"/>
                    Tickets
                    </CNavItem>
                    </Link>

                    <Link to="chart" spy={true} smooth={true}>
                    <CNavItem href="#">
                    <i className="bi bi-pie-chart-fill text-white m-2 p-2"/>
                     Chart
                    </CNavItem>
                    </Link>
                    
                    <div style={{cursor:"pointer"}} className="d-flex align-item-center mx-2" onClick={logout}>
                    
                        <i className="bi bi-box-arrow-left text-white m-4"/>
                        <div className="text-decoration-none text-white my-4 ">Logout</div>
                    </div>
                    
                    
                    
                </CSidebarNav>
                <CSidebarToggler />
            </CSidebar>
        </div>
    )
}

export default Sidebar;