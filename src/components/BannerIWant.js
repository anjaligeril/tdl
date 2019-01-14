import React from 'react'
import './css/BannerIWantCSS.css'

const BannerIWant = () =>{
    return(
        <div className="banner2 row-divided">

            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6  house ">
            <h1 className="buyHouse">I Want to Buy a House<span className="dot">.</span></h1>
                <buttn className="banner2Button ">
                    <a href="#">Apply Now</a>
                </buttn>
            </div>
            <i className="vertical-divider"/>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6  house">
                <h1 className="refinanceHouse">I Want to Refinance My House<span className="dot">.</span></h1>
                <buttn className="banner2Button ">
                    <a href="#">Pay Off Debt</a>
                </buttn>
            </div>

        </div>
    )
}

export default BannerIWant;