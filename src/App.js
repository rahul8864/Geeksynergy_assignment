import React from 'react';
import Registration from './Components/Signup/Registeration';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Registration />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='home' element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;