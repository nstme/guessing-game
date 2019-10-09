class GuessingGame {
	constructor() {
    	this.min = 0;
    	this.max = 0;
    	this.midNumber = 0;
    }

    setRange(min, max) {
    	this.min = min;
    	this.max = max;
    }

    guess() {
    	return this.midNumber = Math.round((this.min+this.max)/2);
    }

    lower() {
    	this.max = this.midNumber;
    }

    greater() {
    	this.min = this.midNumber;
    }
}

module.exports = GuessingGame;
