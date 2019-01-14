import React from 'react'
import './css/MainPageContactCSS.css'
import Logo from "./images/logo1.png";

const MainPageContact = () =>{
    return(
        <div className="contact1">
            <div className="contact11">
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 name">
                <a className="businessName" href="#"><span className="t">T</span><span className="dl">DL</span> MORTGAGES</a>
                <img src={Logo} height="70px" className="businessLogo"/>
                <h3>SURENDER TANDAL</h3>
                <h4>Principal Broker / Owner</h4>
                <h5>Lic #M08008481</h5>

            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 address">
                <span className="icon3 fa fa-mobile-phone"> </span><br/>
                <span className="icon3 ">  416-704-7641</span><br/>
                <span className="icon3 fa fa-phone"> </span><br/>
                <span className="icon3">  905-230-7017</span><br/>
                <span className="icon3 fa fa-envelope"> </span><br/>
                <span className="icon3 ">  info@tdlmortgages.com</span><br/>
                <span className="icon3">  tdlmortgages@bellnet.ca</span><br/>
                <span className="icon3 fa fa-home"> </span><br/>
                <span className="icon3 ">  338 Queen Street E</span><br/>
                <span className="icon3 ">Suite 210</span><br/>
                <span className="icon3">Brampton, ON, L6V1C4</span>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 quickLinks">
                <h3>Quick Links</h3>
            <ul className="list-unstyled">
                <li><a>Home</a></li>
                <li><a>About Us </a></li>
                <li><a>Our Process</a></li>
                <li><a>Services</a></li>
                <li><a>FAQ</a></li>
                <li><a>Contact</a></li>
            </ul>
            </div>
            </div>
        </div>
    )
}

export default MainPageContact;