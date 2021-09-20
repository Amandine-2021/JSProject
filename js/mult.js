/*
CWB205 JavaScript - Project
filename: mult.js
author: Amandine Velamala
*/

$(function() {
	newProblem();  
	$("#multForm").submit(submitForm);
});

var multiplicand;
var multiplier;
var product;
var answer;
var solved = false;
var msg;
var color;

function submitForm(e) {
	e.preventDefault();
	document.getElementById("answer").addEventListener("click", clear);
	answer = $("#answer").val();
	if (!validate(answer)){
			$("#resultMsg").html("Enter Numeric value only");  
	}
	else {
		solved = checkAnswer();
		getMsgColor(solved);
		
		$("#resultMsg").html(msg);
		$("#box").css("background-color", color);
		if (solved == true) {
			document.getElementById("answer").disabled = true;
			document.getElementById("submitanswer").disabled = true;

			$("#continue").html("<button type=\"button\" id=\"playButton\">Play Again</button>");

			document.getElementById("playButton").addEventListener("click", function(e){
				refresh();
			});
		}
	}
}
function newProblem() {
  multiplicand = Math.floor(Math.random() * 13);
  multiplier = Math.floor(Math.random() * 13);
  product = multiplicand * multiplier;
  $("#multiplicand").html(multiplicand);
  $("#multiplier").html(multiplier);
 } 
function checkAnswer() {
	//answer = $("#answer").val();
	if (validate(answer) == true) {
		if (product == answer)
			return true;
		else
		    return false;
		}
	
}
function getMsgColor(yes) {
	if (yes == true) {
		msg = "Right";
		color = "#dbefdc";
	}
	else { 
		msg = "Try again";
		color = "#ffe2e2";
	}
}

function clear() {
	document.getElementById("multForm").reset();
	$("#resultMsg").html("");

}

function validate(num){  
if (isNaN(num)){  
  	return false;  
} 
else {  
  	return true;  
  }  
}  

function refresh(){
  window.location.reload();
}
