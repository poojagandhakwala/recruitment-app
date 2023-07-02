import React, { useEffect } from 'react'
import Home from './home';
import Navbar from './navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HireNowPage from './hirenow';
import 'bootstrap/dist/css/bootstrap.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Login from './login';
import Signup from './signup';
import Footer from './footer';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
      {(window.location.pathname!=='/login' && window.location.pathname!=='/signup') ? <Navbar/> :<></>}
        
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/hirenow" element={<HireNowPage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>

        </Routes>
        {(window.location.pathname!=='/login' && window.location.pathname!=='/signup') ? <Footer/> :<></>}
      </BrowserRouter>
    </div>
  );
}

export default App;
