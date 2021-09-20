/*
CWB205 JavaScript - Project
filename: natparks.js
author: Amandine Velamala
*/

var map;
var indexToGuess;
var msg;
var color;
var endOfGame = false;

var nationalParks = [
  {
    name: "Great Sand Dunes National Park",
    lat: 37.807245, 
    lng: -105.586653
  },
  {
    name: "Rocky Mountain National Park",
    lat: 40.347254, 
    lng: -105.687506
  },
  {
    name: "Mesa Verde National Park",
    lat: 37.185422, 
    lng: -108.489037
  },
  {
    name: "Black Canyon of the Gunnison National Park",
    lat: 38.579133, 
    lng: -107.744445
  },
  {
    name: "Florissant Fossil Beds National Monument",
    lat: 38.914657, 
    lng: -105.283258
  },
  {
    name: "Colorado National Monument",
    lat: 39.057572,
    lng: -108.693932
  },
  {
    name: "Dinosaur National Monument",
    lat: 40.492907, 
    lng: -108.941593
  }
];

var markers = [];

function init() {
  $("#playButton").css("display", "none");
  var coloradoCenter = new google.maps.LatLng(38.799638, -105.459643);

  var mapOptions = {                              
    center: coloradoCenter,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoom: 7
  };

  map = new google.maps.Map(document.getElementById('map'), mapOptions);

  addMarkers();
  addMapListeners();
  indexToGuess = toBeGuessed();
  $("#mysteryPark").text(nationalParks[indexToGuess].name);
  
}

function addMarkers() {
    for (var i = 0; i < nationalParks.length; i++) {  
        marker = new google.maps.Marker({
        position: new google.maps.LatLng(nationalParks[i].lat, nationalParks[i].lng),
        map: map,
        icon: "img/npLogo.png",
        index: i
    });
    markers.push(marker);
  };
}
    
function toBeGuessed() {
    var rand = Math.floor(Math.random() * nationalParks.length);
    return rand;
}

function addMapListeners() {
    for (var i = 0; i < markers.length; i++) { 
        var marker = markers[i];
        google.maps.event.addListener(marker,'click', (function(i) {
          return function(){
            if (!endOfGame) {
              var success = checkLocation(i);
              getMsgColor(success);
              $("#box").css("background-color",  color);
              var infowindow = new google.maps.InfoWindow({
                 content: msg
            });          
          infowindow.open(map, markers[i]);
          if (endOfGame){
            $("#playButton").css("display", "inline");
            $("#whichPark").text("You found ");
            $("#playButton").on('click', function(){
              refresh();
            });
          }
        }
        }
      }(i)));    
  } 
}
function getMsgColor(yes){
    if (yes) {
      msg=  "Great Job! You found it";
      color = "#dbefdc";
      endOfGame = true;
    }   
    else {
      msg= "Try Again!";
      color = "#ffe2e2";
    } 
  }

function checkLocation(num) {
  if (num == indexToGuess) {
     return true;
  }
  else {
   return false;
  }
}

function refresh(){
  window.location.reload();
}

function loadScript() {
  var script = document.createElement('script');     
  script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=init';
  document.body.appendChild(script);                 
}

window.onload = loadScript;