var canvas = document.getElementById("slate");
var height = canvas.getAttribute("height");
var width = canvas.getAttribute("width");
var ctx = canvas.getContext("2d"); // set context to 2d

var toggle = document.getElementById("toggle");
var clear = document.getElementById("clear");
console.log(toggle);

console.log(clear);

var isRect = false;

toggle.addEventListener("click", toggleCallBack);
clear.addEventListener("click", clearCallBack);
canvas.addEventListener("click", canvasCallBack);

var toggleCallBack = function(e){
    isRect = !isRect;
};

var clearCallBack = function(e){
    console.log("cleared");
    ctx.fillStyle = "#000000";
    ctx.fillRect(0,0,600,600);  
};

var canvasCallBack = function(e){
    if (isRect)
	drawRect(e.offsetX, e.offsetY);
    else
	drawDot(e.offsetX, e.offsetY);
};

var drawRect = function(x, y){
    e.preventDefault();
    ctx.fillStyle = "#00f";
    ctx.fillRect(x,y,30,30);
};

var drawDot = function(x, y){
    e.preventDefault();
    ctx.fillStyle = "#ff0000";
    ctx.arc(x,y,20,0,2*Math.PI);
};

var striped = function(){
    ctx.fillStyle = "#ff0000"; // change fill color
    for (var i = 0; i < height; i += height/5.0){
	ctx.fillRect(0,i,width,height/10.0); // create a stripe
    }
};

/*
var checkerboard = function(){
    ctx.fillStyle="#000000";
    for 
};
*/

