// `letter.js` should control whether or not a letter appears as a "_" or as itself on-screen.



var letter = function(letter){
	this.character = letter;
	this.appear = false;
	this.letterRender = function(){
		return !(this.appear) ? "_" : this.character;
	};
};

//export the constructor
module.exports = letter;