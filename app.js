const computerChoiceDisplay = document.getElementById('computer-choice') // picked out span using id
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button') //querySelectorAll because you want to select all buttons
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => { //addEventListener for buttons are click
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
  }))

  function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length

    if (randomNumber === 1) {
      computerChoice = 'rock'
    }
    else if (randomNumber === 2) {
      computerChoice = 'scissors'
    }
    else {
      computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
  }

  function getResult() {
    if (computerChoice === userChoice) {
      result = 'Its a Draw!'
    } 
    else if (computerChoice === 'rock' && userChoice === 'paper') {
      result = 'You Win!'
    } 
    else if (computerChoice === 'rock' && userChoice === 'scissors') {
      result = 'You Lost!'
    } 
    else if (computerChoice === 'scissors' && userChoice === 'rock') {
      result = 'You Win!'
    }
    else if (computerChoice === 'scissors' && userChoice === 'paper') {
      result = 'You Lost!'
    }
    else if (computerChoice === 'paper' && userChoice === 'rock') {
      result = 'You Lost!'
    }
    else if (computerChoice === 'paper' && userChoice === 'scissors') {
      result = 'You Win!'
    }
    else {
      result = 'Game Void!'
    }

    resultDisplay.innerHTML = result
  }