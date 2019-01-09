// Word List
var words = ['apple','banana','kiwi','pear'];
var guess = [];
var goodGuess = [];
var badGuess = [];
var alpha = ['a','b','c'];
var slWord;
var slWordIndex;

// Select Word
slWord = 'kiwi';

// Convert Word to Array
slWord = slWord.split('');

document.onkeyup = function(event) {
    
    if (slWordIndex === slWord.length) {
        return;
    }
    
    var keyInput = event.key.toLowerCase();

    if (guess.includes(keyInput)) {
        // already guessed
        return;
    } else {
        // new guess
        if (slWord.includes(keyInput)) {
            // correct guess
            guess.push(keyInput); // adds key input to guess array
            goodGuess.push(keyInput); // as letter hits we need to set the display of letter true
            slWordIndex++
        } else {
            // incorrect guess
            guess.push(keyInput); // adds key input to guess array
            badGuess.push(keyInput); // as letter hits we need to set the display of letter true
        }
    }





}