const input = document.querySelector('#validation-input')
let validationLength = input.dataset.length * 1

input.addEventListener('blur', (event) => {
    let validationInput = input.value.length
    if (validationLength === validationInput) {
        input.classList.remove('invalid')
        input.classList.add('valid')
    } else {
        input.classList.remove('valid')
        input.classList.add('invalid')
    }
})

