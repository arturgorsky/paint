const canvas = document.getElementById("canvas");

/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");

let size = 5; //paint size
let x = 50;
let y = 50;
let isMouseDown = false;

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

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fill();
}

function draw() {
  // ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
  drawCircle(x, y);
  requestAnimationFrame(draw);
}
