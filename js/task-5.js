const btn = document.querySelector(".change-color");
btn.addEventListener("click", changeclr);
  
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
    
}


  function changeclr (event) {
  const body = document.querySelector("body");
  const span = document.querySelector(".color");
  const color = getRandomHexColor();
  body.style.background = color;
  span.textContent = color;

  
  
}







