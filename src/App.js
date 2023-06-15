import './App.css';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Customer from "./pages/Customer"
import Engineer from './pages/Engineer';
import Admin from './pages/Admin';
import { ThemeProvider,createTheme } from '@mui/material';
import Auth from './Hoc/Auth';
import React, { useState } from 'react';
import Custom from './pages/Custom';

const ThemeContext = React.createContext()

function App() {

  const defaultMaterialTheme = createTheme();
  const [theme,setTheme]=useState("light")

  return (
   
    <div className={`App ${theme === "light" ? "bg-dark vh-100% text-light" : "text-dark"}`}>

      <ThemeProvider theme={defaultMaterialTheme}>
      <ThemeContext.Provider value={{theme,setTheme}} >
      <Router>
       <Routes >
        <Route path='/' element={<Login/>}/>
        <Route path='/customer' element={<Auth ><Customer/></Auth>}/>4
        <Route path='/customer/createTicket' element={<Auth ><Customer/></Auth>}/>4
        <Route path="/admin" element={<Auth ><Admin/></Auth>}/>
        <Route path="/admin/:userId" element={<Auth ><Admin/></Auth>}/>
        <Route path='/engineer' element={<Auth ><Engineer/></Auth>}/>
        <Route path='/custom' element={<Custom/>}/>4
      </Routes>
    </Router>
    </ThemeContext.Provider>
    </ThemeProvider>
      
    </div>
  );
}

export default App;
export {ThemeContext}