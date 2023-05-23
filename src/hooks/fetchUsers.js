
import { getAllUsers } from "../Api/user";
import { useEffect,useState } from "react";


const useFetchUsers=()=>{

    const [userDetails, setUserDetails] = useState({})
    useEffect(()=>{fetchUsers();},[]);


const fetchUsers = () => {
    getAllUsers()
        .then(res => {
            setUserDetails(res.data)
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
}

return [userDetails, fetchUsers];
}

export default useFetchUsers;