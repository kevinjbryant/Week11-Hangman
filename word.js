
//list of letters object
//a boolean that says if word is guessed or not
// var LetterObjects = [];
// var guessed = false;

 

var letter = require('./letter.js');

function Word(target) {
	this.target = target;
	this.letters = [];
	this.found = false;

	this.getLetter = function() {
		for (var i=0; i < this.target.length; i++) {
			this.letters.push( new letter(this.target[i]));
		}
	};

	this.findWord = function() {
		this.found = this.letters.every(function(currentLetter) {
			return currentLetter.appear;
		});
		return this.found;
	};

	this.checkLetter = function(guessLetter) {
		var toReturn = 0;

		for (var i = 0; i < this.letters.length; i++) {
			if (this.letters[i].character == guessLetter){
				this.letters[i].appear = true;
				toReturn++;
			}
		}
		return toReturn;
	};

	this.wordRender = function() {
		var string = '';
		for (var i=0; i < this.letters.length; i++){
			string += this.letters[i].letterRender();
		}
		return string;
	};

}

module.exports = Word;
