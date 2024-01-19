// DOM elements needed

// TODO: Grab the HTML element that holds the blanks (it is the div with class 'word-blanks')
var wordBlanksEl = document.querySelector('.word-blanks');
// TODO: Grab the HTML element that holds the wins counter (it is the span with class 'win')
var winEl = document.querySelector('.win');
// TODO: Grab the HTML element that holds the losses counter (it is the span with class 'lose')
var loseEl = document.querySelector('.lose');
// TODO: Grab the HTML element that holds the time left (it is the div with class 'timer-count')
var timerCountEl = document.querySelector('.timer-count');
// TODO: Grab the start button
var startEl = document.querySelector('.start-button');
// Global variables needed
var win = 0;
var loss = 0;
// Array of words the user will guess
var words = [
	'variable',
	'array',
	'modulus',
	'object',
	'function',
	'string',
	'boolean',
];
// TODO: Declare additional global variables as needed - you will decide as you progress through coding this game
	var targetWord = "";


// The startGame function is called when the start button is clicked
function startGame() {
	// TODO: Reset the time left, as well as any other global variables as needed
	timer = 10;
	// TODO: Call the 'renderBlanks' function
	renderBlanks();
	// TODO: Call the 'setTimer' function
	setTimer();
	// TODO (Optional): Disable the start button, so it cannot be clicked when round is in progress
}

// TODO: Attach an event listener to the start button to call the 'startGame' function on click
startEl.addEventListener("click", startGame);
// Function to display blanks ('_') on screen
function renderBlanks() {
	// TODO: Randomly pick a word from the 'words' array - this will be the hidden word the user must guess
	
	var wordChoice = Math.floor(Math.random() * words.length);
		console.log('wordChoice', words[wordChoice]);
	
	var targetWord = words[wordChoice];

	// TODO: Create a string with each blank ('_') separated by a space. The number of blanks must match the number of letters in the hidden word. For example, if the hidden word is 'modulus', then the string of blanks should be '_ _ _ _ _ _ _'
	var wordSpaces = Array(targetWord.length).fill('_').join(' ');
		console.log('spaces', wordSpaces);
	// TODO: Display the blanks on the page (it should be the text content of the div with class 'word-blanks')
	wordBlanksEl.textContent = wordSpaces;

}

//Function to control the timer
function setTimer() {
	// TODO: Set the timer using setInterval(). Every second, decrement the time left by 1 and check if you need to stop the timer either because the user has found the hidden word or because there is no time left.
	/* Hints:
  - If the user has found the hidden word in time, then stop the timer (use clearInterval()) and invoke the 'winGame' function
  - If there is no time left, then stop the timer (use clearInterval()) and invoke the 'loseGame' function
  */
  var timerInterval = setInterval(function() {
    timer--;
    timerCountEl.textContent = timer;

    if(timer !== 0 && wordBlanksEl === 0) {
      // Stops execution of action at set interval
      	clearInterval(timerInterval);
      // Calls winGame function
      	winGame();
    }
	else if (timer === 0) {
		clearInterval(timerInterval);
		loseGame();
	}

  }, 1000);
}

// The winGame function is called when the user has found the hidden word
function winGame() {
	// TODO: Let the user know they won
	wordBlanksEl.textContent = "You win";
	// TODO: Update the win count on screen as well as in local storage
	localStorage.setItem("winEl", win++);
	winEl.textContent = win;
	// TODO (Optional): Enable the start button in case the user wants to play again
}

// The loseGame function is called when timer reaches 0
function loseGame() {
	// TODO: Let the user know they lost
	wordBlanksEl.textContent = "You Lose";
	// TODO: Update the loss count on screen as well as in local storage
	localStorage.setItem("loseEl", loss++);
	loseEl.textContent = loss;
	// TODO (Optional): Enable the start button in case the user wants to play again
}

// The checkLetters function tests if the guessed letter is in the hidden word and renders it to the screen.
function checkLetters(letter) {
	// TODO: Loop over each letter of the hidden word and update the blanks if the letter guessed is in the hidden word
	for (let i = 0; i < targetWord.length; i++) {
		if (letter.toLowerCase() === targetWord[i].toLowerCase()) {
			wordBlanksEl.textContent[i]
			console.log(wordBlanksEl.textContent[i]); 
		}
		
	}
}

// Attach event listener to document to listen for key event
document.addEventListener('keydown', function (event) {
	// TODO: Check the time left - if time is up, exit the function
	console.log(event.key);
	if (timer === 0) {
		return;
	}
	// TODO: Collect the key pressed. If it is a letter, then: (1) pass it to the 'checkLetters' function to verify if it's a correct guess, then (2) check if the user has found the hidden word
	checkLetters(event.key);
	
});

// Function to retrieve the number of wins stored in local storage. This function is used in the init function.
function getWins() {
	// TODO: Get stored value from local storage and display it on the page.
	
	//If there was nothing retrieved from local storage then set the number of wins to 0
}

// Function to retrieve the number of losses stored in local storage. This function is used in the init function.
function getlosses() {
	// TODO: Get stored value from local storage and display it on the page. If there was nothing retrieved from local storage then set the number of losses to 0
}

// The init function is called when the page loads
function init() {
	getWins();
	getlosses();
}
// Call init() so that it fires when page loads
init();

// TODO - Bonus: Add a reset button
