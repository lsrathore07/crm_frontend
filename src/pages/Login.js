import React, { useEffect, useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FaEye } from "react-icons/fa";
import {userSignIn,userSignUp} from "../Api/auth"


function Login() {

    const [signUp, setsignUp] = useState(false)

    const [userId, setuserid] = useState("")
    const [userName, setName] = useState("")
    const [userEmail, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [togglePassword, showpassword] = useState("password")
    const [userType, setuserType] = useState("CUSTOMER");
    const [error, setError] = useState(false)
    const [message, setMessage] = useState("")


    useEffect(()=>{
      
     const userType=localStorage.getItem("userType")
     const token   = localStorage.getItem("token")


     if(!token || !userType){
        return;
     }

     if(userType==="ENGINEER"){
        window.location.href="/engineer";
    }
    else if(userType==="CUSTOMER"){
        window.location.href="/customer";
    }else{
        window.location.href="/admin";

    }
    },[])



    const toggleSignUp = () => {
        clearState()
        setsignUp(!signUp);
    }

    const SeePassword = () => {
        showpassword(togglePassword === "password" ? "text" : "password")
    }

    const changeuserType = (eventKey) => {
        setuserType(eventKey)
    }

    const changeEmail = (event) => {
        setEmail(event.target.value)
    }

    const changeUserid = (event) => {
        setuserid(event.target.value)
    }

    const changePassword = (e) => {
        setPassword(e.target.value)
    }
    const changeUserName = (event) => {
        setName(event.target.value)
    }

    const clearState = () => {
        setName("")
        setEmail("")
        setPassword("")
        setuserid("")
        setuserType("")
        setError(false)
        setMessage("")
    }

    const onSignUp = (e) => {

        const data = {
            name: userName,
            userId: userId,
            email: userEmail,
            userType: userType,
            password: password
        }

        e.preventDefault();

        if (userId.length < 5) {
            setError(true)
            setMessage("User id should be of 5 to 10 characters")
            return
        }
        else if (password.length < 8) {
            setError(true)
            setMessage("For better privacy make password length 8 or more")
            return;
        }

        //API CALL
        userSignUp(data)        
        .then(res => {
                console.log(res)
                setError(false)
                setMessage("signUp Successful")
                window.location.href="/"
            })
            .catch((err) => {
                if (err.response.status === 400) {
                    setError(true)
                    setMessage(err.response.data.message)

                }

                // setMessage(err)
            })

    }

    const onLogin = (e) => {

        const data = { userId, password }

        e.preventDefault()
            userSignIn(data)
            .then(res => {

                if(res.data.message){
                    setError(true)
                    setMessage(res.data.message)
                    return;
                }
                console.log(res)
                setError(false)
                setMessage("Login Successfull")
                localStorage.setItem("name",res.data.name)
                localStorage.setItem("email",res.data.email)
                localStorage.setItem("userStatus",res.data.userStatus)
                localStorage.setItem("token",res.data.accessToken)
                localStorage.setItem("userId",res.data.userId)
                localStorage.setItem("userType",res.data.userType)



                if(res.data.userType==="ENGINEER"){
                    window.location.href="/engineer";
                }
                else if(res.data.userType==="CUSTOMER"){
                    window.location.href="/customer";
                }else{
                    window.location.href="/admin";
        
                }            })
            .catch(err => {
                if (err.response.status){

                    console.log(err.response)
                    setError(true)
                    setMessage(err.response.data.message)
                }
                else if(err.message){
                    console.log(err)
                    setError(true)
                    setMessage(err.message)
                }
            })


    }


    return (
     <div style={{
        backgroundColor:'Highlight',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }}
         className="d-flex justify-content-center align-items-center vh-100"
         >
            <div className="card p-3 rounded-3 shadow " style={{ background:"rgba(0 , 0 , 0 ,0.7)" , width: '25rem' }}>
                <form onSubmit={signUp ? onSignUp : onLogin}>
                    <div>
                        <h2 className="text-warning">{signUp ? "Sign Up" : "Login"}</h2>
                    </div>

                    <div className="input-group ">
                        <input className="form-control m-1" id="userId" onChange={changeUserid} value={userId} type="text" placeholder="UserId" />
                    </div>

                    {signUp &&
                        <>
                            <div className="input-group ">
                                <input className="form-control m-1" id="userName" onChange={changeUserName} value={userName} type="text" placeholder="Name" />
                            </div>
                            <div className="input-group ">
                                <input className="form-control m-1" id="email" onChange={changeEmail} value={userEmail} type="email" placeholder="Email" />
                            </div>
                        </>
                    }

                    <div className="input-group ">
                        <input className='form-control m-1' aria-describedby="basic-addon2" type={togglePassword} name='password' value={password} onChange={(e) => changePassword(e)} placeholder="Enter the Password" />
                        <span className="input-group-text my-1" id="basic-addon2" onClick={SeePassword}><FaEye size={20} style={{ color: 'grey' }} /></span>                    </div>

                    {signUp &&
                        <DropdownButton
                        title={userType} // Set the default value here
                        id="userId"
                        variant="light"
    
                        onSelect={changeuserType}
                      >
                        <Dropdown.Item eventKey="CUSTOMER">CUSTOMER</Dropdown.Item>
                        <Dropdown.Item eventKey="ADMIN">ADMIN</Dropdown.Item>
                        <Dropdown.Item eventKey="ENGINEER">ENGINEER</Dropdown.Item>
                      </DropdownButton>
                    }
                    <div className="input-group ">
                        <input className=" btn btn-warning form-control btn btn-warning text-white m-1" type="submit" value={signUp ? "Sign Up" : "Log In"} />
                    </div>
                    <div className="text-warning m-1 curson-auto" onClick={toggleSignUp}>
                        {signUp ? "Already have an account ? Log In" :
                            "Don't have the account? Sign Up"}
                    </div>
                    <div >
                        <div className={error ? "text-danger" : "text-success"} >{message}</div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;