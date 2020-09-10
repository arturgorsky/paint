const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeDisplay = document.getElementById("size");
const colorPicker = document.getElementById("color");

/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");

let size = 10; //brush size
let isMouseDown = false;
let color = 'black';
let x = undefined;

ctx.lineWidth = size;
//values for drawing lines


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
});

decreaseBtn.addEventListener("click", () => {
  if(size > 2) {
    size -= 2;
    updateSizeDisplay();
  }
});

colorPicker.addEventListener("change", (e) => {
  let color = e.target.value;
  ctx.fillStyle = color;
})


function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fill();
}


function drawLine(x1, y1, x2, y2) {
  ctx.lineWidth = size;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function updateSizeDisplay() {
  sizeDisplay.innerText = size;
}