var GAME_WIDTH = 400;
var GAME_HEIGHT = 300;
var NUM_STRINGS = 4;
var STRING_HEIGHT = 8;
var STRING_OFFSET = 20;

var game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.AUTO, '', { preload: preload, create: create, update: update });

var strings; 

function preload() {
	game.load.image('common_string', 'assets/string.png');
}

function create() {
	strings = [];
	for(var index=0; index<NUM_STRINGS; index++) {
		strings.push(createString(index+1));
	}
}

function update() {
}

function createString(stringNumber) {
	var position = GAME_HEIGHT - ((STRING_OFFSET + STRING_HEIGHT) * stringNumber);
	return game.add.tileSprite(0, position, GAME_WIDTH, STRING_HEIGHT, 'common_string')
}