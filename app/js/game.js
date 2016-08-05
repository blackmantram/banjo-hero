window.onload = function(){
	var game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.AUTO, '', { preload: preload, create: create, update: update });
	var strings = []; 

	function preload() {
		game.load.image('common_string', 'assets/string.png');
		game.load.image('button', 'assets/button.png');
	}

	function create() {
		for(var index=0; index<NUM_STRINGS; index++) {
			strings.push(new BanjoString(game, index));
		}
	}

	function update() {
	}

}