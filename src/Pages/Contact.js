import React from "react";
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";
import phone from "../Uploads/icons/phone.png"
import email from "../Uploads/icons/email.png"
import location from "../Uploads/icons/location.png"
import instagram from "../Uploads/icons/instagram.png"
import linkdin from "../Uploads/icons/linkdin.png"
import telegram from "../Uploads/icons/telegram.png"

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
  });
  
  L.Marker.prototype.options.icon = DefaultIcon;

const Contact = () => {

    return(
        <div className="container">
        <div>
            <h1 className="title">Contact Us</h1>
            <p className="titleDescription"><a href="/">Home</a> | <a href="/contact">Contact</a></p>
        </div>
        <div className="devider"></div>
        <div className="about">
                <div className="mapContainer">
                        <MapContainer center={[46.09273, -88.64235]} zoom={15} scrollWheelZoom={false}>
                        <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker icon={DefaultIcon} position={[46.09273, -88.64235]}>
                        </Marker>
                        </MapContainer>
                </div>  
                <div className="contactContainer">
                    <h1 className="contactTitle">Get in Touch with Us</h1>
                    <ul>
                        <li className="contactLi"><a href="tel:1234567890"><img src={phone} className="contactIcon"></img> 1234567890 </a></li>
                        <li className="contactLi"><a href="#"><img src={location} className="contactIcon"></img> Iron River Twon</a> </li>
                        <li className="contactLi"><a href="mailto:info@booklook.com"><img src={email} className="contactIcon"></img> info@booklook.com</a> </li>
                        <li className="contactLi"><a href="#"><img src={instagram} className="contactIcon"></img> BookLook</a> </li>
                        <li className="contactLi"><a href="#"><img src={linkdin} className="contactIcon"></img> BookLook</a> </li>
                        <li className="contactLi"><a href="#"><img src={telegram} className="contactIcon"></img> BookLook</a> </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Contact