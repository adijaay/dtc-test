import { useEffect, useState } from "react"
import Axios from "axios";
import urllink from "./url";

export default function Mitra () {
    const [mitra, setMitra] = useState([]);

    const getMitra = async () => {
        Axios.get(urllink + "api/getmitra")
        .then((response) => {
            setMitra(response.data);
        })
    }

    useEffect(() => {
        getMitra([]);
    }, []);

    return(
        <div className='mitra-section' id='mitra'>
                <h1 className='mitra-title'>Mitra Kami</h1>
                <div className='logo-mitra-container'>
                  {mitra.map(mitra => {
                    const gambar = urllink + mitra.gambar_mitra;
                    return(
                      <div className='logo-container' key={mitra.id_mitra} style={{backgroundImage: `url(${gambar})`}}/>
                    )
                  })}
                  
            
                </div>
              </div>
    )
}