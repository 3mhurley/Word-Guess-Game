// Word List
var words = ['apple','banana','kiwi','pear'];
var guess = [];
var goodGuess = [];
var badGuess = [];
var alpha = [];
var slWord = '';
var wins = 0;
var newGame = true;

function pickWord() {
    // Select Word
    slWord = words[Math.floor(Math.random() * words.length)];
    slWord = slWord.split(''); // Split word into array
    //console.log(slWord);

    slWord.forEach(function(element) {
        alpha.push('_');
        document.getElementById('word').innerHTML = alpha.join(' ');
    });
    //console.log(alpha);

    newGame = false;
}

function validate(params) {
    var pattern=/[^a-z|^A-Z|^\s]/;
    if (params.match(pattern)) {
        return true;
    }
}

function reset() {
    guess = [];
    goodGuess = [];
    badGuess = [];
    alpha = [];
    slWord = [];
    newGame = true;
    document.getElementById('word').innerHTML = '_';
    document.getElementById('guess').innerHTML = '_';
    document.getElementById('numGuess').innerHTML = 'Guesses: ' + 0;
}



document.onkeyup = function(event) {

    if (newGame) {

        pickWord();
        document.getElementById('title').innerHTML = 'Guess the word!';
        document.getElementById('wordTitle').innerHTML = 'Word';
        document.getElementById('guessTitle').innerHTML = 'Guesses';

    } else {

        var keyInput = event.key.toLowerCase();

        if (validate(keyInput)) {
            return;
        }

        if (guess.includes(keyInput)) {
            return; // already guessed
    
        } else {
            // new guess
            if (slWord.includes(keyInput)) {
                // correct guess
                slWord.forEach(function(element, i) {
                    if (element === keyInput) {
                        alpha.splice(i,1,keyInput);
                        document.getElementById('word').innerHTML = alpha.join(' ');
                    }
                });
    
                guess.push(keyInput); // adds key input to guess array
                goodGuess.push(keyInput); // as letter hits we need to set the display of letter true
    
            } else {
    
                // incorrect guess
                guess.push(keyInput); // adds key input to guess array
                badGuess.push(keyInput); // as letter hits we need to set the display of letter true
                document.getElementById('numGuess').innerHTML = 'Guesses: ' + badGuess.length;
                document.getElementById('guess').innerHTML = badGuess.join(' ');
    
            }
        }

        if (alpha.join('') === slWord.join('')) {
            wins++
            document.getElementById('wins').innerHTML = 'Wins: ' + wins;
            console.log(wins);
            reset();
            return;
    
        } else if (guess.length === 26) {
            reset();
            return;

        }
    }
}