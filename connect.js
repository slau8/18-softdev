/*
 * Shannon Lau
 * SoftDev Period 7
 * 02-05-2018
 * K#01: It's about CONNECTION
 */

var canvas = document.getElementById("slate");
var height = canvas.getAttribute("height");
var width = canvas.getAttribute("width");
var ctx = canvas.getContext("2d");

var toggle = document.getElementById("toggle");
var clear = document.getElementById("clear");

var detMouse = 0;
var state = ["Offset","Client","Screen","Page"]

var oldX, oldY;

// Increment detMouse, which corresponds to a coordinate setting
var toggleCallBack = function(e){
    detMouse++;
    detMouse %= 4;
    toggle.innerHTML = "Toggle (" + state[detMouse] + ")";
};

// Clear canvas and reset oldX and oldY
var clearCallBack = function(e){
    console.log("cleared");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    oldX = null;
    oldY = null;
};

// Call drawDot depending on detMouse
var canvasCallBack = function(e){
    e.preventDefault();
    if (detMouse == 0){
    	drawDot(e.offsetX, e.offsetY);
    	console.log("offset");
    }
    else if (detMouse == 1){
    	drawDot(e.clientX, e.clientY);
    	console.log("client");
    }
    else if (detMouse == 2){
    	drawDot(e.screenX, e.screenY);
    	console.log("screen");
    }
    else {
    	drawDot(e.pageX, e.pageY);
    	console.log("page");
    }
};

// Place dot and connect if not first
var drawDot = function(x,y){
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "#ff0000";
    ctx.lineWidth = 3;
    if (oldX == null || oldY == null){
      oldX = x;
      oldY = y;
    } else {
      ctx.moveTo(oldX, oldY);
      ctx.lineTo(x,y);
      oldX = x;
      oldY = y;
    }
    ctx.fill();
    ctx.stroke();
};

toggle.addEventListener("click", toggleCallBack);
clear.addEventListener("click", clearCallBack);
canvas.addEventListener("click", canvasCallBack);
