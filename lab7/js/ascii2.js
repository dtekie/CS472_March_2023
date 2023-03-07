// Get canvas and context
const canvas = document.getElementById('ascii-canvas');
const context = canvas.getContext('2d');

// Set canvas width and height
canvas.width = 400;
canvas.height = 200;

// Set default values
let framesPerSecond = 10;
let isPlaying = false;

// Draw function
function draw() {
  // Clear canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Draw ASCII art frame
  context.font = '12px monospace';
  context.fillStyle = 'black';
  context.fillText('ASCII art frame', 10, 20);
}

// Timer function
let timerId;
function startTimer() {
  timerId = setInterval(draw, 1000 / framesPerSecond);
}

function stopTimer() {
  clearInterval(timerId);
}

// Start button click handler
$('#start-button').click(function() {
  isPlaying = true;
  startTimer();
});

// Stop button click handler
$('#stop-button').click(function() {
  isPlaying = false;
  stopTimer();
});

// Frames per second input change handler
$('#fps-input').on('input', function() {
  framesPerSecond = parseInt(this.value);
  if (isPlaying) {
    stopTimer();
    startTimer();
  }
});
