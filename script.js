const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeDisplay = document.getElementById("size");

/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");


// Some hardcoded values
let size = 10; //paint size
let x = 50;
let y = 50;
let isMouseDown = false;


// drawing(swipe) event listeners
canvas.addEventListener("mousedown", () => {
  isMouseDown = true;
});

canvas.addEventListener("mouseup", () => {
  isMouseDown = false;
});

canvas.addEventListener("mousemove", (e) => {
  if (isMouseDown) {
    const x = e.layerX;
    const y = e.layerY;
    drawCircle(x, y);
  }
});

//Toolbox event listeners
increaseBtn.addEventListener("click", () => {
  if(size < 40) {
    size += 2;
    updateSizeDisplay();
  }
})

decreaseBtn.addEventListener("click", () => {
  if(size > 2) {
    size -= 2;
    updateSizeDisplay();
  }
})

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fill();
}

function updateSizeDisplay() {
  sizeDisplay.innerText = size;
}
