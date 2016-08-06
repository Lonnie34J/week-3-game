//variables
var characters = ["ryu","ken","sagat","chunli","mbison","balrog","ehonda","guile","zangief","cammy","vega","dhalsim","blanka"];
var userWins = 0;
var triesRemaining = 6;
var letters = "abcdefghijklmnopqrstuvwxyz";
var currentWord;
var placeholder;
var correctGuess;




//takes users key presses
document.onkeyup = function(event) { 
	var guessed = String.fromCharCode(event.keyCode).toLowerCase();
	
	//determines if user guess equals letter of current word
	var guessedPosition= currentWord.indexOf(guessed);
	//if user guess is wrong subract 1 from tries remaining
	if (guessedPosition==-1) {
		triesRemaining--;
	}else{
		
	}
	
	console.log(guessedPosition);

	//displays tries remaining counter on page
	newTries = document.getElementById("tries");
	newTries.innerHTML = triesRemaining;
	//displays key pressed by the user
	correctGuess= document.getElementById("guessed");
	correctGuess.innerHTML = guessed;
}


//picks a random word from characters array
function randomWord() {
	currentWord = characters[Math.floor(Math.random()*characters.length)];
	console.log(currentWord);
	
	//counts out number of characters in randomly chosen word and replaes them with '_'	as a place holder
placeholder="";
	for (var i=0; i<currentWord.length; i++){
		placeholder=placeholder+"_";
	}

	//sets the random word on html page
	newCurrent=document.getElementById("currentwordP");
	newCurrent.innerHTML=placeholder;
}
randomWord();
