const canvas = document.getElementById("draw");
const ctx = canvas.getContext("2d");

// Set canvas width and height as the same as window's.
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = "#BADA55";
ctx.lineCap = 'round';
ctx.lineJoin = 'round';
ctx.lineWidth = 50;
let hue = 0; 

let isDrawing = false;
let direction = true;
let startX = 0;
let startY = 0;

function draw(e) {
    if(!isDrawing) return;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    console.log(ctx.lineWidth);
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    hue ++;
    if (hue >= 360) {
        hue = 0;
    }

    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
    }
    if (direction) ctx.lineWidth++;
    else ctx.lineWidth--;
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", () => isDrawing = true);
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseout", () => isDrawing = false);