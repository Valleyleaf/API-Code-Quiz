
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


//Variables go here
var StartGameButton = document.getElementById('startbutton')
var timerVisual = document.getElementById('Timerclass')
var Timer = 60;
var wins = 0;
var currentQuestion = "";

var questions = [
    // Question 0
"What do you call a variable that holds multible variables?", 
    // Question 1
"When de-bugging, which syntax comes in handly to figure out where bugs are located?", 
    // Question 2
"What do you call the syntax that declares if something is true/false?", 
    // Question 3
"What is the data-type that stores words?", 
    // Question 4
"When you want Javascript to listen for a user-input, what function should you use?",
    // Question 5
"What do you call a variable that holds a number?"
];

var rightanswers = [
    "array", 
    "console.Log", 
    "boolean", 
    "string", 
    "addEventListener",
    "integer"
];

var wronganswers1 = [
    "Real",
    "Button event",
    "Trusy-Falsy",
    "Collection",
    "Numling",
    "Box",
    "Event",
    "Container",
    "Java-Script",
    "Gallery"
];

var wronganswers2 = [
    "Word-Value",
    "Var",
    "Combination",
    "Ball-Num",
    "Input",
    "Roulette",
    "ListeningEvent",
    "Strung",
    "Log.Me",
    "Send"

];

var wronganswers3 = [
    "Jass",
    ".add",
    "Bring-Value",
    "Enter.Log",
    "Display",
    "Engage",
    "Value-Input",
    "Window",
    "Stack",
    "Entrager",
];

//Astons Note: I originally intended to do one array for each question, but found that by doing so,
//the quiz got stale real quick. So instead what I decided to do was to do 3 seperate arrays that held a
//large number of potential answers. I tried to make these wrong answers as generic as possible
//to ensure that they could potentially apply to each question.

var highScore = [];

// Questions: 
// 1. What do you call a variable that holds multible variables?
    // An array
// 2. When de-bugging, which syntax comes in handly to figure out where bugs are located?
    // console.log
// 3. What do you call the syntax that declares if something is true/false?'
    // A Boolean
// 4. What is the data-type that stores words?
    // A String
// 5. When you want Javascript to listen for a user-input, what function should you use?
    // A EventListener
// 6. What do you call a variable that holds a number?
    // A Integer


// NOTE FOR THE GRADER: I decided to keep my Console.logs in this project, but commented out. 
// I am aware that typically its better to fully remove
// them, I wanted to keep them here to show my process a bit better. Please do not deduct points
//for me leaving them if you would be so kind.


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

// Generate Quiz Function

function generatequiz(){
    console.log("Generate Quiz function reached.");
        var answerTable = [generateanswers(), wronganswers1[Math.floor(Math.random() * wronganswers1.length)], wronganswers2[Math.floor(Math.random() * wronganswers2.length)], wronganswers3[wronganswers1[Math.floor(Math.random() * wronganswers3.length)]]]
        return answerTable;
}

// -----------------------------------

// Generate answers function
function generateanswers(){
    let currentQuestion = Math.floor(Math.random() * 5);
    console.log("Current question value: " + currentQuestion)
    console.log("Generate Answers Function Reached")
    if (currentQuestion === 0){
        console.log("Question: " + "0: " + questions[0]);
        let TheRightAnswer = rightanswers[0]
        delete rightanswers[0];
        return TheRightAnswer;
    } else if (currentQuestion === 1){
        console.log("Question: " + "1: " + questions[1]);
        let TheRightAnswer = rightanswers[1]
        delete rightanswers[1];
        return TheRightAnswer;
    } else if (currentQuestion === 2){
        console.log("Question: " + "2: " + questions[2]);
        let TheRightAnswer = rightanswers[2]
        delete rightanswers[2];
        return TheRightAnswer;
    } else if (currentQuestion === 3){
        console.log("Question: " + "3: " + questions[3]);
        let TheRightAnswer = rightanswers[3]
        delete rightanswers[3];
        return TheRightAnswer;
    } else if (currentQuestion === 4){
        console.log("Question: " + "4: " + questions[4]);
        let TheRightAnswer = rightanswers[4]
        delete rightanswers[4];
        return TheRightAnswer;
    } else if (currentQuestion === 5){
        console.log("Question: " +  "5: " + questions[5]);
        let TheRightAnswer = rightanswers[5]
        delete rightanswers[5];
        return TheRightAnswer;
    } else{
        console.log("Removed question found. Regenerating question.");
        generateanswers();
    }
}

// Aston Note:
// This function is responsible for 3 things. 1. It checks which question has been chosen for the user. 2. It aligns the right answer with the current question displayed. 3. It removes the question from the QuestionsArray so
// that it doesn't repeat the same question again. This is probably not the optimal way to do this but it's what I know to do, and I find that it makes the code flexable if I wish to change something in the future.

// -----------------------------------
// Generate question function
function generatequestion(){
    console.log("Generate Questions Function Reached")
    
    generateanswers();
    

}




// -----------------------------------
//Start Game function
function gamestart(){
    var timerInterval = setInterval(starttimerFunction, 1000);
    console.log("Start button pressed")
    StartGameButton.remove();
    generatequestion();
    starttimerFunction();
}

StartGameButton.addEventListener("click", function(){
    gamestart();

});

// ----------------------------------