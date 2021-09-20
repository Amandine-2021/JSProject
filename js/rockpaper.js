/*
CWB205 JavaScript - Project
filename: rockpaper.js
author: Amandine Velamala
*/

$(function() {
    $("#result").hide();
    $("#rock").on('click', function(e){
    	$(".icons").prop('disabled', true);
		play(0);
	});
	$("#paper").on('click', function(e){
    	$(".icons").prop('disabled', true);
		play(1);
	});
	$("#scissors").on('click', function(e){
    	$(".icons").prop('disabled', true);
		play(2);
	});
	$("#playButton").on('click', function(e){
		$("#result").hide();
    	$(".icons").prop('disabled', false);
    	reset();
	});
});

var playerChoice;   
var pageChoice;     // webpage's choice. 0 is rock, 1 is paper, 2 is scissors
var winningItem;
var winner;
var playerChoiceMsg = "";
var	webChoiceMsg = "";
var resultMsg = "";
//array holding 3 choices 
var choices =["Rock", "Paper", "Scissors"];
//array holding 3 images filenames
var images = ["<img src=\"img/rock.jpg\">", "<img src=\"img/paper.jpg\">", "<img src=\"img/scissors.jpg\">"];
//variables holding different messages
var itemMsgs = ["Rock wins against Scissors. ", "Paper wins against Rock. ", "Scissors wins against Paper. "];
var winnerMsgs = [ "<br><br>YOU WIN.", "<br><br>YOU LOSE.", "TIE."];

function play(choice)	{
	$(".icons").prop('disabled', true);
	playerChoice = Number(choice);
	pageChoice = computerPlay();
	findWinner();
	findResults(playerChoice, pageChoice, winningItem, winner);
	changeColor(winner);
	$("#result").show();
	$("#player").html(playerChoiceMsg);
	$("#webpage").html(webChoiceMsg);
	$("#winner").html(resultMsg);
}

function computerPlay() {
	return Math.floor(Math.random() * 3);
}
function findWinner() {
	if (pageChoice == 0) {
		if (playerChoice == 1){
			winningItem = 1;
			winner = 0;
		} else if (playerChoice == 2) {
			winningItem = 0;
			winner = 1;
		} else {
			winner = 2;
		}
	} 
	else if (pageChoice == 1) {
		if (playerChoice == 0){
			winningItem = 1;
			winner = 1;
		} else if (playerChoice == 2) {
			winningItem = 2;
			winner = 0;

		} else {
			winner = 2;
		}
	} 
	else if (pageChoice == 2) {
		if (playerChoice == 0){
			winningItem = 0;
			winner = 0;
		} else if (playerChoice == 1) {
			winningItem = 2;
			winner = 1;
		} else {
			winner = 2;
		}
	} 
}
function findResults(playerChoice, pageChoice, winningItem, winner) {
	playerChoiceMsg = "You chose: " + choices[playerChoice] + "." + images[playerChoice];
	webChoiceMsg = "I chose: " + choices[pageChoice] + "." + images[pageChoice];
	if (winner == 2) {
		resultMsg = winnerMsgs[2];
	}
	else {
		resultMsg = itemMsgs[winningItem]  + winnerMsgs[winner];
	}
}
function changeColor(winner){
	var colorWin = ["#dbefdc", "#ffe2e2", "rgb(227, 242, 253)"];
	$("#result").css("background-color", colorWin[winner]);
}
function reset() {
	playerChoiceMsg = "";
	webChoiceMsg = "";
	resultMsg = "";
}