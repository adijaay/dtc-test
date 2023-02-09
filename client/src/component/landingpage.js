import React from "react";
import Detail from "./detail";
import Footer from "./footer";
import Navbar from "./navbar";
import Profil from "./profil";

export default function LandingPage () {
    return(
        <div id="root">
            <div className='background-section' id='home'>
            <div className='background-1'/>
            <div className='background-2'/>
            <Navbar/>
            <Profil/>
            <Detail/>
            <Footer/>
            </div>
        </div>
    )
}