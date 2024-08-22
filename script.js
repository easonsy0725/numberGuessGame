let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  const userGuess = document.getElementById("guess").value;
  if (userGuess == randomNumber) {
    document.getElementById("result").textContent = "Congratulations! You guessed the right number.";
  } else if (userGuess < randomNumber) {
    document.getElementById("result").textContent = "Too low, try again.";
  } else {
    document.getElementById("result").textContent = "Too high, try again.";
  }
}