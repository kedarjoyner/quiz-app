	
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

	$("button.choose-light").click(function() { // when game starts, switch player icon to light
		showGame();
		$(".light-questions").show();
		$(".light-sabers").hide();
		$(".playericon-light").slideToggle(300, "easeInQuint");
		updateQuestion(lightQuestions[0]);
	});

	$("button.choose-dark").click(function() { // when game starts, switch player icon to dark
		showGame();
		$(".light-questions").show();
		$(".light-sabers").hide();
		$(".playericon-dark").slideToggle(300, "easeInQuint");
	});

});

function updateQuestion(currentQuestion) {
	$(".question").text(currentQuestion.question);
	$(".option1").text(currentQuestion.answers[0]);
	$(".option2").text(currentQuestion.answers[1]);
	$(".option3").text(currentQuestion.answers[2]);
	$(".option4").text(currentQuestion.answers[3]);
}


function Question(question, answers, correct) {
	this.question = question;
	this.answers = answers;
	this.correct = correct;
}

var lightQuestions = new Array();
lightQuestions[0] = new Question("The Ewoks believe which character is God?", 
		["C-3PO", "R2-D2", "Princess Leia", "Jar Jar Binks"], 0);

lightQuestions[1] = new Question()


var darkQuestions = new Array();

// var Question = function() {
// 	this.question = "";
// 	this.answer1 = {};
// 	this.answer2 = {};
// 	this.answer3 = {};
// 	this.answer4 = {};	
// };

// var questionLight1 = new Question();

// questionLight1.question = "The Ewoks believe which character is God?";
// questionLight1.answer1.label = "C-3PO";
// questionLight1.answer1.correct = true;

// var questionsLight1 = {
// question: "The Ewoks believe which character is God?",
// answer1: "C-3PO",
// answer2: "R2-D2",
// answer3: "Princess Leia", 
// answer4: "Jar Jar Binks",
// correctAnswer: self.answer1
// };





// FUNCTIONS



function showGame() {
	$(".main").hide();
	$(".light-questions").show();
}

function increaseCount() {
	questionCurrent++;
	$("#question-current").text(questionCurrent);
}