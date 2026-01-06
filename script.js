// Creates a number guessing game & keep taking user input until the correct number is reached...
const value = 63;
let guess;
do{
    guess = Number(prompt("Enter your guess: "));
    if(guess != value){
        alert("Your guess is incorrect. Try again.");
    }
    else{
        alert("Your guess is correct!");
        console.log("Congratulations!", guess, "was the correct guess.");
    }
} while(guess !== value);