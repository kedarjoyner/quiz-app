	
	var questionCurrent = 0;
	var questionTotal = 10;



$(document).ready(function() {

	$(".questions-wrap").hide();

	$("button.choose-light").hover(function() { //when mouse hovers over light button, toggle
		$(".light-img, .light-text").toggle();
	});

	$("button.choose-dark").hover(function() { //when mouse hovers over dark button, toggle
		$(".dark-img, .dark-text").toggle();
	});

	$("button.choose-light").click(function() { // when game starts, switch player icon to light
		showGame();
		$(".questions-wrap").show(); // show game
		$(".light-sabers").hide(); //hide player icon
		$(".playericon-light").slideToggle(300, "easeInQuint"); //change player icon to leah
		$("li").addClass("options-light-background");
		$("li").hover(function() {
			$(this).toggleClass("options-hover");
		});
		updateQuestion(lightQuestions[0]); // question 1 from array 1
	});


	$("button.choose-dark").click(function() { 
		showGame();
		$(".questions-wrap").show();
		$(".light-sabers").hide();
		$(".playericon-dark").slideToggle(300, "easeInQuint");
		$("li").addClass("options-dark-background");
		$("li").hover(function() {
			$(this).toggleClass("options-hover");
		});
	});
});

function updateQuestion(currentQuestion) {
	$(".question").text(currentQuestion.question);
	$(".option1").text(currentQuestion.answers[0]);
	$(".option2").text(currentQuestion.answers[1]);
	$(".option3").text(currentQuestion.answers[2]);
	$(".option4").text(currentQuestion.answers[3]);
}



function QuestionAsk(question, answers, correct) {
	this.question = question;
	this.answers = answers;
	this.correct = correct;
}

var lightQuestions = new Array();
lightQuestions[0] = new QuestionAsk("The Ewoks believe which character is God?", 
		["C-3PO", "R2-D2", "Princess Leia", "Jar Jar Binks"], 0);

lightQuestions[1] = new QuestionAsk()


var darkQuestions = new Array();




// FUNCTIONS



function showGame() {
	$(".main").hide();
	$(".light-questions").show();
}

function increaseCount() {
	questionCurrent++;
	$("#question-current").text(questionCurrent);
}





