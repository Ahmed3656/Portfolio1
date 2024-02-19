import React from "react";

function Footer() {
    return(
        <footer className="d-flex justify-content-between align-items-end text-light">
            <div className="footer-logo">
                <h2>Portfolio</h2>
            </div>
            <div className="footer-copyright">
                <a href="https://www.linkedin.com/in/ahmed-amr3656/" className="header-icon-link" target="_blank"><i className="fab fa-linkedin-in header-icon"></i></a>
                <a href="https://github.com/Ahmed3656" className="header-icon-link" target="_blank"><i className="fab fa-github header-icon"></i></a>
                <a href="#" className="header-icon-link"><i className="fab fa-facebook-f header-icon"></i></a>
                <p>-- Copyrights &copy; 2024 -- All Rights Reserved by Ahmed Amr Mohammed</p>
            </div>
        </footer>
    )
}

export default Footer