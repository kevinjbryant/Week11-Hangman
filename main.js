//main logic for game
var Word = require('./word.js');
var prompt = require('prompt');

console.log("-----------------------------")
console.log("Kev's Hangman Game!");
console.log("Guess a random letter");
console.log("Topic motorcycles brands")
console.log("-----------------------------");
prompt.start();



game = {
 	wordBank: ['kawasaki', 'honda', 'aprilia', 'suzuki', 'daytona', 'yamaha', 'ducati'],
 	wordsWon: 0,
 	guessesRemaining: 10,
 	currentWord: null,
 	
 	startGame: function (word) {
 		this.resetGuesses();
 		this.currentWord = new Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);
 		this.currentWord.getLetter();
 		this.promptUser();
 	},

 	resetGuesses: function(){
 		this.guessesRemaining = 10;
 	},
 	//promptReset: function (){
 	//	prompt("would you like to play again?");
 	//},

 	promptUser: function(){
 		var self = this;
 		prompt.get(['guessLetter'], function(err, result){
 			console.log("You guessed: " + result.guessLetter);
 			var manyGuessed = self.currentWord.checkLetter(result.guessLetter);

 			if(manyGuessed ==0) {
 				console.log("      x   x");
 				console.log("       x x ");
 				console.log("      wrxng");
 				console.log("       x x ");
 				console.log("      x   x");
 				self.guessesRemaining--;
 				
 			} else {
 				console.log("CORRECT");
 					if(self.currentWord.findWord()){
 						console.log("You won!");
 						console.log("The brand is: ", self.currentWord.target);
 						console.log("-------------------");
 	//					promptReset();
 						return;
 					}
 			}

 			console.log("Guesses remaining: " + self.guessesRemaining);
 			console.log("-------------------");
 			if((self.guessesRemaining > 0) && (self.currentWord.found == false)){
 				self.promptUser();
 			}
 			else if(self.guessesRemaining ==0){
 				console.log("Game over. Correct brand is: ", self.currentWord.target);
 			} else {
 				console.log(self.currentWord.wordRender());
 	//			promptReset();
 			}
 		});

 	}


};

game.startGame();
