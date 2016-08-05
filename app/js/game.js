var game;
window.onload = function(){
	game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.AUTO, '', { preload: preload, create: create, update: update });
	var strings = []; 
	function preload() {
		game.load.image('common_string', 'assets/string.png');
		game.load.image('button', 'assets/button.png');
	}

	function create() {
		for(var index=0; index<NUM_STRINGS; index++) {
			strings.push(new BanjoString(index));
		}
		game.time.events.loop(Phaser.Timer.SECOND, setRandomNote, this);
	}

	function update() {
		for(var i in strings)
			strings[i].update();
	}

	function setRandomNote() {
		var rand = Math.floor(Math.random() * strings.length); 
		strings[rand].setNote();
	}

}