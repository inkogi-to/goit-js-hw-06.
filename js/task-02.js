const ul = document.querySelector('ul');
const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const createElementLi = (name) => {
    let li = document.createElement('li');
    li.setAttribute('class', 'item');
    li.textContent = name;
    return li
}
let element = ingredients.map(element => createElementLi(element))
ul.append(...element)