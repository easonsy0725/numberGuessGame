// set the random number
let randomNumber = Math.floor(Math.random() * 100) + 1;

// check if userGuess is equal , bigger or smaller than the random number
function checkGuess() {
  const userGuess = document.getElementById("guess").value;
  if (userGuess > randomNumber) {
    document.getElementById("result").textContent = "Too high, try again.";
  } else if (userGuess < randomNumber) {
    document.getElementById("result").textContent = "Too low, try again.";
  } else {
    document.getElementById("result").textContent = "Congratulations! You guessed the right number.";
  }
}
