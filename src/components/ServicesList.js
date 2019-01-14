import React from "react";
import Slider from "react-slick";
import './css/ServicesListCSS.css'
import Img1 from './images/img1.jpg'
import Img2 from './images/img3.jpeg'
import Img3 from './images/img4.jpg'
import Img4 from './images/img5.jpg'
import Img5 from './images/img6.jpg'
import Img6 from './images/img7.jpg'
import Img7 from './images/img8.jpg'
import Img8 from './images/img9.jpg'
const ServicesList = () => {

        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
           autoplaySpeed: 2500,
            cssEase: "linear"
        };
        return (
            <div className="serviceSlider ">
                <div className="serviceSliderHead">
                    <h2 className="serviceSliderHeadContent">Mortgage and Loan Services</h2>
                </div>
            <Slider {...settings} className="hidden-sm hidden-xs ">
                <div className="col-lg-4 col-md-4  slider  slide1">
                    <a href="https:/www.google.com/" >   <div className="panel panel-info">
                        <div className="panel-heading">First Mortgage</div>
                        <div className="panel-body"><img src={Img1}  className="img-responsive img-thumbnail sliderImage"/></div>

                    </div></a>
                </div>

                <div className="col-lg-4 col-md-8 col-sm-12 col-xs-12  slider slide2">
                    <a href="https:/www.google.com/" >  <div className="panel panel-danger" id="panel1">
                        <div className="panel-heading"> Second Mortgage</div>
                        <div className="panel-body"><img src={Img2}  className="img-responsive img-thumbnail sliderImage"/></div>

                    </div></a>
                </div>
                <div className="col-lg-4 col-md-8 col-sm-12 col-xs-12  slider slide3">
                    <a href="https:/www.google.com/" >   <div className="panel panel-success">
                        <div className="panel-heading">Home Equity Line Of Credit</div>
                        <div className="panel-body"><img src={Img3} className="img-responsive img-thumbnail sliderImage"/></div>

                    </div></a>
                </div>
                <div className="col-lg-4 col-md-8 col-sm-12 col-xs-12 slider slide4">
                    <a href="https:/www.google.com/" >  <div className="panel panel-warning">
                        <div className="panel-heading">Refinance/Purchase</div>
                        <div className="panel-body"><img src={Img4} className="img-responsive img-thumbnail sliderImage"/></div>

                    </div></a>
                </div>
                <div className="col-lg-4 col-md-8 col-sm-12 col-xs-12  slider slide5">
                    <a href="https:/www.google.com/" >  <div className="panel panel-info">
                        <div className="panel-heading">Business Financing</div>
                        <div className="panel-body"><img src={Img5} className="img-responsive img-thumbnail sliderImage"/></div>

                    </div></a>
                </div>
                <div className="col-lg-4 col-md-8 col-sm-12 col-xs-12  slider slide6">
                    <a href="https:/www.google.com/" >   <div className="panel panel-danger">
                        <div className="panel-heading">Equipment Financing</div>
                        <div className="panel-body"><img src={Img6} className="img-responsive img-thumbnail sliderImage"/></div>

                    </div></a>
                </div>
                <div className="col-lg-4 col-md-8 col-sm-12 col-xs-12  slider slide3">
                    <a href="https:/www.google.com/" > <div className="panel panel-success">
                        <div className="panel-heading">Debt Consolidation</div>
                        <div className="panel-body"><img src={Img7} className="img-responsive img-thumbnail sliderImage"/></div>

                    </div></a>
                </div>
                <div className="col-lg-4 col-md-8 col-sm-12 col-xs-12 slider slide4">
                    <a href="https:/www.google.com/" > <div className="panel panel-warning">
                        <div className="panel-heading">Investment Properties</div>
                        <div className="panel-body"><img src={Img8}  className="img-responsive img-thumbnail sliderImage"/></div>

                    </div></a>
                </div>
            </Slider>
            <div className=" servicesListMobile hidden-lg hidden-md ">
                    <div className="col-sm-6 col-xs-12 col-md-4  sec">
                        <span className="fa fa-home icon2 "></span>
                        <h3>First Mortgage</h3>
                    </div>
                    <div className="col-sm-6 col-xs-12 col-md-4 sec">
                        <span className="fa fa-bank icon2"></span>
                        <h3>Second Mortgage</h3>
                    </div>
                    <div className="col-sm-6 col-xs-12 col-md-4 sec">
                        <span className="fa fa-bell icon2"></span>
                        <h3>Home Equity Line Of Credit</h3>
                    </div>
                    <div className="col-sm-6 col-xs-12 col-md-4 sec">
                        <span className="fa fa-bolt icon2"></span>
                        <h3>Refinance/Purchase</h3>
                    </div>
                    <div className="col-sm-6 col-xs-12 col-md-4 sec">
                        <span className="fa fa-building icon2"></span>
                        <h3>Business Financing</h3>
                    </div>
                    <div className="col-sm-6 col-xs-12 col-md-4 sec">
                        <span className="fa fa-cubes icon2"></span>
                        <h3>Equipment Financing</h3>
                    </div>

                </div>

            </div>
        );
    }
export default ServicesList;