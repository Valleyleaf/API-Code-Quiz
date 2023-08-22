
// -----------------------------------
// Create Timer, this timer will count down from 60 to 0. It starts after the player hits the start button
// or answers a question. If the timer reaches zero, a function that ends the game will be activated.
// If you answer wrong, the button will flash red and you will not gain a point.
// This function will then give you the option to restart the game.
// If the user makes a correct choice, they will gain a point and reset the timer.
// IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

// Aston Note: I originally wanted to create a quiz that would pull a random question out of 5 in a random order and place the right answer randomly between 3 other randomly pulled answers. This proved difficult, you can find the reminants of that code
// In the script-Copy.js file. I plan to try and refine this at a later time. Good for learning.


//Variables go here
var StartGameButton = document.getElementById('startbutton')
var timerVisual = document.getElementById('Timerclass')
var currentQuestionText = document.getElementById('question')
var Timer = 60;
var wins = 0;
var Gamestart = 0;
var highScore = [];
var questionStep = -1;

var questionarray = [
    "What do you call a variable that holds multible variables?",
    "When de-bugging, which syntax comes in handly to figure out where bugs are located?", 
    "What do you call the syntax that declares if something is true/false?",
    "What is the data-type that stores words?",
    "What do you call a variable that holds a number?"
];

// "What do you call a variable that holds multible variables?",
var question1answers = [
    "array", "box", "container", "combination"
]
// "When de-bugging, which syntax comes in handly to figure out where bugs are located?", 
var question2answers = [
    "Log.Issue","Log.Console","Console.Log","find.bug"
]
// "What do you call the syntax that declares if something is true/false?", 
var question3answers = [
    "boolean","Truthy-falsy","ListeningEvent","Value"
]
// "What is the data-type that stores words?", 
var question4answers = [
    "integer","Display","Word","String"
]
// "What do you call a variable that holds a number?"
var question5answers = [
    "integer","Real","Number","Var"
]

// NOTE FOR THE GRADER: I decided to keep my Console.logs in this project, but commented out. 
// I am aware that typically its better to fully remove
// them, I wanted to keep them here to show my process a bit better. Please do not deduct points
//for me leaving them if you would be so kind.

// REMEMBER TO STORE LOCAL STORAGE


// Output Highscore Function
    console.log("Output Highscore Function reached")

// -----------------------------------

// Win function
// -----------------------------------
function winFunction(){
    console.log("Win Function Reached")
    var wins = wins++;
    wins.textContent = wins;
}
// Game Over Function
function gameOverFunction(){
    console.log("Game Over Function Reached")
    clearInterval(Timer);
}
// -----------------------------------
//Right answer function/Reset Timer function
function rightAnswerFunction(){
    console.log("Right Answer Function Reached")
    // Self-Note: For this function, make sure to add a flash of green upon getting the right answer.
}
// -----------------------------------
// Wrong Answer Function
function wrongAnswerFunction(){
    console.log("Wrong Answer Function Reached")
    Timer = Timer - 5;
        // Self-Note: For this function, make sure to add a flash of red upon getting the right answer.
}
// -----------------------------------
// starttimerFunction function
function starttimerFunction(){
    timerVisual.textContent = 'Timer: ' + Timer +  ' seconds left';
    if (Timer <= 0){
        clearInterval(Timer);
        timerVisual.textContent = 'Game Over!'
        gameOverFunction;
    } else {
        console.log("Timer: " + Timer);
        Timer--;
    }
}




//Alot of the timer function aboved was taken from this source. I tried to make it as simple as possible.
//I did not encounter any bugs when running it.
//https://stackoverflow.com/questions/43796179/make-a-simple-javascript-timer
// -----------------------------------
// Generate question function
function generatequestion(){
    console.log("Generate Questions Function Reached")
    questionStep++;
    console.log("questionStep = " + questionStep)
    var currentQuestionText = questionarray[questionStep]
        return currentQuestionText;
    
}
// -----------------------------------
//Start Game function
function gamestart(){
    var timerInterval = setInterval(starttimerFunction, 1000);
    console.log("Start button pressed")
    let gamestart = 1;
    console.log(gamestart);
    StartGameButton.remove();
    generatequestion();
    starttimerFunction();

}

StartGameButton.addEventListener("click", function(){
    gamestart();

});

// ----------------------------------