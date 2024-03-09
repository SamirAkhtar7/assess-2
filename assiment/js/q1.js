const randomNumber = Math.floor(Math.random() * 11) + 10;
let guesses = 3;

while (guesses > 0) {
  const guess = parseInt(prompt("Guess the number between 10 and 20:"));

  if (guess === randomNumber) {
    console.log("Congratulations! You guessed the right number.");
    break;
  } else {
    guesses--;
    if (guesses > 0) {
      console.log(
        `Wrong guess! You have ${guesses} ${
          guesses === 1 ? guess : guesses
        } left.`
      );
    } else {
      console.log(
        `Sorry, youre out of guesses. The correct number was ${randomNumber}.`
      );
    }
  }
}
