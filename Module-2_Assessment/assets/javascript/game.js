let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let wins = document.querySelector(".games_won");
let animal = document.querySelector(".animal");
let currentAnimal = document.querySelector(".current_animal");
let lettersGuessed = document.querySelector(".letters_guessed");
let guessesLeft = document.querySelector(".guesses_left");
let animalGame = {
    words: ["TIGER", "ELEPHANT", "RHINOCEROS", "ALLIGATOR", "GIRAFFE", "PELICAN", "CHIMPANZEE", "OSTRICH", "ANACONDA", "JAGUAR", "LEMUR", "SALAMANDER", "KANGAROO", "OCTOPUS", "PENGUIN", "ZEBRA", "HIPPOPOTAMUS", "BUFFALO", "LOBSTER", "PANTHER"],
    blanks: "",
    guesses_left: 8,
    correct_answer: [],
    letters_guessed: [],
    games_won: 0,
    current_animal: "",
    current_guess: "",

    randomWord: function () {
        this.current_animal = this.words[Math.floor(Math.random() * this.words.length)];
    },

    showWord: function() {
        this.randomWord ();
        while (this.correct_answer.includes(this.current_animal)) {
            if (animalGame.correct_answer.length == animalGame.words.length) {
                break;
            }
            else {
                this.randomWord
            }
        }
        for (i=0; i < this.current_animal.length; i++) {
            this.blanks = blanks + "_";
        }
        currentAnimal.innerText = this.blanks;
    },

    changeWord: function (letters) {
        this.current_guess == this.current_animal.split('').map(letters = (this.letters_guessed.indexOf(letters) >= 0 ? letters : "_")).join('');
        currentAnimal.innerHTML = this.current_guess;
    }
}



