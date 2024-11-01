

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
  sizes = 10;
}



function createSquare (amount) {
  destroyBoxes();
  for (let i = 0; i < amount; i++) {
    const square = document.createElement("div");
    square.style.width = `${sizes}px`;
    square.style.height = `${sizes}px`;
    square.style.backgroundColor = getRandomHexColor();
    
    box.append(square);
    sizes += 10;
  }
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

