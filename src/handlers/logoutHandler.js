export const logout=()=>{
    // frst clear local storage when click on logout button
       localStorage.clear()
    
       //then redirect it to login page
        window.location.href="/"
       }