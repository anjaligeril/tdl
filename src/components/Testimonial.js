import React from 'react'
import './css/TestimonialCSS.css'

const Testimonial = () =>{
    return(
        <div className="testimonial">
            <div className="testiContent col-lg-6 col-md-6 col-sm-6 col-xs-10">
                <div id="myCarousel1" className="carousel slide " data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="item active">
                            <h1>What Our Clients Say</h1>
                            <p>" I was able to ask question about the entire home buying process
                                and get quick, honest, unbiased advice. Even after our closing
                                my agent made her self available to answer our questions and alleviate
                                our worries. I really appreciated her email on closing day wishing us luck
                                and congratulating us. "</p>
                            <h3>Jane</h3>
                        </div>

                        <div className="item">
                            <h1>What Our Clients Say</h1>
                            <p>" I was able to ask question about the entire home buying process
                                and get quick, honest, unbiased advice. Even after our closing
                                my agent made her self available to answer our questions and alleviate
                                our worries. I really appreciated her email on closing day wishing us luck
                                and congratulating us. "</p>
                            <h3>Jane</h3>
                        </div>

                        <div className="item">
                            <h1>What Our Clients Say</h1>
                            <p>" I was able to ask question about the entire home buying process
                                and get quick, honest, unbiased advice. Even after our closing
                                my agent made her self available to answer our questions and alleviate
                                our worries. I really appreciated her email on closing day wishing us luck
                                and congratulating us. "</p>
                            <h3>Jane</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial;