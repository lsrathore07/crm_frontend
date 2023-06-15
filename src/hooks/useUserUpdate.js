import { useLocation,useNavigate } from "react-router-dom";
import { updateUser } from "../Api/user"
import { useState } from "react";


const useUsersUpdateHook = () => {
    
    const navigate=useNavigate()
    const location=useLocation()
    const [selectCurrUser, setSelectCurrUser] = useState({})
    const [userUpdateModal, setUserUpdateModal] = useState(false)
  
  
    const closeUserUpdateModal = () => {
      setUserUpdateModal(false)
      const url=`/admin`
      navigate(url) 
    }

    const openUserUpdateModal=()=>{
      setUserUpdateModal(true)
    }
  
    const setUserAndOpenModal=(userDetail)=>{
      setSelectCurrUser(userDetail)
      setUserUpdateModal(true)
    }

    const editUser = (userDetail) => {
       
      setSelectCurrUser(userDetail)
      setUserUpdateModal(true)
      const url=`${location.pathname}/${userDetail.userId}`
       navigate(url)    

    };
  
    const changeUserDetails = (e) => {
      console.log(e.target.value)
  
      if (e.target.name === "status") {
        selectCurrUser.userStatus = e.target.value
      }
  
      setSelectCurrUser({ ...selectCurrUser })
    }
  
    const updateUserFn = (e) => {
      e.preventDefault()
  
      const userData = {
        _id: selectCurrUser._id,
        status: selectCurrUser.userStatus
      }
      updateUser(userData).then(res => {
  
        if (res.status === 200) {
          console.log('user Details Update Successfully')
          setUserUpdateModal(false)
        }
      })
        .catch((err) => {
          console.log(err)
        })
    }
  
    return { selectCurrUser,setUserAndOpenModal,openUserUpdateModal , closeUserUpdateModal, updateUserFn, changeUserDetails, editUser, selectCurrUser, userUpdateModal }
  }
  

  export default useUsersUpdateHook;