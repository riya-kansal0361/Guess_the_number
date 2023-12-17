let randomNumber = parseInt(Math.random()*100 + 1)

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessFeild');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.loworHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p');

let prevGuess = []
let numGuess = 1;

let playGame = true 
if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value);
        validateGuess(guess)
    });
}
function validateGuess(guess){
if(isNaN(guess)){
    alert('Please enter a valid Number')
}
else if(guess<1){
    alert('Please enter a number more than 1')
}
else if(guess>100){
    alert('Please enter a number less than 100')
}
else{
    prevGuess.push(guess);
    if(numGuess === 10){
        displayGuess(guess);
        displayMessage(`Game Over. Random Number was ${randomNumber}`)
        endGame();
    }
    else{
        displayGuess(guess)
        checkGuess(guess);
    }
}
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    }
    else if(guess < randomNumber){
        displayMessage(`Number is TOO low`)
    }
    else if(guess > randomNumber){
        displayMessage(`Number is TOO high`)
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}  `
    remaining.innerHTML = `${10 - numGuess}` 
    numGuess++;                      
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button')
    p.innerHTML = `<button>Start new Game</buttton>`
    startOver.appendChild(p)
    playGame = false;
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector('.button');
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random()*100 + 1)
        prevGuess = []
        numGuess = 0;
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}