	
	var trackQuestion = 0;
	var questionTotal = 10;
	var countCorrect = 0; //creat function for this



$(document).ready(function() {

	$("div.questions-wrap").hide();

	$("button.choose-light").mouseenter(function() { //when mouse hovers over light button, toggle
		$("button.choose-light img").hide();
		$("button.choose-light p").show();
	});

	$("button.choose-light").mouseleave(function() { //when mouse hovers over light button, toggle
		$("button.choose-light img").show();
		$("button.choose-light p").hide();
	});

	$("button.choose-dark").mouseenter(function() { //when mouse hovers over dark button, toggle
		$("button.choose-dark img").hide();
		$("button.choose-dark p").show();
	});

	$("button.choose-dark").mouseleave(function() { //when mouse hovers over dark button, toggle
		$("button.choose-dark img").show();
		$("button.choose-dark p").hide();
	});

	$("button.choose-light").click(function() { // when game starts, switch player icon to light
		showGame();
		$("img.light-sabers").hide(); //hide player icon
		$("img.playericon-light").slideToggle(300, "easeInQuint"); //change player icon to leah
		$("li").addClass("options-light-background"); // change color of list items
		$("li").hover(function() { //change color of list items on hover
			$(this).toggleClass("options-hover");
		});
		generateQuestion(lightQuestions[0]); // question 1 from array 1
		submitAnswer(lightQuestions);
	});

	$("button.choose-dark").click(function() { 
		showGame();
		$("div.questions-wrap").show();
		$("img.light-sabers").hide();
		$("img.playericon-dark").slideToggle(300, "easeInQuint");
		$("li").addClass("options-dark-background");
		$("li").hover(function() {
			$(this).toggleClass("options-hover");
		});
		generateQuestion(darkQuestions[0]);
		submitAnswer(darkQuestions);
	});

	//$("p.final-score").text("You got " + countCorrect " out of 10 correct! Try again?").css("color", "black");
});


// -------> FUNCTIONS <------ //


function generateQuestion(currentQuestion) { // shows new questions
	$("p.question").text(currentQuestion.question);
	$("li.option1").text(currentQuestion.answers[0]);
	$("li.option2").text(currentQuestion.answers[1]);
	$("li.option3").text(currentQuestion.answers[2]);
	$("li.option4").text(currentQuestion.answers[3]);
}


function QuestionAsk(question, answers, correct) { // objects that hold questions and answers
	this.question = question;
	this.answers = answers;
	this.correct = correct;
}


function showGame() { 
	$("div.main").fadeOut(400);
	$("div.questions-wrap").fadeIn(400); // fade game in
}

function increaseCount() { // track current question out of 10 total	
	if (trackQuestion <= 10) {
		trackQuestion++; // add one for the user
		$("span#track-questions").text(trackQuestion +1); 
	} else if (trackQuestion > 10) {
		$("div.questions-wrap").fadeOut(400);
		$("div.try-again-wrap").fadeIn(400);
	}
}

function submitAnswer(lightQuestions) { 
	$("li").click(function() {
		var userGuess = $(this).text();	
		var currentQuestion = lightQuestions[trackQuestion]; // display first question, then increment trackQuestion by 1 to grab next question
		if (userGuess === currentQuestion.answers[currentQuestion.correct]) { // if userGuess equals the correct answer, do the following
			$("i.fa-check, p.correct-notify").show(); //show "yes!" and check-mark
			countCorrect++; // increase number of correct answers		
		} else { 
			$("i.fa-check, p.correct-notify").hide();
			$("i.fa-times, p.wrong-notify").show(); // show "nope!" and "x"
			console.log ("You've got " + countCorrect + " out of 10 questions right");
		} 

		function nextQuestion() { // move to next question
			increaseCount(); // increaseCount() should go before generateQuestion so that the value being passed in to trackQuestion has already been increased
			$("i.fa-check, i.fa-times, p.correct-notify, p.wrong-notify").hide();
			generateQuestion(lightQuestions[trackQuestion]); //passes lightQuestions or darkQuestions through here
			$("div.questions-wrap").hide().fadeIn(600);	
		}	

		setTimeout(nextQuestion, 900); // move to next questions
	});
}




// -------> LIGHT QUESTIONS <------ //

var lightQuestions = new Array();

lightQuestions[0] = new QuestionAsk("The Ewoks believe which character is God?", 
		["C-3PO", "R2-D2", "Princess Leia", "Jar Jar Binks"], 0);

lightQuestions[1] = new QuestionAsk("In 'The Empire Strikes Back', C-3PO is shot by a stormtrooper, torn to pieces, and thrown into the trash. Which character finds all of his parts just narrowing saving him from the incinerator?", 
		["Princess Leia", "Han Solo", "Chewbacca", "R2-D2"], 2);

lightQuestions[2] = new QuestionAsk("In 'A New Hope' who does R2-D2 claim to be the property of?", 
		["Captain Antillies", "Anakin Skywalker", 
		"Luke Skywalker", "Obi-Wan Kenobi"], 3);

lightQuestions[3] = new QuestionAsk("In 'Return of the Jedi', what does Princess Leia disguise herself as?", 
		["Wookie", "Storm Trooper", "Bounty Hunter", "Droid"], 2);

lightQuestions[4] = new QuestionAsk("Which famous scientist’s eyes were Yoda’s based on?",
		["Isaac Newton", "Sir Francis Bacon", "Albert Einstein", "Carl Sagan"], 2);

lightQuestions[5] = new QuestionAsk("In 'The Empire Strikes Back' when Luke and Han are missing, what does R2-D2 say the odds of survival are?",
		["1725 to 1", "725 to 1", "372 to 1", "3720 to 1"], 1);

lightQuestions[6] = new QuestionAsk("Which of these names belonged to an Ewok in 1983’s 'Return of the Jedi?'",
		["Snootles", "Woola", "Nikta", "Teebo"], 3);

lightQuestions[7] = new QuestionAsk("Who eventually had the honor of killing Jabba the Hutt?",
		["Leia", "Han Solo", "Boba Fett", "Chewbacca"], 0);

lightQuestions[8] = new QuestionAsk("When he was cast as Jedi Knight Mace Windu, Samuel L. Jackson’s special request was that his light saber was which color?", 
		["White", "Purple", "Orange", "Yellow"], 1);

lightQuestions[9] = new QuestionAsk("What is Jedi leader Obi-Wan Kenobi also known as?", 
		["The Legend", "The Informant", "The Negotiator", "The Betrayer"], 2);


// -------> DARK QUESTIONS <------ //

var darkQuestions = new Array();

darkQuestions[0] = new QuestionAsk("In 'The Empire Strikes Back', what was the name of the Rebel base on the ice world of Hoth?", 
	["The Cave", "Echo Base", "Zone 12", "Man Hothma"], 1);

darkQuestions[1] = new QuestionAsk("What are the two braids on Boba Fett’s shoulder from?", 
	["Wookie Scalps", "Jedi Padawans", "Wampa Scalps", "Both Wookie and Wampa Scalps"], 0);

darkQuestions[2] = new QuestionAsk("In 'Revenge of the Sith', who was the dark lord of the Sith that allegedly was able to save people from death?", 
	["Darth Tyrannus", "Darth Vader", "Darth Sidious", "Darth Plageuis"], 3);

darkQuestions[3] = new QuestionAsk("In 'Return of the Jedi,' what are the first words Jabba the Hutt says?", 
	["I told you not to admit him!", "A Jedi.", "You weak-minded fool! He’s using an old Jedi mind trick.", "Han Solo…"], 2);

darkQuestions[4] = new QuestionAsk("What group kidnapped Anakin Skywalker’s mother and later caused trouble for Luke Skywalker?", 
	["The Sith", "The Jawas", "The Sand People", "Ewoks"], 2);

darkQuestions[5] = new QuestionAsk("How old was Darth Vader when he turned to the dark side?", 
	["19", "32", "40", "21"], 3);

darkQuestions[6] = new QuestionAsk("In 'The Phantom Menace,' which Jedi Knight did Darth Maul kill?", 
	["Qui-Gon Jinn", "Mace Windu", "Ki-Adi-Mundi", "Saesee Tin"], 0);

darkQuestions[7] = new QuestionAsk("What does AT-AT stand for?", 
	["Automotive Transport Attack Tank", "Attack Terrain Armoured Transport", "All Terrain Armoured Transport", "All Turtles Attack Tacos"], 0);

darkQuestions[8] = new QuestionAsk("Who was the first Dark Side users?", 
	["The Sith", "The Celestials", "The Brotherhood of Darkness", "The Coulmi"], 1);

darkQuestions[9] = new QuestionAsk("Who cut off Anakin Skywalker’s arm during a fight?", 
	["The Rodian Assassin", "Count Dooku", "Palpatine", "Jango Fett"], 1);









