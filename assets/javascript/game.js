//variables
var characters = ["ryu","ken","sagat","chunli","mbison","balrog","ehonda","guile","zangief","cammy","vega","dhalsim","blanka"];
var userWins = 0;
var triesRemaining = 6;


alphabet = [];
for (i = 97; i <= 122; i++){
    alphabet[alphabet.length] = String.fromCharCode(i);
}
console.log(alphabet);

//takes users key presses
document.onkeyup = function(event) { 
	var lettersGuessed = String.fromCharCode(event.keyCode).toLowerCase();
//replaces placeholder text on page with user keys
	document.getElementById("currentwordP").innerHTML=lettersGuessed;

console.log(lettersGuessed);


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
	}

	//sets the random word on html page
	newCurrent=document.getElementById("currentwordP");
	newCurrent.innerHTML=placeholder;
}
randomWord();

