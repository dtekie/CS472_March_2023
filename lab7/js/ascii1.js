// Draw function
let x = 50; // Starting x-coordinate
let y = 50; // Starting y-coordinate
let dx = 5; // Change in x-coordinate per frame
let dy = 0; // Change in y-coordinate per frame
function draw() {
  // Clear canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Draw rectangle
  context.fillStyle = 'black';
  context.fillRect(x, y, 50, 50);

  // Update position
  x += dx;
  y += dy;

  // Change direction if rectangle hits canvas edge
  if (x + 50 > canvas.width || x < 0) {
    dx = -dx;
  }
}

// Timer function
let timerId;
function startTimer() {
  timerId = setInterval(draw, 1000 / framesPerSecond);
}

function stopTimer() {
  clearInterval(timerId);
}
