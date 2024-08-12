// In this homework, you will be building a "hangman" game. 
// Create a new variable and put a random word in
let word = "Dios"

// Create a new variable called attempts and set it to 0
let attempts = 0

// Prompt the user to guess a letter
 let user = prompt("Guess a letter")

// Write an if statement that uses the includes() method to check if the letter is in the word -- Google the syntax!
// Tell the user if their letter is in the word
if (word.includes(user)){
  console.log("Nice Job")
}else{
  console.log("Think again")
}

// Prompt the user to guess the word 
let user2 = prompt ("Guess the word ")
// Increase attempts by 1
attempts++

// Write an if/else statement that checks if the user guess is equal to your word and tells the user
if (user == word){
  console.log("Good")
} else {
  console.log("Nah")
}


// Now we will combine this input a while loop!
// Create a while loop that runs while the user guess is not equal to the word
// In the while loop, copy the prompt and if/else check for a letter
console.log (`It took you ${attempts} attempts`)

while (user2 != word) {
  let user = prompt("Guess a letter")

  if(word.includes(user)){
    console.log("Good now keep going")
}else{
  console.log ("Try again")
}
}
