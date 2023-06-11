
import './App.css';
import {Routes,Route} from 'react-router-dom'
import { useMemo } from 'react';
import { createTheme } from '@mui/material';
import { themeSettings } from './theme';
import CssBaseline from '@mui/material';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  const theme =useMemo(()=>c)
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
