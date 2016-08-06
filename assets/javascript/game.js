//variables
var characters = ["ryu","ken","sagat","chunli","mbison","balrog","ehonda","guile","zangief","cammy","vega","dhalsim","blanka"];
var userWins = 0;
var triesRemaining = 6;
var letters = "abcdefghijklmnopqrstuvwxyz";
var lettersArray = letters.split("");
console.log(lettersArray);
var guessedArray = [];
var userGuess=guessedArray;



//takes users key presses
document.onkeyup = function(event) { 
	var lettersGuessed = String.fromCharCode(event.keyCode).toLowerCase();


//places letters in already guessed section
var lettersUsed=document.getElementById("guessed");
lettersUsed.innerHTML=guessedArray + lettersGuessed;

guessedArray.push(lettersGuessed);
console.log(guessedArray);

var userGuess=lettersGuessed;
}


//picks a random word from characters array
function randomWord() {
	var currentWord = characters[Math.floor(Math.random()*characters.length)];
	console.log(currentWord);
	//	
	var placeholder="";
	for (var i=0; i<currentWord.length; i++){
		placeholder=placeholder+"_";
		console.log(placeholder);
		//logs the current word's characters at their indexes
		console.log(currentWord.charAt(i));	

	}



	//sets the random word on html page
	newCurrent=document.getElementById("currentwordP");
	newCurrent.innerHTML=placeholder;
}
randomWord();

