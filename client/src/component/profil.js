import React, { Component, useEffect, useState } from "react";
import Data from '../data.json';
import Axios from 'axios';
import urllink from "./url";
import parser from 'html-react-parser';


export default function Profil () {

  const [dataProfil, setDataProfil] = useState("");
  const [dataVisi, setDataVisi] = useState("");
  const [dataMisi, setDataMisi] = useState("");
  const [gambarVisi, setGambarVisi] = useState(null);
  const [gambarMisi, setGambarMisi] = useState(null);


  const getDataProfil = async () => { 
    Axios.put( urllink + "api/getprofil", {id: 1})
    .then((response) => {
      const data = response.data;
      {data.map((val) => {
        setDataProfil(val.profildesc);
      })}
    })
  }

  const getDataVisi = async () => { 
    Axios.put(urllink + "api/getprofil", {id: 2})
    .then((response) => {
      const data = response.data;
      data.map((val) => {
        setDataVisi(val.profildesc);
        setGambarVisi(val.gambar_profil);
      })
    })
  }

  const getDataMisi = async () => { 
    Axios.put(urllink + "api/getprofil", {id: 3})
    .then((response) => {
      const data = response.data;
      {data.map((val) => {
        setDataMisi(val.profildesc);
        setGambarMisi(val.gambar_profil);
      })}
    })
  }

  useEffect(() => {
    getDataProfil();
    console.log(dataProfil);
    getDataVisi();
    console.log(dataVisi);
    getDataMisi();
    console.log(dataMisi);
  })

    return(
      <div id='profil'>
        <div className="background-3"/>
                <div className="hero-section">
                              <div className="hero-profil-section">
                                  <h1 className="hero-title">Dafam Trading Co.</h1>
                                  <div className="detail-section">
                                      <div className="line-frame">
                                          <div className="line"></div>
                                      </div>
                                      <div className="detail-text">
                                      {parser(dataProfil)}
                                      </div>
                                  </div>
                              </div>
                          
                        </div>
    
                    <div className='visimisi-section'>
                      <div className='detail-visi-section'>
                        <div className='image-visi' style={{backgroundImage: `url(${urllink + gambarVisi})`}}>
                         {/* <img src={urllink + gambarVisi}/> */}
                        </div>
                        <div className='visi-section'>
                          <div className='detail-visi-text-section'>
                            <h1 className='visimisi-title'>
                              Visi
                            </h1>
                            <div className='visimisi-detail'>
                            {parser(dataVisi)} 
                            </div>
                          </div>
                          <h1 className='visi-decoration'>
                            VISI
                          </h1>
                        </div>
                      </div>
                      <div className='detail-misi-section'>
                        <div className='misi-section'>
                          <h1 className='misi-decoration'>
                            MISI
                          </h1>
                          <div className='detail-misi-text-section'>
                            <h1 className='visimisi-title'>
                              Misi
                            </h1>
                            <div className='visimisi-detail'>
                            {parser(dataMisi)} 
                            </div>
                          </div>
                        </div>
                        
                      <div className='image-misi' style={{backgroundImage: `url(${urllink + gambarMisi})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}></div>
                      </div>
                    </div>
      </div>
    );
}