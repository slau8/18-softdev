var canvas = document.getElementById("slate");
var height = canvas.getAttribute("height");
var width = canvas.getAttribute("width");
var ctx = canvas.getContext("2d"); // set context to 2d

var toggle = document.getElementById("toggle");
var clear = document.getElementById("clear");

console.log(toggle);
console.log(clear);

var isRect = false;

var toggleCallBack = function(e){
    console.log("Toggled");
    isRect = !isRect;
};

var clearCallBack = function(e){
    console.log("Cleared");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0,0,600,600);
};

var canvasCallBack = function(e){
  e.preventDefault();
  if (isRect)
	 drawRect(e.offsetX, e.offsetY);
  else
	 drawDot(e.offsetX, e.offsetY);
};

var drawRect = function(x, y){
    ctx.fillStyle = "#00f";
    ctx.fillRect(x-15,y-15,30,30);
};

var drawDot = function(x, y){
    ctx.fillStyle = "#ff0000";
    ctx.stroke();
    ctx.arc(x,y,20,0,2*Math.PI);
    ctx.fill();
    ctx.beginPath();
};

toggle.addEventListener("click", toggleCallBack);
clear.addEventListener("click", clearCallBack);
canvas.addEventListener("click", canvasCallBack);
