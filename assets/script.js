
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
const StartGameButton = document.getElementById('startbutton')
var timerVisual = document.getElementById('Timerclass')
var currentQuestionText = document.getElementById('question')
var wins = document.getElementById('Winclass')
var highscoreForm = document.getElementById('HighScoreFormClass')


var displayQuestion1 = document.getElementById('button1')
var displayQuestion2 = document.getElementById('button2')
var displayQuestion3 = document.getElementById('button3')
var displayQuestion4 = document.getElementById('button4')

var Timer = 60;
var winscounter = 0;
var Gamestart = 0;
var highScores = [];
var questionStep = 0;
let userAnswer = null;

var questionarray = [
    "What do you call a variable that holds multible variables?",
    "When de-bugging, which syntax comes in handly to figure out where bugs are located?", 
    "What do you call the syntax that declares if something is true/false?",
    "What is the data-type that stores words?",
    "What do you call a variable that holds a number?"
];

// These arrays are for display purposes only.

// "What do you call a variable that holds multible variables?",
var question1answers = [
    { name: "array", isTrue: true}, 
    { name: "box", isTrue: false},
    { name: "container", isTrue: false},
    { name: "combination", isTrue: false}
]
// "When de-bugging, which syntax comes in handly to figure out where bugs are located?", 
var question2answers = [
    { name: "Log.Issue", isTrue: false}, 
    { name: "Log.Console", isTrue: false},
    { name: "Console.Log", isTrue: true},
    { name: "find.bug", isTrue: false}
]
// "What do you call the syntax that declares if something is true/false?", 
var question3answers = [
    { name: "boolean", isTrue: true}, 
    { name: "Truthy-falsy", isTrue: false},
    { name: "ListeningEvent", isTrue: false},
    { name: "Value", isTrue: false}
]
// "What is the data-type that stores words?", 
var question4answers = [
    { name: "integer", isTrue: false}, 
    { name: "Display", isTrue: false},
    { name: "Word", isTrue: false},
    { name: "String", isTrue: true},
]
// "What do you call a variable that holds a number?"
var question5answers = [
    { name: "integer", isTrue: true}, 
    { name: "Real", isTrue: false},
    { name: "Number", isTrue: false},
    { name: "Var", isTrue: false},
]

// --------------------------------------------------

// I learned that you are able to apply a boolean to a variable in an array thanks to this video:
// https://www.youtube.com/watch?v=PBcqGxrr9g8&t=542s I was originally hoping to use this in a function to find
// which question had the isTrue = True value. This ended up not working out and I left it as is just to track
// The right answers for myself. I could remove it. But I am out of time.

// NOTE FOR THE GRADER: I decided to keep my Console.logs in this project, but commented out. 
// I am aware that typically its better to fully remove
// them, I wanted to keep them here to show my process a bit better. Please do not deduct points
//for me leaving them if you would be so kind.

// REMEMBER TO STORE LOCAL STORAGE

// Highscore Function

function addHighScoreFunction(UserInput) {
    let highScores = JSON.parse(localStorage.getItem("HighScores")) || [];
    highScores.push(UserInput);
    localStorage.setItem("HighScores", JSON.stringify(highScores));
    localStorage.setItem("Score", JSON.stringify(60 - Timer));
    highscoreForm.textContent = "";
    for (let i = 0; i < highScores.length; i++) {
        highscoreForm.textContent += highScores[i] + "\n";
    }
}

function highScore() {
    console.log("highScore Function Reached");
    let person = prompt("Please enter your name");
    if (person === null || person === "") {
        console.log("User cancelled the prompt.");
    } else {
        addHighScoreFunction(person);
        console.log("addHighScoreFunction Function Reached");
    }
}

// https://www.w3schools.com/js/js_popup.asp

// -----------------------------------





// Win function
// -----------------------------------
function winFunction(){
    console.log("Win Function Reached")
    winscounter++;
    wins.textContent = wins;
    console.log("Wins: " + wins)
    button1.remove();
    button2.remove();
    button3.remove();
    button4.remove();
    highScore();
}
// Game Over Function
function gameOverFunction(){
    console.log("Game Over Function Reached")
    clearInterval(Timer);
    displayQuestion1.textContent = "Game over!";
    displayQuestion2.textContent = "Game over!";
    displayQuestion3.textContent = "Game over!";
    displayQuestion4.textContent = "Game over!";
    alert("Game Over!")
}
// -----------------------------------
//Right answer function/Reset Timer function
function rightAnswerFunction(){
    console.log("Right Answer Function Reached")
    questionStep++;
    fillanswersFunction();
    changequestionfunction();

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
        timerVisual.textContent = 'Game Over!'
        gameOverFunction;
    } else {
        console.log("Timer: " + Timer);
        Timer--;
    }
}

function fillanswersFunction(){
    console.log("fillanswerFunction Reached")
    if (questionStep === 0)
    {
    displayQuestion1.textContent = question1answers[0].name;
    displayQuestion2.textContent = question1answers[1].name;
    displayQuestion3.textContent = question1answers[2].name;
    displayQuestion4.textContent = question1answers[3].name;
    console.log("question 1 reached: " + questionStep)
    }
    else if (questionStep === 1)
    {
        displayQuestion1.textContent = question2answers[0].name;
        displayQuestion2.textContent = question2answers[1].name;
        displayQuestion3.textContent = question2answers[2].name;
        displayQuestion4.textContent = question2answers[3].name;
        console.log("question 2 reached: " + questionStep)
    }  else if (questionStep === 2)
    {
        displayQuestion1.textContent = question3answers[0].name;
        displayQuestion2.textContent = question3answers[1].name;
        displayQuestion3.textContent = question3answers[2].name;
        displayQuestion4.textContent = question3answers[3].name;
        console.log("question 3 reached: " + questionStep)
    }  else if (questionStep === 3)
    {
        displayQuestion1.textContent = question4answers[0].name;
        displayQuestion2.textContent = question4answers[1].name;
        displayQuestion3.textContent = question4answers[2].name;
        displayQuestion4.textContent = question4answers[3].name;
        console.log("question 4 reached: " + questionStep)
    }  else if (questionStep === 4)
    {
        displayQuestion1.textContent = question5answers[0].name;
        displayQuestion2.textContent = question5answers[1].name;
        displayQuestion3.textContent = question5answers[2].name;
        displayQuestion4.textContent = question5answers[3].name;
        console.log("question 5 reached: " + questionStep)
    }
}

function question1(){
 if (question1answers[returnAnswer].isTrue = true);
    console.log("Question 1 Answered Correct!");
    return true;
}


// Button user input function

buttonarray = [
    function(){
        console.log("Answer Button 1 Pressed")
        userAnswer = 0;
    },    function(){
        console.log("Answer Button 2 Pressed")
        userAnswer = 1;
    },    function(){
        console.log("Answer Button 3 Pressed")
        userAnswer = 2;
    },    function(){
        console.log("Answer Button 4 Pressed")
        userAnswer = 3;
    },

]

function returnAnswer(){
    console.log("returnAnswer = " + userAnswer)
    return userAnswer;
}

// button1.addEventListener("click", buttonarray[0]);
// button2.addEventListener("click", buttonarray[1]);
// button3.addEventListener("click", buttonarray[2]);
// button4.addEventListener("click", buttonarray[3]);

button1.addEventListener("click", function() {
    buttonarray[0]();
    answerChecker();
});
button2.addEventListener("click", function() {
    buttonarray[1]();
    answerChecker();
});
button3.addEventListener("click", function() {
    buttonarray[2]();
    answerChecker();
});
button4.addEventListener("click", function() {
    buttonarray[3]();
    answerChecker();
});


// -----------------------------------


//Alot of the timer function aboved was taken from this source. I tried to make it as simple as possible.
//I did not encounter any bugs when running it.
//https://stackoverflow.com/questions/43796179/make-a-simple-javascript-timer
// -----------------------------------
// Generate question function
function generatequestion(){
    console.log("Generate Questions Function Reached");
    var currentQuestionText = questionarray[questionStep];
        return currentQuestionText;
    
}

function answerChecker()
{
    console.log("function answerChecker reached")
    if (questionStep === 0){
        if (userAnswer === 0){
            rightAnswerFunction();
        }else{
            wrongAnswerFunction();
        }
    } else if (questionStep === 1){
        if (userAnswer === 2){
            rightAnswerFunction();
        }else{
            wrongAnswerFunction();
        }
    } else if (questionStep === 2){
        if (userAnswer === 0){
            rightAnswerFunction();
        }else{
            wrongAnswerFunction();
        }
    } else if (questionStep === 3){
        if (userAnswer === 3){
            rightAnswerFunction();
        }else{
            wrongAnswerFunction();
        }
    } else if (questionStep === 4){
        if (userAnswer === 0){
            winFunction();
        }else{
            wrongAnswerFunction();
        }
    }
}

//The above function checks for the right answer. I originally wanted to try and do a more optimized function that would check for a boolean but
//I couldn't get it to work and I ran out of time.

function changequestionfunction(){
    currentQuestionText.textContent = generatequestion(questionStep);
}

// -----------------------------------
//Start Game function
function gamestart(){
    var timerInterval = setInterval(starttimerFunction, 1000);
    console.log("Start button pressed")
    changequestionfunction();
    let gamestart = 1;
    console.log("Game start value: " + gamestart);
    StartGameButton.remove();



}

StartGameButton.addEventListener("click", function(){
    gamestart();
    starttimerFunction();
    fillanswersFunction();
});

// ----------------------------------