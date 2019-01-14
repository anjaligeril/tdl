import React ,{Component} from 'react'
import BannerEmailPhone from '../components/BannerEmailPhone'
import ServicesList from '../components/ServicesList'
import BannerIWant from '../components/BannerIWant'
import Testimonial from '../components/Testimonial'
import BannerApply from '../components/BannerApply'
import Subscribe from '../components/Subscribe'
import MainPageContact from '../components/MainPageContact'
import CopyRight from '../components/CopyRight'
import Banner from "../components/Banner";
import './css/MainPageCSS.css'
import Logo from "../components/images/logo.png";
import {Link} from 'react-router-dom'
import { Switch, Router, Route } from 'react-router-dom'
import AboutUs from '../containers/AboutUs'
import ApplyNow from '../containers/ApplyNow'
import Contact from '../containers/Contact'
import FAQ from '../containers/FAQ'
import OurProcess from '../containers/OurProcess'
import Services from '../containers/Services'


class MainPage extends Component {
    render(){
        return(
            <div>
                <div className="navi">

                    <nav className="navbar ">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle glyphicon glyphicon-menu-hamburger" data-toggle="collapse" data-target="#myNavbar">

                                </button>

                                <a className="navbar-brand" href="#"><span className="t">T</span><span className="dl">DL</span> MORTGAGES</a>
                                <img src={Logo} height="70px" className=""/>
                            </div>
                            <div className="collapse navbar-collapse navbar-right" id="myNavbar">
                                <ul className="nav navbar-nav">
                                    <li><Link to={"/"} >Home</Link></li>
                                    <li><Link to={"/AboutUs"} >About Us</Link></li>
                                    <li><Link to={"/OurProcess"} >Our Process</Link></li>
                                    <li><Link to={"/Services"} >Services</Link></li>
                                    <li><Link to={"/FAQ"} >FAQ</Link></li>
                                    <li><Link to={"/Contact"} >Contact</Link></li>
                                    <li><button className="btn btn-default"><Link to={"/ApplyNow"} >Apply Now</Link></button></li>
                                </ul>

                            </div>
                        </div>

                    </nav>

                   <div>

                        <Route path="/" exact component={MainPage}/>
                        <Route path="/AboutUs" exact component={AboutUs}/>
                        <Route path="/OurProcess" exact component={OurProcess}/>
                        <Route path="/Services" exact component={Services}/>
                        <Route path="/FAQ" exact component={FAQ}/>
                        <Route path="/Contact" exact component={Contact}/>
                        <Route path="/ApplyNow" exact component={ApplyNow}/>
                   </div>
                </div>
                <Banner/>
                <BannerEmailPhone/>
                <ServicesList/>
                <BannerApply/>
                <Testimonial/>
                <BannerIWant/>
                <Subscribe/>
                <MainPageContact/>
                <CopyRight/>
                <a id="back2Top" title="Back to top" href="#">&#10148;</a>

            </div>
            )
        }
}

export default MainPage;