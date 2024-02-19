import React from "react";

function Profile() {
    return(
        <div className="profile-header">
            <h2>Profile</h2>
            <p>Here are my projects and information about me</p>
            <div class="btn-group group-btns" role="group" aria-label="Basic example">
                <button type="button" class="profile-btns lft-btn">Projects</button>
                <button type="button" class="profile-btns">Get in Touch</button>
                <button type="button" class="profile-btns right-btn">About Me</button>
            </div>
        </div>
    )
}

export default Profile