const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeDisplay = document.getElementById("size");
const colorPicker = document.getElementById("color");
const clearBtn = document.getElementById("clear-btn");
const eraserBtn = document.getElementById("eraser-btn");
const brushBtn = document.getElementById("brush-btn");
const settingsBtn = document.getElementById("settings-btn");
const downloadBtn = document.getElementById("download-btn");

/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");

let size = 10; //brush size
let isMouseDown = false;
let color = "black";
let prevColor = color;
let x = undefined;
let y = undefined;
let width = 700;
let height = 700;

ctx.lineWidth = size;
canvas.width = width;
canvas.height = height;
//values for drawing lines

downloadBtn.addEventListener("click", () => {
  const img = canvas.toDataURL("image/png");
  let data = '<img src="'+img+'"/>'
  var tab = window.open('about:blank', '_blank');
  tab.document.write(data);
 // tab.document.close();
})

settingsBtn.addEventListener("click", () => {

  displayCurrentSettings();
  togglePopup();
})

// drawing(swipe) event listeners
canvas.addEventListener("mousedown", (e) => {
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
  if (size < 40) {
    size += 2;
    updateSizeDisplay();
  }
});

decreaseBtn.addEventListener("click", () => {
  if (size > 2) {
    size -= 2;
    updateSizeDisplay();
  }
});

colorPicker.addEventListener("change", (e) => {
  color = e.target.value;
  prevColor = color;
  ctx.stroke;
});

clearBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

eraserBtn.addEventListener("click", () => {
  color = "#ffffff";
});

brushBtn.addEventListener("click", () => {
  color = prevColor;
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
