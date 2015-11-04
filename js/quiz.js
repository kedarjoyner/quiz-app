
var button = "";
	var questionCurrent = 0;
	var questionTotal = 10;

$(document).ready(function() {

	$(".questions").hide();


	$(".choose-light").click(function() {
		button = "light";
	});
	$(".choose-dark").click(function() {
		button = "dark";
	});	

	$(".start-game").click(function() {
		if (button === "light") {
			showGame();
			increaseCount();
			//alert("You chose the light side!");
		} else if (button === "dark") {
			showGame();
			//alert("You chose the dark side!");
		} else {
			alert("You need to choose a side!");
		}
	});
});

function showGame() {
	$(".main").hide();
	$(".questions").show();
}

function increaseCount() {
	questionCurrent++;
	$("#question-current").text(questionCurrent);
}