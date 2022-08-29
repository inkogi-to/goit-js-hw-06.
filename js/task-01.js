const category = document.querySelector("ul#categories");

console.log(
    `Number of categories:${category.querySelectorAll("li.item").length}\n\n`
);

category.querySelectorAll("li.item")
    .forEach((element) => {
        console.log(`Category:${element.querySelector("h2").textContent}`);

        console.log(`Elements:${element.querySelectorAll("ul li").length}\n\n`);
    });
