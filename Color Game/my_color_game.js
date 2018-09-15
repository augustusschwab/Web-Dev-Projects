var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var h1 = document.querySelector("h1");
var resetBtn = document.getElementById("reset");
var modeBtns = document.querySelectorAll(".mode");
var message = document.getElementById("message");

init();

function init(){
	setupSquares();
	setupModeButtons();
	reset();
}


function setupModeButtons(){
	for(var i = 0; i < modeBtns.length; ++i){
		modeBtns[i].addEventListener("click",function(){
			modeBtns[0].classList.remove("selected");
			modeBtns[1].classList.remove("selected");
			this.classList.add("selected");
			//Ternary Operator
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset()
		});	
	}
}


function reset(){
	//Reset h1 backgroud to start color
	h1.style.backgroundColor = "rgb(42, 67, 196)"
	//generate new list of colors
	colors = colorArray(numSquares);
	//choose a new display color
	pickedColor = pickColor(colors);
	//Change display color
	colorDisplay.textContent = pickedColor
	//change square background to new color list
	for(var i = 0; i < squares.length; ++i){
		//Add initial background color to i
		if (colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}	
	}
	//Change reset button back to new colors
	resetBtn.textContent = "New Colors";
	//Change message back to nothing
	message.textContent = "";
}

function setupSquares(){
	for(var i = 0; i < squares.length; ++i){
		//Add click listeners to squares
		squares[i].addEventListener("click", function(){
			//If the square color = picked color; won
			var clickedColor = this.style.backgroundColor;
			if (clickedColor === pickedColor){
				for(var i = 0; i < squares.length; ++i){
					squares[i].style.backgroundColor = clickedColor;
				}
				h1.style.backgroundColor = clickedColor;
				resetBtn.textContent = "Play Again";
				message.textContent = "Correct!"
			} else {
				this.style.backgroundColor = "darkblue";
				message.textContent = "Try Again" 
			}
		});
	}
}


//Pick a random color in color array
function pickColor(colors){
	var pickColor = Math.floor(Math.random()*colors.length);
	return colors[pickColor];
}

//Generate random color
function randomColorGen(){
	//R - 0-255
	var r = Math.floor(Math.random() * 256);
	//G - 0-255
	var g = Math.floor(Math.random() * 256);
	//B - 0-255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b +")";
}

//Generate an array of random colors
function colorArray(num){
	//create array of size num
	var arr = [];
	for(i = 0; i < num; i++){
		arr[i] = randomColorGen();
	}
	return arr;
}

//Event Listener for the reset button
resetBtn.addEventListener("click", function(){
	reset();
});
