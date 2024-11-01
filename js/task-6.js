

const input = document.querySelector("input");
const btnOne = document.querySelector("button[data-create]");
const btnTwo = document.querySelector("button[data-destroy]");
const box = document.querySelector("#boxes");
let sizes = 30;
btnOne.addEventListener("click", changeSize);
btnTwo.addEventListener("click", () => {
  
  input.value = "";
  destroyBoxes();
})
function changeSize () {
if (input.value < 1 || input.value > 100) {
  return;
}
createSquare (input.value);
input.value = "";
}

function destroyBoxes() {
  box.innerHTML = "";
  sizes = 30;
}



function createSquare (amount) {
  destroyBoxes();
  let boxesHtml = '';
  for (let i = 0; i < amount; i++) {
    boxesHtml += `<div style="width: ${sizes}px; height: ${sizes}px; background-color: ${getRandomHexColor()};"></div>`;
    sizes += 10;
  }
  box.innerHTML = boxesHtml;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

