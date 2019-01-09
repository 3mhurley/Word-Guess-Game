// Word List
var words = ['apple','banana','kiwi','pear'];
var guess = [];

var alpha = ['a','b','c'];

// Select Word
var slWord;

// Convert Word to Array
slWord = slWord.split('');

document.onkeyup = function(event) {
    
    if (slWordIndex === slWord.length()) {
        return;
    }
    
    var keyInput = event.key.toLowerCase();

    if (guess.includes(keyInput) === true) {
        // already guessed
        return;
    } else {
        // new guess
        if (slWord.includes(keyInput) === true) {
            // correct guess
            guess.push(keyInput);
        } else {
            // incorrect guess
            guess.push(keyInput);
        }
    }





}