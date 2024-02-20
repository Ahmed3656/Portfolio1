import React, { useEffect } from "react";

function Welcome() {
    useEffect(() => {
        function typeWriter() {
            const dynamicText = document.getElementById('dynamic-text');
            const myText = ["FullStack Web Developer.", "Frontend Web Developer.", "Backend Web Developer."];
            let textIndex = 0;
            let charIndex = 0;

            function type() {
                if (charIndex < myText[textIndex].length) {
                    dynamicText.innerHTML = myText[textIndex].substring(0, charIndex + 1);
                    charIndex++;
                    setTimeout(type, 200);
                } else {
                    setTimeout(erase, 1400);
                }
            }

            function erase() {
                if (charIndex >= 0) {
                    dynamicText.innerHTML = myText[textIndex].substring(0, charIndex);
                    charIndex--;
                    setTimeout(erase, 50);
                } else {
                    textIndex = (textIndex + 1) % myText.length;
                    setTimeout(type, 500);
                }
            }

            type();
        }

        typeWriter();
    }, []);

    return (
        <div id="home" className="welcome container-fluid">
            <div className="welcome-content container d-md-flex">
                <div className="name col-md-6 col-sm-12 col-12 d-flex flex-column">
                    <p className="welcome-name">Welcome to my website</p>
                    <h1>Hi! I'm Ahmed Amr Mohamed, <span id="dynamic-text"></span></h1>
                </div>
                <div className="image col-md-6 col-sm-12 col-12 ms-lg-3 d-flex justify-content-center">
                    <img src={require('./images/astro1.png')} className="welcome-image" draggable="false" alt="Welcome" />
                </div>
            </div>
        </div>
    );
}

export default Welcome;
