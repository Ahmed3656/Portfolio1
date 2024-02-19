import React from "react";

function Header(){
    return(
        <nav className="navbar navbar-expand-lg fixed-top bg-black">
            <div className="container">
                <span className="portfolio-title navbar-brand text-light">Portfolio</span>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="header-item nav-item">
                        <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                      </li>
                      <li className="header-item nav-item">
                        <a className="nav-link text-light" href="#">Skills</a>
                      </li>
                      <li className="header-item nav-item">
                        <a className="nav-link text-light" href="#">Projects</a>
                      </li>
                    </ul>
                    <div className="d-flex flex-column flex-lg-row">
                        <button className="header-button btn btn-outline-light mb-3 mb-lg-0 ms-lg-3 order-lg-2 ">Let's Connect</button>
                        <div className="order-lg-1 m-auto">
                            <a href="https://www.linkedin.com/in/ahmed-amr3656/" className="header-icon-link" target="_blank"><i className="fab fa-linkedin-in header-icon"></i></a>
                            <a href="https://github.com/Ahmed3656" className="header-icon-link" target="_blank"><i className="fab fa-github header-icon"></i></a>
                            <a href="#" className="header-icon-link"><i className="fab fa-facebook-f header-icon"></i></a>
                        </div>
                    </div>
                </div>
                
            </div>   
        </nav>
    )
}

export default Header