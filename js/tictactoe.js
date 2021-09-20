/*
CWB205 JavaScript - Project
filename: tictactoe.js
author: Amandine Velamala
*/

$(function() {
	
  tttGrid = [ 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (var i = 0; i < squares.length; i++) {          
    	squares[i].addEventListener('click', function(e){
    		userPlay(e);    	
    }, false);
  }
  console.log("Welcome to the game.");
  askPlayerToPlay();

});

var tttGrid = new Array(9);
var squares = document.getElementsByClassName("square");
var lines = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
var winnerLine = -1;
var endOfGame = false;
var playerTurn = true;
var winner  = 0;
var instructions = document.getElementById("playInstructions");
var full = false;
var blockPlayer = false;
var green = "#dbefdc";
var red = "#ffe2e2";
var playAgainButton = document.createElement("button");
playAgainButton.id = "playButton";
playAgainButton.innerHTML = "Play Again";                      

function computerPlay(){	
	var compSquareIndex = Math.floor(Math.random() * 9); 
	while (tttGrid[compSquareIndex] != 0 ){
		compSquareIndex = Math.floor(Math.random() * 9);
	}	
	tttGrid[compSquareIndex] = 1;
	squares[compSquareIndex].innerHTML = "o";
	winner = checkWin();
	if (winner == 0) {
		playerTurn = true;
		blockPlayer = false;
		askPlayerToPlay();
	}
	else {
		endOfGame = true;
		winnerDisplay(winner);	
	}
}
function askPlayerToPlay() {
	instructions.innerHTML = "Please click on a square to place your X.";
}
function userPlay(e){
	if (blockPlayer == true)
		return;
	target = event.target;
	var userSquareIndex = Number(target.id.slice(3)) - 1;
	if (!endOfGame){
		if (tttGrid[userSquareIndex] == 0){
			tttGrid[userSquareIndex] = 2;
			target.innerHTML = "x";
			winner = checkWin();
			full = fullArray();
			if ((winner == 0) && (full == false)) {
				playerTurn = false;
				blockPlayer = true;
				setTimeout(() => { computerPlay();}, 500);
			}
			else {
				endOfGame = true;
				winnerDisplay(winner);
			}	
		}
		
	}
}
function checkWin(){
	for (var i = 0; i < lines.length; i++) {
		if (((tttGrid[lines[i][0]] == tttGrid[lines[i][1]]) && (tttGrid[lines[i][0]] == tttGrid[lines[i][2]])) && ((tttGrid[lines[i][0]] != 0) && (tttGrid[lines[i][1]] != 0) && (tttGrid[lines[i][2]] != 0))) {
				winnerLine = i;
				return tttGrid[lines[i][0]];
		}			
	}
	return 0;
}

function winnerDisplay(winner){
	if (winner == 1) {
		instructions.innerHTML  = "You lost, the computer won!";
		instructions.style.backgroundColor = red;
		colorWinningLine(winnerLine, red);
	}
	if (winner == 2) {
		instructions.innerHTML  = "You won! Great Job!";
		instructions.style.backgroundColor =  green;
		colorWinningLine(winnerLine, green);
	}
	if (winner == 0) {
		instructions.innerHTML  = "No winner";
	}
	instructions.appendChild(playAgainButton);
	  document.getElementById("playButton").addEventListener('click', function(e){
    	refresh();
	});

}

function fullArray() {
	var filled = true;
	for (var i = 0; i < 9; i++)
	{
		if (tttGrid[i] == 0)
			filled = false;
	}
	return filled;
}
function colorWinningLine(winnerLine, color){
	for (var i = 0; i < 3; i++)
	{
		var pos = lines[winnerLine][i];
		squares[pos].style.background = color;
	}
}
function refresh(){
	window.location.reload();
}