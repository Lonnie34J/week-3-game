//variables
var characters = ["ryu","ken","sagat","chunli","mbison","balrog","ehonda","guile","zangief","cammy","vega","dhalsim","blanka"];
var userWins = 0;
var triesRemaining = 6;

//takes users key presses
document.onkeyup = function(event) { 
	var lettersGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	
alert(lettersGuessed);

}


//picks a random word from characters array
function randomWord() {
	var currentWord = characters[Math.floor(Math.random()*characters.length)];
	console.log(currentWord);
	
	//sets the random word on html page
	newCurrent=document.getElementById("currentwordP");
	newCurrent.innerHTML=currentWord;
}
randomWord();