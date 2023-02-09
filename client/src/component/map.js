import { render } from '@testing-library/react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import './map.css';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Axios from 'axios'
import { useEffect, useState } from 'react';
import urllink from './url';

export default function Maps() {
    const [lat, setlatCenter] = useState("-3.7717791");
    const [long, setlongCenter] = useState("105.7297504");

    // setCenter([-3.7717791 ,105.7297504]);
    const [office, setOffice] = useState([]);
    const Icon = new L.Icon({
        iconUrl: require('../assets/marker.png'),
        iconSize: new L.Point(50, 60),
        iconAnchor: [25, 60]
    });

    const getOffice = async () => {
        await Axios.get(urllink + "api/getoffice").then((response) => {
            setOffice(response.data);
        })
    }

    // const getCenter = async (e, latitude, longitude) => {
    //     e.preventDefault();
    //     setlatCenter(latitude);
    //     setlongCenter(longitude);
    //     console.log(lat);
    // }

    useEffect(() => {
        getOffice([]);
        console.log(office);
    }, []);

        return(
            <MapContainer
            center={[lat, long]}
            zoom={5}
            style={{ width: '100%', height: '100%' }}
          >
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {office.map((val) => {
                return(
                    <Marker position={[val.latitude, val.longitude]} icon={Icon}>
                        <Popup>
                            {val.kota}
                        </Popup>
                    </Marker>
                )
            })}
          </MapContainer>

        
    );
       
}