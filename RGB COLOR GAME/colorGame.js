var numsquares = 6;
var color = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easybtn");
var hardBtn = document.querySelector("#hardbtn");
var modebutton = document.querySelectorAll(".mode");

init();
function init(){
setupModeButtons();
setupsquares();
reset();
}

function setupModeButtons(){
	for(var i=0;i<modebutton.length;i++){
	modebutton[i].addEventListener("click",function(){
		modebutton[0].classList.remove("selected");
		modebutton[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numsquares = 3:numsquares=6;
		reset();

	});
}
}
function setupsquares(){
	for(var i=0;i<squares.length;i++){
	//add initial colors to square
	//add click listener to square
	squares[i].addEventListener("click",function(){

		var clickedColor=this.style.backgroundColor;
		if(clickedColor===pickedColor){
			messageDisplay.textContent="Correct!";
			resetButton.textContent = "Play Again?"
			changeColor(clickedColor);
			h1.style.backgroundColor = clickedColor;
		}else{
			this.style.backgroundColor="#232323";
			messageDisplay.textContent = "Try Again";
		}


	});
}
}

function reset(){
	color = generaterandomcolors(numsquares);
	pickedColor = pickColor();
	colorDisplay.textContent=pickedColor;
	resetButton.textContent="New Colors"
	messageDisplay.textContent="";

	for(var i=0;i<squares.length;i++){
		if(color[i]){
			squares[i].style.display="block";
			squares[i].style.backgroundColor = color[i];
		}else{
			squares[i].style.display="none";
		}
		
	}
	h1.style.backgroundColor = "steelblue";

}

resetButton.addEventListener("click",function(){
	reset();
})



function changeColor(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
}
function pickColor(){
	var random = Math.floor(Math.random() * color.length);
	return color[random];
}
function generaterandomcolors(num){
	var arr = [];
	for(var i=0;i<num;i++){
		arr.push(randomColor());
	}

	return arr;
}
function randomColor(){
	var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}