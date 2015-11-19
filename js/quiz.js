
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


	
var trackQuestion = 0;
var questionTotal = 10;
var countCorrect = 0; //creat function for this



$(document).ready(function() {
	// hide questions from user
	$("div.questions-wrap").hide();

	// when mouse hovers over light button, show text
	$("button.choose-light").mouseenter(function() { 
		$("button.choose-light img").hide();
		$("button.choose-light p").show();
	});


	// -------> LIGHT BUTTON <------ //

	// when mouse hovers over light button, show icon
	$("button.choose-light").mouseleave(function() {
		$("button.choose-light img").show();
		$("button.choose-light p").hide();
	});
	


	// -------> IF CHOOSE LIGHT <------ //

	// if choose light, start game
	 $("button.choose-light").click(function() { 
	 	showGame();

	 	// hide light sabers icon
		$("img.light-sabers").hide(); 

		//show player icon
		$("img.playericon-light").slideToggle(300, "easeInQuint");

		// add green background 
		$("li").addClass("options-light-background"); 

		// when mouse hovers over question, turn blue
		$("li").mouseenter(function() {
			$(this).removeClass("options-light-background");
			$(this).addClass("options-hover");
		});

		// when mouse leaves questions, turn green
		$("li").mouseleave(function() {
			$(this).addClass("options-light-background");
			$(this).removeClass("options-hover");
		});

		//show question 1 of lightQuestions array
		generateQuestion(lightQuestions[0]);	
		//submitAnswer(lightQuestions);
	});


// -------> IF CHOOSE DARK <------ //



	// if choose dark, start game
	 $("button.choose-dark").click(function() { 
		showGame();
		$("div.questions-wrap").show();
		$("img.light-sabers").hide();
		$("img.playericon-dark").slideToggle(300, "easeInQuint");
		$("li").addClass("options-dark-background"); 

		// when mouse hovers over question, turn blue
		$("li").mouseenter(function() {
			$(this).addClass("options-hover");
			$(this).removeClass("options-dark-background");
		});

		// when mouse leaves question, turn red
		$("li").mouseleave(function() {
			$(this).removeClass("options-hover");
			$(this).addClass("options-dark-background");
		});
		generateQuestion(darkQuestions[0]);
		//submitAnswer(darkQuestions);
	});	


	 // -------> SUBMIT ANSWER <------ //

	 // when click on a question, do the following
	 $("ul.options-wrap li").on("click", function() {
	 	var userGuess = $(this).text();
	 	var currentQuestion = lightQuestions[trackQuestion];
	 	console.log(userGuess);

	 	// if question is undefined or you're on question nine or more, show start over screen
	 	if (!currentQuestion || trackQuestion > 9) {
	 		startOver();
	 		generateQuestion(lightQuestions[trackQuestion]);
				$("i.fa-check, i.fa-times, p.correct-notify, p.wrong-notify").hide();
				$("span#track-questions").text(trackQuestion +1);

	 	} else {

	 		// if user guess equals the correct answer, add +1 to countCorrect, show "yep!" icon
		 	if (userGuess === currentQuestion.answers[currentQuestion.correct]) {
		 		countCorrect++;	
		 		$("i.fa-check, p.correct-notify").show();

		 	} else {

		 		// show "nope!" icon
		 		$("i.fa-check, p.correct-notify").hide();
				$("i.fa-times, p.wrong-notify").show();
		 	}

		 	// ensures the proper array of questions is grabbed
		 	trackQuestion++

		 	// delay showing next queston by 900
		 	setTimeout(function() {
				generateQuestion(lightQuestions[trackQuestion]);
				$("i.fa-check, i.fa-times, p.correct-notify, p.wrong-notify").hide();
				$("span#track-questions").text(trackQuestion +1);
		 	}, 900); }

		});
});


// -------> FUNCTIONS <------ //


function generateQuestion(currentQuestion) { // shows new questions
	if (!currentQuestion || trackQuestion > 9) {
		startOver();
	} else { 

		$("p.question").text(currentQuestion.question);
		$("li.option1").text(currentQuestion.answers[0]);
		$("li.option2").text(currentQuestion.answers[1]);
		$("li.option3").text(currentQuestion.answers[2]);
		$("li.option4").text(currentQuestion.answers[3]);
	}
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


function startOver() {
	$("span#final-score").text(countCorrect);
	$("div.questions-wrap").fadeOut(400);
	$("div.try-again-wrap").fadeIn(400);
	$("i.fa-check, p.correct-notify").hide(); // fixes bug at startOver
	$("i.fa-times, p.wrong-notify").hide(); // fixes bug at startOver
	$(".try-again").click(function() {
		showIntro();
		trackQuestion = 0;
		questionTotal = 10;
		countCorrect = 0;
	$("span#track-questions").text(trackQuestion +1);
	});	
}

function showIntro() {
	$(".main").show();
	$("img.light-sabers").show();
	$("img.playericon-light, img.playericon-dark").hide();
	$("div.try-again-wrap").hide();
}




// function increaseCount() { // track current question out of 10 total	
// 	trackQuestion++; // add one for the user
// 	$("span#track-questions").text(trackQuestion +1); 
// }

// function submitAnswer(lightQuestions) { 
// 	$("li").click(function() {
// 		var userGuess = $(this).text();	
// 		var currentQuestion = lightQuestions[trackQuestion]; // display first question, then increment trackQuestion by 1 to grab next question
// 		//console.log("before if", trackQuestion);
// 		if (userGuess === currentQuestion.answers[currentQuestion.correct]) { // if userGuess equals the correct answer, do the following
// 			console.log("after if", trackQuestion);
// 			$("i.fa-check, p.correct-notify").show(); //show "yes!" and check-mark
// 			countCorrect++; // increase number of correct answers	
// 		} else { 
// 			$("i.fa-check, p.correct-notify").hide();
// 			$("i.fa-times, p.wrong-notify").show(); // show "nope!" and "x"
// 		} 
// 		function nextQuestion() { // move to next question
// 			increaseCount(); // increaseCount() should go before generateQuestion so that the value being passed in to trackQuestion has already been increased
// 			$("i.fa-check, i.fa-times, p.correct-notify, p.wrong-notify").hide();
// 			generateQuestion(lightQuestions[trackQuestion]); //passes lightQuestions or darkQuestions through here
// 		}
// 		// move to next questions
// 		if (trackQuestion < 9) {  
// 			setTimeout(nextQuestion, 900); 
// 		} else {
// 			$("div.questions-wrap").fadeOut(400);
// 			$("div.try-again-wrap").fadeIn(400);
// 			$("i.fa-check, p.correct-notify").hide(); // fixes bug at startOver
// 			$("i.fa-times, p.wrong-notify").hide(); // fixes bug at startOver
// 			//startOver();
// 		}
// 	});
// }








