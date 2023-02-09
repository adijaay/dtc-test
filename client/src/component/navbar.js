import Axios from "axios";
import React, { useEffect, useState } from "react";
import logo from '../logo.svg';
import './navbar-700.css'
import urllink from "./url";


export default function Navbar(){
    const [navbarset, setNavbar] = useState(false);
    const [contentset, setContent] = useState(false);
    const [logo, setLogo] = useState(null);
    const [logof, setLogof] = useState(null);

    const getLogo = async() => {
        const get = await Axios.put(urllink+"api/getlogo", {id: 1})
        .then((response) => {
            let data = response.data;
            {data.map((val) => {
                let datalogo = val.gambar_logo;
                let link = urllink+datalogo;
                setLogo(link);
            })}
        })
    }

    const getLogoFooter = async() => {
        const get = await Axios.put(urllink+"api/getlogo", {id: 2})
        .then((response) => {
            let data = response.data;
            {data.map((val) => {
                let datalogo = val.gambar_logo;
                let link = urllink+datalogo;
                setLogof(link);
            })}
        })
    }

    useEffect(() => {
        getLogo();
        getLogoFooter();
    }, [], [])

    const changeNavbar = () => {
        if(window.scrollY >= 100) {
            setNavbar(true)
        } else {
            setNavbar(false)
            setContent(false)
        }
    }

    window.addEventListener('scroll', changeNavbar);
    window.addEventListener('scroll', closeExtend);

    function extend(){
        var x = document.getElementById("navbar");
        if(x.className=="navbar active" && contentset==false){
            setContent(true)
        } else setContent(false)
    }

    function closeExtend(){
        if(contentset==true) setContent(false)
    }



    return(
    <div className="frame-navbar">
        <div className={navbarset ? 'navbar active' : 'navbar'} id='navbar' onClick={extend}>
          <div className='navbar-logo'>
            <img src={navbarset ? logof : logo}/>
          </div>
          <ul className='navbar-content-section'>
            <a href='#profil' className='navbar-content'>Profil</a>
            <a href='#kategori' className='navbar-content'>Produk</a>
            <a href='#office' className='navbar-content'>Office</a>
            <a href='#mitra' className='navbar-content'>Mitra</a>
            <a href='#kontak' className='navbar-content'>Kontak</a>
          </ul>
        <svg className="bar-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={'5vw'} fill={'white'}><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
        </div>
        <div className={contentset ? "content-container" : "close-container"}>
            <a href="#profil" className="content">Profil</a>
            <a href="#kategori" className="content">Produk</a>
            <a href="#office" className="content">Office</a>
            <a href="#mitra" className="content">Mitra</a>
            <a href="#kontak" className="content">Kontak</a>
        </div>
    </div>
    
    );
}