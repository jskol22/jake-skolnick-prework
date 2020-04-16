let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let wins = document.querySelector("#games_won");
let animal = document.querySelector(".animal");
let currentAnimal = document.querySelector("#current_animal");
let lettersGuessed = document.querySelector("#letters_guessed");
let guessesLeft = document.querySelector("#guesses_left");
let result = document.querySelector("#gameResult");
let animalGame = {
    words: ["TIGER", "ELEPHANT", "RHINOCEROS", "ALLIGATOR", "GIRAFFE", "PELICAN", "CHIMPANZEE", "OSTRICH", "ANACONDA", "JAGUAR", "LEMUR", "SALAMANDER", "KANGAROO", "OCTOPUS", "PENGUIN", "ZEBRA", "HIPPOPOTAMUS", "BUFFALO", "LOBSTER", "PANTHER"],
    blanks: "",
    guesses_left: 5,
    correct_answer: [],
    letters_guessed: [],
    games_won: 0,
    current_animal: "",
    current_guess: "",
    previous_animal: "",

    randomWord: function () {
        this.current_animal = this.words[Math.floor(Math.random() * this.words.length)];
    },

    showWord: function () {
        this.randomWord();
        while (this.correct_answer.includes(this.current_animal)) {
            if (animalGame.correct_answer.length === animalGame.words.length) {
                break;
            }
            else {
                this.randomWord
            }
        }
        for (i = 0; i < this.current_animal.length; i++) {
            this.blanks += "_ ";
        }
        currentAnimal.innerText = this.blanks;
    },

    updateWord: function (letter) {
        this.current_guess = this.current_animal.split('').map(letter => (this.letters_guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
        currentAnimal.innerHTML = this.current_guess;
    },

    updateAnimal: function () {
        if (this.games_won > 1) {
            document.querySelector("." + this.previous_animal).classList.add("invisible");
        }
        document.querySelector("." + this.current_animal).classList.remove("invisible");
        this.previous_animal = this.current_animal;
    },
    guessCount: function (guess) {
        if (this.current_animal.indexOf(guess) >= 0) {
            this.updateWord();
        } else if (this.current_animal.indexOf(guess) === -1) {
            this.guesses_left--;
            guessesLeft.innerHTML = this.guesses_left;
        }
    },

    showGuesses: function (guess) {
        if (this.letters_guessed.includes(guess) === false) {
            this.letters_guessed.push(guess);
            lettersGuessed.innerHTML = this.letters_guessed.join();
        }
    },

    newGame: function () {
        letters = letters.concat(this.letters_guessed);
        this.letters_guessed = [];
        this.blanks = "";
        this.current_guess = "";
        this.current_animal = "";
        this.guesses_left = 5;
        guessesLeft.innerHTML = this.guesses_left;
        lettersGuessed.innerHTML = this.letters_guessed;
    },

    answerCorrect: function () {
        if (this.current_guess === this.current_animal) {
            this.games_won++;
            this.correct_answer.push(this.current_animal);
            wins.innerHTML = `${this.games_won}`;
            this.updateAnimal();
            this.newGame();
            this.showWord();

        }
    },

    gameResult: function () {
        if (this.guesses_left == 0) {
            result.innerHTML = "You Lost! Refresh to Try Again"
        } else if (this.correct_answer.length == 1) {
            result.innerHTML = "You Won!"
        }
    }
}
animalGame.showWord();

document.addEventListener("keydown", function (event) {
    const pressed_key = event.key.toUpperCase();
    if (animalGame.guesses_left === 0 || animalGame.correct_answer.length === 20) {
    }
    else if (letters.includes(pressed_key)) {
        animalGame.showGuesses(pressed_key);
        animalGame.guessCount(pressed_key);
        animalGame.answerCorrect();
        animalGame.gameResult();
        letters.splice(letters.indexOf(pressed_key), 1)
    }
});




