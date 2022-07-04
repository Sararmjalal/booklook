import React from "react";
import pic1 from "../Uploads/about/1.jpg"
import pic2 from "../Uploads/about/2.jpg"
import pic3 from "../Uploads/about/3.jpg"


const About = () => {

    return(
        <div className="container">
            <div>
                <h1 className="title">About Us</h1>
                <p className="titleDescription"><a href="/">Home</a> | <a href="/about">About</a></p>
            </div>
            <div className="devider"></div>
            <div className="about">
                <div className="aboutImgContainer">
                    <img src={pic1} className="aboutImg" ></img>
                </div>  
                <div className="aboutTextContainer">
                    <h1 className="aboutTextTitle">Who we are</h1>
                    <p className="aboutText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        
            <div className="about">
            <div className="aboutTextContainer2">
                    <h1 className="aboutTextTitle2">What we do</h1>
                    <p className="aboutText2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="aboutImgContainer">
                    <img src={pic2} className="aboutImg2" ></img>
                </div>  

            </div>

            <div className="about">
                <div className="aboutImgContainer">
                    <img src={pic3} className="aboutImg" ></img>
                </div>  
                <div className="aboutTextContainer">
                    <h1 className="aboutTextTitle">Work with Us</h1>
                    <p className="aboutText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            
        </div>

    )
}

export default About