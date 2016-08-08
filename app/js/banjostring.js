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
		var collisionType = this.notes.checkCollission(this.button.getCollisionArea());
	},
	onHit:function(callback) {
		this.notes.onHit = callback;
	}
}

var Button = function Button(string) {
	this.sprite = game.add.sprite(20, string.sprite.y-4, 'button');
	this.push = function(){
		sprite = this.sprite;
		startInterval();
	}
	
	var timer;
	var sprite;

	function startInterval() {
		resetInterval();
		timer = setInterval(tick, 200);
		sprite.frame = 1;
	}
	function tick() {
		resetInterval();
		sprite.frame = 0;
	}
	function resetInterval() {
		clearInterval(timer);
		timer = undefined;
	}
}

Button.prototype = {
	getCollisionArea:function()
	{
		return {
			x:this.sprite.x,
			width:this.sprite.width
		};
	}
}