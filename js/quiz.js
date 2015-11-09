	
	var button = "";
	var questionCurrent = 0;
	var questionTotal = 10;

$(document).ready(function() {

	$(".light-questions").hide();

	$(".choose-light").hover(function() { //when mouse hovers over light button, toggle
		$(".light-img, .light-text").toggle();
	});

	$(".choose-dark").hover(function() { //when mouse hovers over dark button, toggle
		$(".dark-img, .dark-text").toggle();
	});

	$(".choose-light").click(function() {
		showGame();
	});

	$(".choose-dark").click(function() {
		showGame();
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