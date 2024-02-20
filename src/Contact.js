import React from "react";

function Contact(){
    return(
<div className="contact-container container-fluid">
    <div className="container">
        <div className="row">
            <div className="contact-img col-lg-6 col-sm-12 col-12 order-lg-1 order-2 m-auto"><img src={require('./images/contact.png')}></img></div>
            <div className="contact-info col-lg-6 col-sm-12 col-12 order-lg-2 order-1">
                <h2 className="text-light">Get in Touch</h2>
                <form className="">
                    <div className="contact-inputs d-flex row">
                        <input type="text" className="contact-input" placeholder="First Name"></input>
                        <input type="text" className="contact-input" placeholder="Last Name"></input>
                        <input type="text" className="contact-input" placeholder="Subject"></input>
                        <input type="number" className="contact-input no-spinner" placeholder="Phone No."></input>
                    </div>
                    <textarea className="contact-msg" placeholder="Message"></textarea>
                </form>
            </div>
        </div>
    </div>
    <div className="submit bg-light d-flex justify-content-around align-items-center p-3">
        <h3 className="col-lg-6">Submit message here</h3>
        <div className="contact-submit-container col-lg-6">
        <input type="email" className="contact-submit" placeholder="Email"></input>
        <button className="contact-submit-btn">Submit</button>
        </div>
    </div>
</div>
    )
}

export default Contact