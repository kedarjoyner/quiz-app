	
	var trackQuestion = 0;
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
		$("li").addClass("options-light-background"); // change color of list items
		$("li").hover(function() { //change color of list items on hover
			$(this).toggleClass("options-hover");
		});
		generateQuestion(lightQuestions[0]); // question 1 from array 1
		submitAnswer(lightQuestions);
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





// -------> FUNCTION <------ //


function generateQuestion(currentQuestion) {
	//$(".questions-wrap").fadeIn(600);
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



function showGame() {
	$(".main").fadeOut(400);
	//$(".questions-wrap").fadeIn(600, function() {
	//});
}

function increaseCount() {
	trackQuestion++;
	$(".track-questions").text(trackQuestion);
}

function submitAnswer(lightQuestions) {
	$("li").click(function() {
		var userGuess = $(this).text();
		console.log(userGuess);	
		var currentQuestion = lightQuestions[trackQuestion];
		if (userGuess !== currentQuestion.answers[currentQuestion.correct]) {
			console.log(trackQuestion);
			increaseCount();
			generateQuestion(lightQuestions[trackQuestion]);
		}
	});		
}





// -------> LIGHT QUESTIONS <------ //

var lightQuestions = new Array();

lightQuestions[0] = new QuestionAsk("The Ewoks believe which character is God?", 
		["C-3PO", "R2-D2", "Princess Leia", "Jar Jar Binks"], 0);

lightQuestions[1] = new QuestionAsk("In the Empire Strikes Back, C-3PO is shot by a stormtrooper, torn to pieces, and thrown into the trash. Which character finds all of his parts just narrowing saving him from the incinerator?", 
		["Princess Leia", "Han Solo", "Chewbacca", "R2-D2"], 2);

lightQuestions[2] = new QuestionAsk("In “A New Hope” who does R2-D2 claim to be the property of?", 
		["Captain Antillies", "Anakin Skywalker", 
		"Luke Skywalker", "Obi-Wan Kenobi"], 3);

lightQuestions[3] = new QuestionAsk("In “The Empire Strikes Back” When Luke and Han are missing, what does R2-D2 say the odds of survival are?",
		["1725 to 1", "725 to 1", "372 to 1", "3720 to 1"], 1);

lightQuestions[4] = new QuestionAsk("In 'Return of the Jedi', what does Princess Leia disguise herself as?", 
		["Wookie", "Storm Trooper", "Bounty Hunter", "Droid"], 2);

lightQuestions[5] = new QuestionAsk("Which famous scientist’s eyes were Yoda’s based on?",
		["Isaac Newton", "Sir Francis Bacon", "Albert Einstein", "Carl Sagan"], 2);

lightQuestions[6] = new QuestionAsk("Which of these names belonged to an Ewok in the 1983’s Return of the Jedi?",
		["Snootles", "Woola", "Nikta", "Teebo"], 3);

lightQuestions[7] = new QuestionAsk("Who eventually had the honor of killing Jabba the Hutt?",
		["Leia", "Han Solo", "Boba Fett", "Chewbacca"], 0);

lightQuestions[8] = new QuestionAsk("When he was cast as Jedi Knight Mace Windu, Samuel L. Jackson’s special request was that his light saber was which color?", 
		["White", "Purple", "Orange", "Yellow"], 1);

lightQuestions[9] = new QuestionAsk("What is Jedi leader Obi-Wan Kenobi also known as?", 
		["The Legend", "The Informant", "The Negotiator", "The Betrayer"], 2);

// -------> DARK QUESTIONS <------ //






