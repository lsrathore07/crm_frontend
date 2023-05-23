import './App.css';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Customer from "./pages/Customer"
import Engineer from './pages/Engineer';
import Admin from './pages/Admin';
import { ThemeProvider,createTheme } from '@mui/material';

function App() {
  const defaultMaterialTheme = createTheme();
  return (
   
    <div className="App  justify-content-center">
      <ThemeProvider theme={defaultMaterialTheme}>
      <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/customer' element={<Customer/>}/>4
        <Route path="/admin" element={<Admin/>}/>
        <Route path='/engineer' element={<Engineer/>}/>
      </Routes>
    </Router>
    </ThemeProvider>
      
    

    </div>
  );
}

export default App;
