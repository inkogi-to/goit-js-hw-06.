const form = document.forms[0];
const button = document.forms[0].elements[2];
const email = document.forms[0].elements[0];
const password = document.forms[0].elements[1]

button.addEventListener('click', outputValue)

function outputValue(e) {
    e.preventDefault();
    let newUser = {}

    if (email.value && password.value) {
        newUser = {email: email.value, password: password.value}
        console.log(newUser)

    } else {
        alert('Всі поля повинні бути заповнені!!!')
    }

    form.reset()
}
