import React from 'react'
import './css/BannerApplyCSS.css'

const BannerApply = () =>{
    return(
        <div className="banner3">
            <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12 banner3Content">
                <h2 className="">Your Pre-Approval Done In No Time!</h2>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 button3 banner3Content">
                <buttn className="banner3Button ">
                    <a href="#">Apply Now</a>
                </buttn>
            </div>
        </div>
    )
}

export default BannerApply;