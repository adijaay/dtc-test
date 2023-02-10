import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Axios from 'axios';
import urllink from "./url";

export default function Partner () {
    const [partner, setPartner] = useState([]);

    const getPartner = async () => {
        Axios.get(urllink + "api/getpartner")
        .then((response) => {
            setPartner(response.data);
        })
    }

    useEffect(()=> {
        getPartner([]);
    }, [])

    return(
        <div className='partner-section'>
                <h1 className='partner-title'>Partner Kami</h1>
                {/* <Marquee className="marquee" speed={50} gradientWidth={"5vw"}> */}
                <div className='logo-mitra-container partner-logo'>
                  {partner.map(partner => {
                    const logo = urllink + partner.gambar_partner;
                    return(
                      <div className='circle-logo' key={partner.id} style={{ backgroundImage: `url(${logo})` }}>
                      </div>
                    )
                  })}
                </div>
                {/* </Marquee> */}
                
        </div>
    )
}