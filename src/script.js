
    let dynamicText = document.querySelector('#dynamic-text');
    let myText = ["FullStack Web Developer", "Frontend Web developer", "Backend Web Developer"];
    let textIndex = 0;
    let charIndex = 0;

    function typeWriter() {
        if (charIndex < myText[textIndex].length) {
            dynamicText.innerHTML += myText[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 100); // Typing speed
        } else {
            setTimeout(eraseText, 1000); // Wait before erasing
        }
    }

    function eraseText() {
        if (charIndex >= 0) {
            dynamicText.innerHTML = myText[textIndex].substring(0, charIndex);
            charIndex--;
            setTimeout(eraseText, 50); // Erasing speed
        } else {
            textIndex = (textIndex + 1) % myText.length;
            setTimeout(typeWriter, 500); // Wait before typing next text
        }
    }

    typeWriter(); // Start typing initially

