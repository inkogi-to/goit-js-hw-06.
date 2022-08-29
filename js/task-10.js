const number = document.querySelector('[type=number]')
const create = document.querySelector('[data-create]')
const destroy = document.querySelector('[data-destroy]')
const box = document.querySelector('#boxes')

create.addEventListener('click', createArrayElements)
destroy.addEventListener('click', destroyArrayElements)

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let arrayValue = []
let addSizeBlock = 10
let sizeDiv = 20

function createArrayElements() {

    for (let i = 1; i <= number.value; i++) {
        let element = document.createElement('div')
        box.appendChild(element)
        arrayValue.push(element)

    }
    arrayValue.forEach((element, index) => {
        sizeDiv += addSizeBlock
        element.style.backgroundColor = getRandomHexColor()
        element.style.width = sizeDiv + 'px'
        element.style.height = sizeDiv + 'px'

    })
}

function destroyArrayElements() {
    box.innerHTML = ''
    number.value = ''
    arrayValue.length = 0
    sizeDiv = 20

}

