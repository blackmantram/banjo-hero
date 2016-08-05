var BanjoString = function BanjoString(index) {
	var parent = this;
	this.stringNumber = index+1;
	this.sprite = game.add.tileSprite(0, getPosition(this.stringNumber), GAME_WIDTH, STRING_HEIGHT, 'common_string');
	this.button = createButton(this.sprite);
	this.notes = new NotesHandler(this);

	function getPosition() {
		return GAME_HEIGHT - ((STRING_OFFSET + STRING_HEIGHT) * parent.stringNumber)
	}

	function createButton()	{
		return game.add.sprite(20, parent.sprite.y-4, 'button')
	}
}

BanjoString.prototype = {
	setNote: function() {
		this.notes.add();
	},
	update: function() {
		this.notes.update();
	}
};