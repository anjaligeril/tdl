import React from 'react'
import './css/BannerEmailPhoneCSS.css'

const BannerEmailPhone = () =>{
    return(
        <div className="banner1">
        <div className="col-lg-7 col-md-7 col-sm-7  content col-xs-12 hidden-sm hidden-xs">
            <h2>Same Day Pre-Approvals and Quick Closings</h2>
            <h3>Use your Home to get a Loan. Contact us to get started today.</h3>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12 buttons">
            <button className=" buttonemail btn btn-danger"><i className="fa fa-envelope icon1" ></i> info@tdlmortgages.bellnet.ca</button><br/>
            <button className=" buttonemail btn btn-success"><i className="fa fa-phone icon1" ></i> 905-345-3123</button>
        </div>
        </div>
    )
}

export default BannerEmailPhone;