const button = document.querySelector('.change-color');
const span = document.querySelector('.color');

button.addEventListener('click', bgColors)

function bgColors() {
    let color = getRandomHexColor()
    span.textContent = color
    document.body.style.backgroundColor = color

}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

