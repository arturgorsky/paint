const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeDisplay = document.getElementById("size");
const colorPicker = document.getElementById("color");
const clearBtn = document.getElementById("clearBtn");

/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");

let size = 10; //brush size
let isMouseDown = false;
let color = 'black';
let x = undefined;
let y = undefined;

ctx.lineWidth = size;
//values for drawing lines


// drawing(swipe) event listeners
canvas.addEventListener("mousedown", () => {
  isMouseDown = true;

  x = e.layerX;
  y = e.layerY;
});

canvas.addEventListener("mouseup", () => {
  isMouseDown = false;

  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isMouseDown) {
    const x2 = e.layerX;
    const y2 = e.layerY;
    drawCircle(x, y);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
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
  color = e.target.value;


  ctx.stroke;
})

clearBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
})


function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}


function drawLine(x1, y1, x2, y2) {
  ctx.lineWidth = size * 2;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.stroke();
}

function updateSizeDisplay() {
  sizeDisplay.innerText = size;
}