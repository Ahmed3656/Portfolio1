import React, { useEffect, useRef } from "react";

import { useNavigate } from "react-router-dom";

function Profile() {
    const navigate = useNavigate()

    const buttonRef = useRef(null);

    useEffect(() => {
        buttonRef.current.focus();
    }, []);
    return(
        <div className="profile-header">
            <h2>Profile</h2>
            <p>Here are my projects and information about me</p>
            <div class="btn-group group-btns" role="group" aria-label="Basic example">
                <button ref={buttonRef} type="button" onClick={()=> navigate("/Projects")} class="profile-btns lft-btn projects-btn">Projects</button>
                <button type="button" onClick={()=>navigate("/Contact")} class="profile-btns contact-btn">Get in Touch</button>
                <button type="button" onClick={()=> navigate("/AboutMe")} class="profile-btns right-btn about-btn">About Me</button>
            </div>
        </div>
    )
}

export default Profile