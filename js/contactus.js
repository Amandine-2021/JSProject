/*
CWB205 JavaScript - Project
filename: contactus.js
author: Amandine Velamala
*/

var form = document.getElementById("contactForm");
var elements = form.elements;
var flag;
var letter;

$(function () {
	document.getElementById("stateFirstLetter").oninput = function(e) {
		var letterPressed = this.value;
		letter = letterPressed.toUpperCase();
		loadStates(letter);
	}
	$("form").on('submit', function(e){
		checkForm();
		e.preventDefault();
		if (flag == true) {
			var userName = elements.firstName.value;
			var userState = elements.statesDropdown.value;
			var index = states.findIndex(item => item.abbreviation == userState);
			var msg1 = "Thanks for submitting your message, " + userName + ".";
			var msg2 = "Happy to hear from " + states[index].name + ".";    
   			document.getElementById("contactForm").innerHTML = "<p>" + msg1 + "<br><br>" + msg2;		
		}
});
});

function checkForm()
{	
	flag = true;
	for (var i = 0; i < elements.length; i++){
			var id = elements[i].id;
			var errorId = "#error"+id;
			isEmpty(elements[i]);
			isValid(elements[i]);
			printErrorMsg(elements[i], errorId);
	}	
}

function printErrorMsg(el, errorId){
	$(errorId).text(el.errorMsg);
}
function isEmpty(el){	
		if (!el.value || el.value =="") {
			el.errorMsg = "This field is required. Please enter a value!";
			flag = false;
		}
		else {
			el.errorMsg = "";
		}
}
function isValid(el){
		var name = el.name;
		var type = el.getAttribute(type);
		var content = el.value;		
		if (name == "lastName" || name == "firstName") {
			var regName = /^[a-zA-Z\-]+$/;
			if(!regName.test(content)){
        		el.errorMsg = "Please enter a valid name";
        		flag = false;
        	}
        	else {
        		el.errorMsg = "";
        	}
        }	
        else if (name == "email")	{
			var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			if(!regEmail.test(content)){
        		el.errorMsg = "Please enter a valid email";
        		flag = false;
        	}
        	else {
        		el.errorMsg = "";
        	}
        }
        else if (name == "message") {
			if(content.length >= 200 || content.length == 0){
        		el.errorMsg = "Please enter a message between 1 and 200 characters";
        		flag = false;
        	}
        	else {
        		el.errorMsg = "";
        	}
        }
    }

function printErrorMsg(el, errorId){
	$(errorId).text(el.errorMsg);
}
   			
function loadStates(letter) {

	var statesDropdown = document.getElementById("statesDropdown");
    $("#statesDropdown").empty();
	var selectOption;
	for (var i = 0; i < states.length; i++) {
		if (states[i].name[0] == letter) {
    		selectOption = document.createElement('option');
    		selectOption.text = states[i].abbreviation;
    		selectOption.value = states[i].abbreviation;
    		statesDropdown.add(selectOption);
    	}
    }
}


const states = 
[
    {
        "name": "Alabama",
        "abbreviation": "AL"
    },
    {
        "name": "Alaska",
        "abbreviation": "AK"
    },
    {
        "name": "American Samoa",
        "abbreviation": "AS"
    },
    {
        "name": "Arizona",
        "abbreviation": "AZ"
    },
    {
        "name": "Arkansas",
        "abbreviation": "AR"
    },
    {
        "name": "California",
        "abbreviation": "CA"
    },
    {
        "name": "Colorado",
        "abbreviation": "CO"
    },
    {
        "name": "Connecticut",
        "abbreviation": "CT"
    },
    {
        "name": "Delaware",
        "abbreviation": "DE"
    },
    {
        "name": "District Of Columbia",
        "abbreviation": "DC"
    },
    {
        "name": "Federated States Of Micronesia",
        "abbreviation": "FM"
    },
    {
        "name": "Florida",
        "abbreviation": "FL"
    },
    {
        "name": "Georgia",
        "abbreviation": "GA"
    },
    {
        "name": "Guam",
        "abbreviation": "GU"
    },
    {
        "name": "Hawaii",
        "abbreviation": "HI"
    },
    {
        "name": "Idaho",
        "abbreviation": "ID"
    },
    {
        "name": "Illinois",
        "abbreviation": "IL"
    },
    {
        "name": "Indiana",
        "abbreviation": "IN"
    },
    {
        "name": "Iowa",
        "abbreviation": "IA"
    },
    {
        "name": "Kansas",
        "abbreviation": "KS"
    },
    {
        "name": "Kentucky",
        "abbreviation": "KY"
    },
    {
        "name": "Louisiana",
        "abbreviation": "LA"
    },
    {
        "name": "Maine",
        "abbreviation": "ME"
    },
    {
        "name": "Marshall Islands",
        "abbreviation": "MH"
    },
    {
        "name": "Maryland",
        "abbreviation": "MD"
    },
    {
        "name": "Massachusetts",
        "abbreviation": "MA"
    },
    {
        "name": "Michigan",
        "abbreviation": "MI"
    },
    {
        "name": "Minnesota",
        "abbreviation": "MN"
    },
    {
        "name": "Mississippi",
        "abbreviation": "MS"
    },
    {
        "name": "Missouri",
        "abbreviation": "MO"
    },
    {
        "name": "Montana",
        "abbreviation": "MT"
    },
    {
        "name": "Nebraska",
        "abbreviation": "NE"
    },
    {
        "name": "Nevada",
        "abbreviation": "NV"
    },
    {
        "name": "New Hampshire",
        "abbreviation": "NH"
    },
    {
        "name": "New Jersey",
        "abbreviation": "NJ"
    },
    {
        "name": "New Mexico",
        "abbreviation": "NM"
    },
    {
        "name": "New York",
        "abbreviation": "NY"
    },
    {
        "name": "North Carolina",
        "abbreviation": "NC"
    },
    {
        "name": "North Dakota",
        "abbreviation": "ND"
    },
    {
        "name": "Northern Mariana Islands",
        "abbreviation": "MP"
    },
    {
        "name": "Ohio",
        "abbreviation": "OH"
    },
    {
        "name": "Oklahoma",
        "abbreviation": "OK"
    },
    {
        "name": "Oregon",
        "abbreviation": "OR"
    },
    {
        "name": "Palau",
        "abbreviation": "PW"
    },
    {
        "name": "Pennsylvania",
        "abbreviation": "PA"
    },
    {
        "name": "Puerto Rico",
        "abbreviation": "PR"
    },
    {
        "name": "Rhode Island",
        "abbreviation": "RI"
    },
    {
        "name": "South Carolina",
        "abbreviation": "SC"
    },
    {
        "name": "South Dakota",
        "abbreviation": "SD"
    },
    {
        "name": "Tennessee",
        "abbreviation": "TN"
    },
    {
        "name": "Texas",
        "abbreviation": "TX"
    },
    {
        "name": "Utah",
        "abbreviation": "UT"
    },
    {
        "name": "Vermont",
        "abbreviation": "VT"
    },
    {
        "name": "Virgin Islands",
        "abbreviation": "VI"
    },
    {
        "name": "Virginia",
        "abbreviation": "VA"
    },
    {
        "name": "Washington",
        "abbreviation": "WA"
    },
    {
        "name": "West Virginia",
        "abbreviation": "WV"
    },
    {
        "name": "Wisconsin",
        "abbreviation": "WI"
    },
    {
        "name": "Wyoming",
        "abbreviation": "WY"
    }
]