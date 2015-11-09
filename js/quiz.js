	
	var button = "";
	var questionCurrent = 0;
	var questionTotal = 10;

$(document).ready(function() {

	$(".light-questions").hide();

	$("button.choose-light").hover(function() { //when mouse hovers over light button, toggle
		$(".light-img, .light-text").toggle();
	});

	$("button.choose-dark").hover(function() { //when mouse hovers over dark button, toggle
		$(".dark-img, .dark-text").toggle();
	});

	$("button.choose-light").click(function() {
		showGame();
		$(".light-questions").show();
		$(".light-sabers").hide()
		$(".playericon-light").slideToggle(300, "easeInQuint");
	});

	$("button.choose-dark").click(function() {
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