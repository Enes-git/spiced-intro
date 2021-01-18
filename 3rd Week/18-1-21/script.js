var canvas = document.getElementById("figure")
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 3;

// ctx.fillStyle = "darksalmon";
// ctx.fillRect(0, 0, canvas.offsetWidth, canvas.height);

// the head
ctx.beginPath();
ctx.arc(300, 200, 50, 0, Math.PI * 2);
ctx.stroke();

// the torso
ctx.beginPath();
ctx.moveTo(300, 250);
ctx.lineTo(300, 500);
ctx.stroke();
ctx.closePath();

// the left arm
ctx.beginPath();
ctx.moveTo(300, 325);
ctx.lineTo(200, 225);
ctx.stroke();
ctx.closePath();

// the right arm
ctx.beginPath();
ctx.moveTo(300, 325);
ctx.lineTo(400, 225);
ctx.stroke();
ctx.closePath();

// the left leg
ctx.beginPath();
ctx.moveTo(300, 500);
ctx.lineTo(200, 600);
ctx.stroke();
ctx.closePath();

// the right leg
ctx.beginPath();
ctx.moveTo(300, 500);
ctx.lineTo(400, 600);
ctx.stroke();
ctx.closePath();
