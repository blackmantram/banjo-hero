var NotesHandler = function Note(string) {
	this.string = string;
	this.notes = [];
}

NotesHandler.prototype = {
	add: function() {
		this.notes.push(new Note(this.string));
	},
	update: function() {
		for(var i in this.notes) {
			this.notes[i].move();
		}
	}	
};

var Note = function Note(string) {
	this.sprite = game.add.sprite(GAME_WIDTH-20, string.sprite.y-4, 'button');
}

Note.prototype = {
	move: function(){
		this.sprite.x--;
	}
}