const ul = document.querySelector('ul');
const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
ingredients.forEach(element => {
    let li = document.createElement('li');
    li.setAttribute('class', 'item');
    li.textContent = element;
    ul.appendChild(li);
});
