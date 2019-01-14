import React from 'react'
import './css/SubscribeCSS.css'

const Subscribe = () =>{
    return(
        <div className="subscribe">
            <div className="subscribeBox col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <h2>SUBSCRIBE TO MY NEWSLETTER</h2>
                <h4>Get the latest news on the home-ownership, mortgage news and more...</h4>
                <input className="col-lg-8 col-md-8 col-sm-8 col-xs-12  form-control " type='text' name='email' placeholder="Email*"
                       required/>
                <button type="submit" className="btn btn-info  col-lg-3 button4 ">Submit</button>
            </div>
        </div>
    )
}

export default Subscribe;