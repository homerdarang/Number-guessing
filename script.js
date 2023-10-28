'use strict';
 

// console.log(document.querySelector('.message').textContent);

// let message = document.querySelector('.message').textContent = 'Correct Number';
// console.log(message);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value;

let number = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let trial = 5;

let displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);
    // when no input detected
    if (!guess) {
        // document.querySelector('.message').textContent = '⛔️ No Detected Number!';
        displayMessage('⛔️ No Detected Number!');
    }

     else if (guess > 20) {
        // document.querySelector('.message').textContent = 'Guess number is out of range!';
        displayMessage('Guess number is out of range!');
    }

     else if (guess !== number) {
        
        if (trial > 0) {
            trial--;
            // document.querySelector('.message').textContent = guess > number ? 'Your guess is too high!' : 'Your guess is too low!';
            displayMessage(guess > number ? 'Your guess is too high!' : 'Your guess is too low!');
            document.querySelector('.trial').textContent = trial;
            if(trial === 0) displayMessage('💔 You lose!');

        } 
    }

      else {
         // when player wins
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.between').style.color = '#eee';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = number;
        // document.querySelector('.message').textContent = 'Correct number. Congratulations!';
        displayMessage('Correct number. Congratulations!');
        highscore++;
        document.querySelector('.highscore').textContent = highscore;
    }

});


document.querySelector('.again').addEventListener('click', () => {
    // timeRefresh;
    trial = 5;
    // highscore = 0;
    number = Math.trunc(Math.random() * 20) + 1;
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.trial').textContent = trial;
    // document.querySelector('.highscore').textContent = highscore;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
});


// function that holds the highscore and multiplied it by tens ex. if highscore is 2. then