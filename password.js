const banner = `
██████   █████  ███████ ███████ ██     ██  ██████  ██████  ██████      ██    ██  █████  ██      ██ ██████   █████  ████████  ██████  ██████      ██████   ██████   ██████   ██████  ██ 
██   ██ ██   ██ ██      ██      ██     ██ ██    ██ ██   ██ ██   ██     ██    ██ ██   ██ ██      ██ ██   ██ ██   ██    ██    ██    ██ ██   ██          ██ ██  ████ ██  ████ ██  ████ ██ 
██████  ███████ ███████ ███████ ██  █  ██ ██    ██ ██████  ██   ██     ██    ██ ███████ ██      ██ ██   ██ ███████    ██    ██    ██ ██████       █████  ██ ██ ██ ██ ██ ██ ██ ██ ██ ██ 
██      ██   ██      ██      ██ ██ ███ ██ ██    ██ ██   ██ ██   ██      ██  ██  ██   ██ ██      ██ ██   ██ ██   ██    ██    ██    ██ ██   ██          ██ ████  ██ ████  ██ ████  ██    
██      ██   ██ ███████ ███████  ███ ███   ██████  ██   ██ ██████        ████   ██   ██ ███████ ██ ██████  ██   ██    ██     ██████  ██   ██     ██████   ██████   ██████   ██████  ██ `

// Welcome the user to the password validator tool
console.log(`Welcome to 
`, banner, `
Let\'s get that password validated!`)
const { read } = require('fs');
// Prompt the user for a password to validate
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What is your password? ", function(input){
	tokens = input.split(' ');


// Check if the user’s password meets the following constraint:
        // At least 10 characters long
    chars = tokens[0];

// If the user’s password meets the constraint, show a success message to the user
if (chars.length < 10) {
    (console.log('Validation failed, please try again.'));
}

// If the user’s password fails the constraint, show a failure message to the user
    //else 
    else if (chars.length >= 10 && (/[a-z]/.test(chars)) && /[A-Z]/.test(chars) && /[0-9]/.test(chars)) { // Password is at least 10 characters long and contains Uppercase, lowercase, and numbers
        console.log('That\'s a mighty secure password you\'ve got there!');
    } else if (chars.length >= 10 && (/[A-Z]/.test(chars)) && /[0-9]/.test(chars)) {
        console.log('Password length sussessful, but consider adding lowercase letters as well')
    } else if (chars.length >= 10 && (/[a-z]/.test(chars)) && /[0-9]/.test(chars)) {
        console.log('Password length sussessful, but consider adding uppercase letters as well')
    } else if (chars.length >= 10 && (/[a-z]/.test(chars))) {
        console.log('Password length sussessful, but consider adding uppercase letters as well as numbers')
    } else if (chars.length >= 10 && (/[A-Z]/.test(chars))) {
        console.log('Password length sussessful, but consider adding lowercase letters as well as numbers')
    } else if (chars.length >= 10 && (/[0-9]/.test(chars))) {
        console.log('Password length sussessful, but consider adding upper- and lowercase letters as well')
    } else if (chars.length >= 10) {
        console.log('Password moderately successful, consider adding a mix of upper- and lowercase letters, as well as numbers' )
    } 

// Add more constraints and checks to your program.

        
// Add some ASCII Art to the output of your program!
    reader.close()
})

