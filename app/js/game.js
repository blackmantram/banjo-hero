var game;
window.onload = function(){
	game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.AUTO, '', { preload: preload, create: create, update: update });
	var strings = [];
	var hud; 
	var billboard; 

	function preload() {
		game.load.image('common_string', 'assets/string.png');
		game.load.spritesheet('button', 'assets/button.png', 16, 16, 2);
	}

	function create() {
		hud = new Hud();
		billboard = new Billboard();
		for(var index=0; index<STRING_KEYS.length; index++) {
			var string = new BanjoString(index, STRING_KEYS[index]);
			string.onHit = function(){
				billboard.show();
				hud.score();
			};
			strings.push(string);
		}
		game.time.events.loop(Phaser.Timer.SECOND, setRandomNote, this);
	}

	function update() {
		for(var i in strings)
		{
			strings[i].update();
		}
	}

	function setRandomNote() {
		var rand = Math.floor(Math.random() * strings.length); 
		strings[rand].setNote();
	}

}