import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Profile() {
    const navigate = useNavigate();
    const location = useLocation();
    const [focusedButton, setFocusedButton] = useState(null);

    const projectsButtonRef = useRef(null);
    const contactButtonRef = useRef(null);
    const aboutButtonRef = useRef(null);

    const focusButton = (buttonRef) => {
        if (buttonRef.current) {
            buttonRef.current.focus();
            setFocusedButton(buttonRef);
        }
    };

    useEffect(() => {
        switch (location.pathname) {
            case "/Projects":
                focusButton(projectsButtonRef);
                break;
            case "/Contact":
                focusButton(contactButtonRef);
                break;
            case "/AboutMe":
                focusButton(aboutButtonRef);
                break;
            default:
                break;
        }
    }, [location.pathname]);

    return (
        <div className="profile-header">
            <h2>Profile</h2>
            <p>Here are my projects and information about me</p>
            <div className="btn-group group-btns" role="group" aria-label="Basic example">
                <button
                    ref={projectsButtonRef}
                    type="button"
                    onClick={() => {
                        navigate("/Projects");
                        focusButton(projectsButtonRef);
                    }}
                    className={`profile-btns lft-btn projects-btn ${focusedButton === projectsButtonRef ? 'focused' : ''}`}
                >
                    Projects
                </button>
                <button
                    ref={contactButtonRef}
                    type="button"
                    onClick={() => {
                        navigate("/Contact");
                        focusButton(contactButtonRef);
                    }}
                    className={`profile-btns contact-btn ${focusedButton === contactButtonRef ? 'focused' : ''}`}
                >
                    Get in Touch
                </button>
                <button
                    ref={aboutButtonRef}
                    type="button"
                    onClick={() => {
                        navigate("/AboutMe");
                        focusButton(aboutButtonRef);
                    }}
                    className={`profile-btns right-btn about-btn ${focusedButton === aboutButtonRef ? 'focused' : ''}`}
                >
                    About Me
                </button>
            </div>
        </div>
    );
}

export default Profile;
