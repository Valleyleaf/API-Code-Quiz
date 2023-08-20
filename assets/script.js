
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
var Timer = 60;

// Win function
// -----------------------------------
function winFunction(){
    console.log("Win Function Reached")
}

// Game Over Function
function gameOverFunction(){
    console.log("Game Over Function Reached")
}

// -----------------------------------
//Right answer function/Reset Timer function
function rightAnswerFunction(){
    console.log("Right Answer Function Reached")
}


// -----------------------------------
// Wrong Answer Function
function wrongAnswerFunction(){
    console.log("Wrong Answer Function Reached")
}

// -----------------------------------
// TimeDown function
function timedown(){
    var timerInterval = setInterval(function () { 
        
    }, 1000);
}


// -----------------------------------
// Start Timer function
function starttimerFunction(){


        if (Timer < 1){
            gameOverFunction();
            clearInterval(timerInterval);
        } else {
            timedown();
            console.log("Timedown Function Reached")
        }       
}


// -----------------------------------
// Generate answers function
function generateanswers(){
    console.log("Generate Answers Function Reached")
}


// -----------------------------------
// Generate question function
function generatequestion(){
    console.log("Generate Questions Function Reached")

}




// -----------------------------------
//Start Game function
function gamestart(){
    console.log("Start button pressed")
    generatequestion();
    generateanswers();
    starttimerFunction();
}


StartGameButton.addEventListener("click", function(){
    gamestart();

});

// ----------------------------------