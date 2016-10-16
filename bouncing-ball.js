var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var raf;

var ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 2,
  radius: 25,
  color: 'blue',

  draw: function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
    ctx.closePath();

    ctx.fillStyle = this.color;
    ctx.fill();
  },

  reverseX: function() {
    this.vx *= -1;
  },
  reverseY: function() {
    this.vy *= -1;
  }
};

function isOutOfBoundsX(ball) {
  if (ball.x > canvas.width || ball.x < 0) {
    return true;
  }
  return false;
}
function isOutOfBoundsY(ball) {
  if (ball.y > canvas.height || ball.y < 0) {
    return true;
  }
  return false;
}

//canvas draw function
function draw() {
  //clear the canvas
  ctx.clearRect(0,0, canvas.width, canvas.height);

  if (isOutOfBoundsX(ball)) {
    ball.reverseX();
  }
  if (isOutOfBoundsY(ball)) {
    ball.reverseY();
  }

  // draw the ball
  ball.draw();

  // update the position of the ball
  ball.x += ball.vx;
  ball.y += ball.vy;
  raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener('mouseover', function(e){
  raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener("mouseout",function(e){
  window.cancelAnimationFrame(raf);
});

ball.draw();