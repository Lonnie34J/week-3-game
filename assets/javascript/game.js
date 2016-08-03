//variables
var characters = ["ryu","ken","sagat","chunli","mbison","balrog","ehonda","guile","zangief","cammy","vega","dhalsim","blanka"];
var userWins = 0;
var triesRemaining = 6;

//variables to be set by the computer and user guesses
document.onkeyup = function(event) { 
var lettersGuessed = String.fromCharCode(event.keycode).toLowerCase();
var currentWord = characters[Math.floor(Math.random()*characters.length)];
}