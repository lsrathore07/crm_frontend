

import { useState, useEffect } from "react";
import { getAllUsers } from "../Api/user";

const useFetchUsers = () => {
    const [userDetails, setUserDetails] = useState([]);
    useEffect(() => { fetchUsers() }, [])
  
  
    const fetchUsers = () => {
        getAllUsers()
          .then((res) => {
            setUserDetails(res.data);
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      };
    return  [userDetails,fetchUsers]
  }
  
  export default useFetchUsers