// Typing effect
const textElement = document.getElementById("typingText");
const fullText = textElement.innerHTML;
let index = 0;

textElement.innerHTML = "";  // Clear before typing

function typeText() {
    if (index < fullText.length) {
        textElement.innerHTML += fullText.charAt(index);
        index++;
        setTimeout(typeText, 40); // typing speed (40ms per letter)
    }
}

window.onload = typeText;
