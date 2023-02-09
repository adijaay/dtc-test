import Axios from "axios";
import { useEffect, useState } from "react"
import Maps from "./map";
import urllink from "./url";

export default function Office () {
    const [office, setOffice] = useState([]);
    
    const getOffice = async () => {
        Axios.get(urllink + "api/getoffice").then((response) => {
            setOffice(response.data);
        })
    }

    useEffect(() => {
        getOffice([]);
        console.log(office);
    }, []);
    
    
    return(
        <div className='office-section' id='office'>
                <h1 className='title-office-section'>Sales Office</h1>
                <div className='maps-office-section'>
                  <Maps/>
                </div>
                <div className='office-detail-section'>
                  <div className='office-detail-text-container'>
                    {office.map (office => {
                      return(
                          <div className='office-city-detail-container'>
                            <h1 className='office-city'>{office.kota}</h1>
                            <h2 className='office-road'>{office.jalan}</h2>
                          </div>
                      )
                    })}
                  </div>
                  {/* <div className='line'/> */}
                  {/* <div className='office-detail-text-container'>
                    {office.slice(`${Object.keys(office).length / 2 + .5 }`, `${Object.keys(office).length}`).map (office => {
                      return(
                        <div className='office-city-detail-container'>
                          <h1 className='office-city'>{office.kota}</h1>
                          <h2 className='office-road'>{office.jalan}</h2>
                        </div>
                      )
                    })}
                    
                  </div> */}
                </div>
              </div>
    )
}