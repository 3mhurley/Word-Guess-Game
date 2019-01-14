// Game Object
var wordGuess = {
    themeChoice: 'theme',
    wordChoice: 'word',
    guess: [],
    correct: [],
    incorrect: [],
    goodGuess: [],
    badGuess: [],
    alpha: [],
    slWord: '',
    wins: 0,
    newGame: true,
    words: ['apple','banana','kiwi','pear'],
    theme: {
        fruit: {
            words: ['pear','apricot','peach','cherry'],
            background: "url('../images/fruit.jpg')"
        },
        mountains: {
            words: ['pikes','longs','elbert','evans'],
            background: "url('../images/mountains.png')"
        },
        rivers: {
            words: ['green','platte','arkansas','colorado'],
            background: "url('../images/rivers.png')"
        },
        lakes: {
            words: ['bear','granby','hanging','chatfield'],
            background: "url('../images/hanging_lake.jpg')"
        }
    },
    pickTheme: function(params) {
        // Pick a theme
        var themePrompt = prompt("Pick a theme from Colorado! f: fruit, m: mountains, r: rivers, l: lakes");
        switch(themePrompt) {
        case "f":
            wordGuess.themeChoice = 'fruit';
            wordGuess.words = wordGuess.theme.fruit.words;
            document.getElementById('body').style.backgroundImage = "url('../images/fruit.jpg')";
            break;
        case "m":
            wordGuess.themeChoice = 'mountains';
            wordGuess.words = wordGuess.theme.mountains.words;
            document.getElementById('body').style.backgroundImage = "url('../images/mountains.jpg')";
            break;
        case "r":
            wordGuess.themeChoice = 'rivers';
            wordGuess.words = wordGuess.theme.rivers.words;
            document.getElementById('body').style.backgroundImage = "url('../images/rivers.jpg')";
            break;
        case "l":
            wordGuess.themeChoice = 'lakes';
            wordGuess.words = wordGuess.theme.lakes.words;
            document.getElementById('body').style.backgroundImage = "url('../images/hanging_lake.jpg')";
            break;
        default:
            break;
        }

    },
    keyIn: function(params) {
        // Key input
    },
    gGuess: function(params) {
        // Code executed on a good guess
    },
    bGuess: function(params) {
        // Code executed on a good guess
    },
    pickWord: function() {
        // Select Word
        wordGuess.slWord = wordGuess.words[Math.floor(Math.random() * wordGuess.words.length)];
        wordGuess.slWord = wordGuess.slWord.split(''); // Split word into array
        //console.log(slWord); //f for testing
    
        wordGuess.slWord.forEach(function(element) {
            wordGuess.alpha.push('_');
            document.getElementById('word').innerHTML = wordGuess.alpha.join(' ');
        });
        //console.log(alpha); //f for testing
    
        wordGuess.newGame = false;
    },
    validate: function(params) {
        var pattern=/[^a-z|^A-Z|^\s]/;
        if (params.match(pattern)) {
            return true;
        }
    },
    reset: function() {
        wordGuess.guess = [];
        wordGuess.goodGuess = [];
        wordGuess.badGuess = [];
        wordGuess.alpha = [];
        wordGuess.slWord = [];
        wordGuess.newGame = true;
        document.getElementById('word').innerHTML = '_';
        document.getElementById('guess').innerHTML = '_';
        document.getElementById('numGuess').innerHTML = 'Guesses: ' + 0;
    },
};



// On Key Event
document.onkeyup = function(event) {

    
    if (wordGuess.newGame) {

        if (wordGuess.themeChoice === 'theme') {
            wordGuess.pickTheme();
            wordGuess.pickWord();
            document.getElementById('title').innerHTML = 'Guess the word!';
            document.getElementById('wordTitle').innerHTML = 'Word';
            document.getElementById('guessTitle').innerHTML = 'Guesses';
            document.getElementById('body').style.backgroundImage = "url('../images/fruit.jpg')";
        }

        wordGuess.pickWord();
        document.getElementById('title').innerHTML = 'Guess the word!';
        document.getElementById('wordTitle').innerHTML = 'Word';
        document.getElementById('guessTitle').innerHTML = 'Guesses';

        document.getElementById('body').style.backgroundImage = "url('../images/fruit.jpg')";

    } else {

        var keyInput = event.key.toLowerCase();

        if (wordGuess.validate(keyInput)) {
            return;
        }

        if (wordGuess.guess.includes(keyInput)) {
            return; // already guessed
    
        } else {
            // new guess
            if (wordGuess.slWord.includes(keyInput)) {
                // correct guess
                wordGuess.slWord.forEach(function(element, i) {
                    if (element === keyInput) {
                        wordGuess.alpha.splice(i,1,keyInput);
                        document.getElementById('word').innerHTML = wordGuess.alpha.join(' ');
                    }
                });
    
                wordGuess.guess.push(keyInput); // adds key input to guess array
                wordGuess.goodGuess.push(keyInput); // as letter hits we need to set the display of letter true
    
            } else {
    
                // incorrect guess
                wordGuess.guess.push(keyInput); // adds key input to guess array
                wordGuess.badGuess.push(keyInput); // as letter hits we need to set the display of letter true
                document.getElementById('numGuess').innerHTML = 'Guesses: ' + wordGuess.badGuess.length;
                document.getElementById('guess').innerHTML = wordGuess.badGuess.join(' ');
    
            }
        }

        if (wordGuess.alpha.join('') === wordGuess.slWord.join('')) {
            wordGuess.wins++
            document.getElementById('wins').innerHTML = 'Wins: ' + wordGuess.wins;
            //console.log(wordGuess.wins); // Testing
            wordGuess.reset();
            return;
    
        } else if (wordGuess.guess.length === 26) {
            wordGuess.reset();
            return;

        }
    }
}