import Axios from "axios";
import { useEffect, useState } from "react";
import urllink from "./url";

export default function Kategori () {
    const [kategori, setKategori] = useState([]);

    const getKategori = async () => {
        Axios.get(urllink + "api/getkategori")
        .then((response) => {
            setKategori(response.data);
        })
    }

    useEffect(() => {
        getKategori([]);
        console.log(kategori);
        getPost();
        window.addEventListener("resize", getPost);
        document.getElementById('container-kategori').addEventListener("scroll", getPost);
    }, [])

    const [openBtn, setBtn] = useState(false);
    const [rightBtn, setRightBtn] = useState(false);
    function scrollKanan(){
        document.getElementById('container-kategori').scrollBy(250, 0);
    }
    function scrollKiri(){
        document.getElementById('container-kategori').scrollBy(-9999, 0);
    }

    const getPost = () => {
      const x = document.getElementById('container-kategori').scrollLeft;
      if(x>250) setBtn(true);
      else if (openBtn==true && x>0) setBtn(true);
      else setBtn(false);
      if(x==811) setRightBtn(true);
      else if(x<811) setRightBtn(false)
    }

    return(
        <div className='kategori-section' id='kategori'>
                  <div className='kategori-hero-section'>
                    <div className='title-kategori-section'>
                      <h1 className='title-kategori'>KATEGORI PRODUK</h1>
                    </div>
                    <div className='kategori-container' id="container-kategori">
                      {kategori.map(kategori => {
                        const image = urllink + kategori.gambar_kategori;
                        return(
                        <div className='container' key={ kategori.id_kategori } >
                          <div className='container-text' style={{ backgroundImage: `url(${image})` }}>
                            <h1 className='kategori-text'>{kategori.nama_kategori}</h1>
                          </div>
                        </div>
                        )
                      })}
                    </div>
                  </div>
                <a className={rightBtn ? 'button-section-closed' :'button-section'} onClick={scrollKanan}>
                <svg id='kanan' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z"/></svg>
                </a>
                <a id="button-kiri" className={openBtn ? 'button-section-left-open' : 'button-section-left'} onClick={scrollKiri}>
                <svg id="kiri" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256S114.6 512 256 512s256-114.6 256-256zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"/></svg>
                </a>
        </div>
    )
}