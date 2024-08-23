# import library
import random

# settings
guess = False
playerGuess = 0

# start and welcome player
while guess == False:
  # set the random number and make sure timeOfGuess is 0
  timeOfGuess = 0
  number = random.randint(1,50)
  print("Welcome to number guess game !")
  # start game
  while guess == False:
    playerGuess = int(input("Please input a number between 1 and 50 (integer): "))
    # check if the playerGuess is bigger or smaller than number and print the tips
    if playerGuess > number:
      timeOfGuess += 1
      print("it is too big try again.")
    elif playerGuess < number:
      timeOfGuess += 1
      print("it is too small try again")
    # check if the playerGuess is equal to number and print the congratulation and the timeOfGuess
    else:
      timeOfGuess += 1
      guess = True
      print(f"Congratulation you guess the number in {timeOfGuess} times !!!")
      