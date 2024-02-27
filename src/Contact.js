import React from "react";

function Contact(){
    return(
<div className="contact-container container-fluid">
    <div className="container">
        <div className="row">
            <div className="contact-img col-lg-6 col-sm-12 col-12 order-lg-1 order-2 m-auto"><img src={require('./images/contact.png')}></img></div>
            <div className="contact-info col-lg-6 col-sm-12 col-12 order-lg-2 order-1">
                <h2 className="text-light">Get in Touch</h2>
                <form action="https://formsubmit.co/87fb6613dd4ae2ad36e083c8ea730b37" method="POST">
                    <div className="contact-inputs d-flex row">
                        <input type="text" className="contact-input" placeholder="First Name" name="First Name" required></input>
                        <input type="text" className="contact-input" placeholder="Last Name" name="Last Name" required></input>
                        <input type="text" className="contact-input" placeholder="Subject" name="Subject" required></input>
                        <input type="number" className="contact-input no-spinner" placeholder="Phone No." name="Phone No." required></input>
                    </div>
                    <textarea className="contact-msg" placeholder="Message" name="Body" required></textarea>
                    <div className="submit bg-light d-flex justify-content-around align-items-center p-3">
                        <h3 className="col-lg-6">Please enter you Email</h3>
                        <div className="contact-submit-container col-lg-6">
                        <input type="email" className="contact-submit" placeholder="Email"></input>
                        <button type="submit" className="contact-submit-btn">Send</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
</div>
    )
}

export default Contact