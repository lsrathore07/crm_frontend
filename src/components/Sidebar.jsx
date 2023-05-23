import { CNavItem,   CSidebarToggler, CSidebar,  CSidebarNav, CNavTitle } from "@coreui/react";
import { Link } from "react-router-dom"

const Sidebar = () => {

   const logout=()=>{
// frst clear local storage when click on logout button
   localStorage.clear()

   //then redirect it to login page
    window.location.href="/"
   }

    return (
        <div>
            <CSidebar unfoldable className="vh-100 bg-black">
                <CSidebarNav>
                <CNavTitle className="text-light fw-normal">A CRM Application</CNavTitle>
                    <CNavItem href="#" className="bg-dark">
                        <i className="bi bi-bar-chart-fill text-white m-2 p-2"/>
                        Dashboard
                    </CNavItem>
                    
                    <CNavItem href="#">
                        <i className="bi bi-house-fill text-white m-2 p-2"/>
                        {/* <Link to="/admin" className="text-decoration-none text-white ">
                            Home
                            </Link> */}
                      
                    </CNavItem>
                    <div onClick={logout}>
                    <CNavItem href="#">
                        <i className="bi bi-box-arrow-left text-white m-2 p-2"/>
                        Logout
                    </CNavItem>
                    </div>
                    
                    
                </CSidebarNav>
                <CSidebarToggler />
            </CSidebar>
        </div>
    )
}

export default Sidebar;