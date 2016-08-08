var BanjoString = function BanjoString(index, key) {
	var parent = this;
	this.name = key;
	this.stringNumber = index+1;
	this.sprite = game.add.tileSprite(0, getPosition(this.stringNumber), GAME_WIDTH, STRING_HEIGHT, 'common_string');
	this.notes = new NotesHandler(this);
	this.key = game.input.keyboard.addKey(key);
	this.key.onDown.add(this.pulse, this);
	this.button = new Button(this);
	
	function getPosition() {
		return GAME_HEIGHT - ((STRING_OFFSET + STRING_HEIGHT) * parent.stringNumber)
	}
}

BanjoString.prototype = {
	setNote: function() {
		this.notes.add();
	},
	update: function() {
		this.notes.update();
	},
	pulse: function() {
		this.button.push();
	}
};

var Button = function Button(string) {
	this.sprite = game.add.sprite(20, string.sprite.y-4, 'button');
	this.push = function(){
		name = this.name;
		sprite = this.sprite;
		startInterval();
	}
	
	var timer;
	var sprite;
	var name;
	var privatevar;

	function startInterval() {
		if (timer !== undefined)
		{
			clearInterval(timer);
		}
		timer = setInterval(tick, 200);
		sprite.frame = 1;
	}
	function tick() {
		clearInterval(timer);
		timer = undefined;
		sprite.frame = 0;
	}
}