var BanjoString = function BanjoString(game, index) {
	var parent = this;
	this.stringNumber = index+1;
	this.sprite = game.add.tileSprite(0, getPosition(this.stringNumber), GAME_WIDTH, STRING_HEIGHT, 'common_string');
	this.button = createButton(this.sprite);

	function getPosition() {
		return GAME_HEIGHT - ((STRING_OFFSET + STRING_HEIGHT) * parent.stringNumber)
	}

	function createButton()	{
		return game.add.sprite(20, parent.sprite.y-4, 'button')
	}
}