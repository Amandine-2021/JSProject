/*
CWB205 JavaScript - Project
filename: index.js
author: Amandine Velamala
*/

var index = 0;
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

rotateImg();
updateTime();

function rotateImg() {
  var i;
  var slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  index++;
  if (index > slides.length) {index = 1}    
 slides[index-1].style.display = "block";  
  setTimeout(rotateImg, 3000); 
}

function updateTime(){
    var now = new Date()
    var day = days[now.getDay()];
	var dayNum = now.getDate();
	var month = months[now .getMonth()];
	var year = now.getFullYear();
	var hours = now.getHours();
	var minutes = now.getMinutes();
    var dateString = "Today is " + day + " " + month + " " +  dayNum + ", " +  year + ", it is " + hours + ":" + minutes + ".";
    
    document.getElementById("date").textContent = dateString;
}
setInterval(updateTime, 1000);

   
