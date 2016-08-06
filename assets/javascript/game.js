//variables
var characters = ["ryu","ken","sagat","chunli","mbison","balrog","ehonda","guile","zangief","cammy","vega","dhalsim","blanka"];
var userWins = 0;
var triesRemaining = 6;
var letters = "abcdefghijklmnopqrstuvwxyz";
var currentWord;
var placeholder;



//takes users key presses
document.onkeyup = function(event) { 
	var guessed = String.fromCharCode(event.keyCode).toLowerCase();
	var guessedPosition= currentWord.indexOf(guessed);
	if (guessedPosition==-1) {
		triesRemaining--;
	}else{
		var correctGuess=[];
		correctGuess.push(guessedPosition);
	}
	console.log(guessedPosition);
	console.log(correctGuess);
}


//picks a random word from characters array
function randomWord() {
	currentWord = characters[Math.floor(Math.random()*characters.length)];
	console.log(currentWord);
	//	
	placeholder="";
	for (var i=0; i<currentWord.length; i++){
		placeholder=placeholder+"_";
		
	}
	console.log(currentWord.indexOf(guessed));

	//sets the random word on html page
	newCurrent=document.getElementById("currentwordP");
	newCurrent.innerHTML=placeholder;
}
randomWord();

