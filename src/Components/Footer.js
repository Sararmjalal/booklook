import React from "react";
import "./Footer.css"
import logo from "../Uploads/FooterLogo.png"

function Footer() {
    return(
        <div>
        <div className="footerContainer">
                        <div className="columnOne">

            </div>
            <div className="columnTwo">
                <img src={logo} width="200px"></img>
                <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                    mollit anim id est laborum.</p>
                    <div className="devider"></div>
                    <a href="/about">
                    <button className="aboutUsButton">Know more About Us</button>
                    </a>
            </div>
        </div>
        <div className="copyRight">
            <p className="copyRightText">Designed by Sara Jalal. All Rights Reserved.</p>
        </div>
        </div>
    )
}

export default Footer