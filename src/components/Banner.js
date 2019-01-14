import React from 'react'
import './css/BannerCSS.css'
import Logo from "./images/logo.png";

const Banner = () =>{
    return(
        <div className="header">
             <div className="banner">
                <section className="hero">
                    <div className="hero-container">
                        <div className=" welcomeContent col-lg-8 col-md-12 hidden-xs">

                            <div id="myCarousel" className="carousel slide " data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="item active">
                                        <h3>Having Trouble Securing a Loan for Your First Home?</h3>
                                        <h5>Even if you have 15 to 20% of the property value for down payment,
                                            it may not be enough to quality for a loan, under the new rules,
                                            from a traditional lender such as a bank. As of January 1, 2018,
                                            new regulations will be in place which will make it harder for first
                                            time homebuyers to secure the loan they need.</h5>
                                    </div>

                                    <div className="item">
                                        <h3>Having Trouble Securing a Loan for Your First Home?</h3>
                                        <h5>Even if you have 15 to 20% of the property value for down payment,
                                            it may not be enough to quality for a loan, under the new rules,
                                            from a traditional lender such as a bank. As of January 1, 2018,
                                            new regulations will be in place which will make it harder for first
                                            time homebuyers to secure the loan they need.</h5>
                                    </div>

                                    <div className="item">
                                        <h3>Having Trouble Securing a Loan for Your First Home?</h3>
                                        <h5>Even if you have 15 to 20% of the property value for down payment,
                                            it may not be enough to quality for a loan, under the new rules,
                                            from a traditional lender such as a bank. As of January 1, 2018,
                                            new regulations will be in place which will make it harder for first
                                            time homebuyers to secure the loan they need.</h5>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className=" col-lg-4 col-md-12 col-sm-12 col-xs-12 quickApply">
                            <div className="form-group">
                                <h4 className="formHead"> REQUEST FREE CONSULTATION </h4>
                                <input className="form-control formInput " type='text' name='name' placeholder="First Name*"
                                       required/>
                                <input className="form-control formInput " type='text' name='email' placeholder="Email*"
                                       required/>
                                <input className="form-control formInput" type='text' name='phone' placeholder="Phone No*"
                                       required/>
                                <input className="form-control formInput" type='text' name='propertyValue' placeholder="Estimated Property Value"
                                       />
                                <input className="form-control formInput" type='text' name='requiredAmount' placeholder="Amount Required"
                                />
                                <input className="form-control formInput" type='text' name='time' placeholder="Best Time to call"
                                />
                                <textarea className="form-control formInput" rows="5" id="comment" placeholder="Message"></textarea>
                                <button type="submit" className="btn btn-info ">Submit</button>
                            </div>
                        </div>
                    </div>

                </section>
                 <div className="callbutton hidden-sm hidden-xs">
                     <a href="tel:9089765456">Call 987654324</a>
                 </div>
            </div>
        </div>
    )
}

export default Banner;