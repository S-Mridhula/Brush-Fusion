// Canvas Setup
const canvas = document.getElementById("paintCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.6;

// Variables
let painting = false;
let brushColor = "#000000";
let brushSize = 2;

// Start drawing
function startPosition(e) {
  painting = true;
  draw(e);
}

// Stop drawing
function stopPosition() {
  painting = false;
  ctx.beginPath();
}

// Draw on the canvas
function draw(e) {
  if (!painting) return;

  ctx.lineWidth = brushSize;
  ctx.lineCap = "round";
  ctx.strokeStyle = brushColor;

  ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

// Clear Canvas
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Export Canvas as Image
function exportCanvas() {
  const link = document.createElement("a");
  link.download = "my_drawing.png";
  link.href = canvas.toDataURL();
  link.click();
}

// Update Brush Color
document.getElementById("colorPicker").addEventListener("change", (e) => {
  brushColor = e.target.value;
});

// Update Brush Size
document.getElementById("brushSize").addEventListener("change", (e) => {
  brushSize = e.target.value;
});

// Event Listeners
canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mouseup", stopPosition);
canvas.addEventListener("mousemove", draw);
