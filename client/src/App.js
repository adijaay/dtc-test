import logo from './logo.svg';
import React from 'react';
import './App.css';
import '../src/component/profil.css'
import './component/profil-1230.css'
import './component/detail.css'
import './component/detail-1230.css'
import './component/navfootbar-822.css'
import './component/profil-756.css'
import circle from './assets/bg-1.png'
import Profil from './component/profil';
import Detail from './component/detail';
import Navbar from './component/navbar';
import Footer from './component/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './component/landingpage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}></Route>
    </Routes>
     {/* <div className='root'>
          <div className='background-section' id='home'>
            <div className='background-1'/>
            <div className='background-2'/>
            <Navbar/>
            <Profil></Profil>
            <Detail></Detail>
            <Footer/>
          </div>
        </div> */}
    </BrowserRouter>
       
    
    
  );
}

export default App;
