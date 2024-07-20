// Size of a single snowflake
const flakeSize = 8;

window.addEventListener("DOMContentLoaded", function() {
   let canvas = document.querySelector("canvas");
   
   drawGround(canvas);
   drawSnowText(canvas);
   drawSnowman(canvas);  
   drawSnowflakes(canvas);   
});

function drawGround(canvas) {
   let context = canvas.getContext("2d");

   // Background 
   context.fillStyle = "#bbb";
   context.fillRect(0, 0, canvas.width, canvas.height);

   // Ground
   context.fillStyle = "brown";
   context.fillRect(0, canvas.height - 80, canvas.width, canvas.height);
}

function drawSnowflakes(canvas) {   
   for (let c = 0; c < 100; c++) {
      let x = Math.floor(Math.random() * canvas.width);
      let y = Math.floor(Math.random() * canvas.height);
      drawSingleFlake(canvas, x, y);
   }
}

function drawSnowText(canvas) {
   // TODO: Complete the function

}

function drawSnowman(canvas) { 
   // TODO: Complete the function

}

function drawSingleFlake(canvas, x, y) {
   // TODO: Complete the function

}