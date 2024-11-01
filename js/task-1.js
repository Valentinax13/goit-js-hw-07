

const numbers = document.querySelectorAll("li.item");
const numbersLength = numbers.length;

console.log(`Number of categories: ${numbersLength}`);


for (const category of numbers) {
        console.log("Category: ", category.firstElementChild.textContent);
        console.log("Elements: ", category.lastElementChild.children.length);
      }









