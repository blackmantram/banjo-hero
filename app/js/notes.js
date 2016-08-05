var NotesHandler = function Note(string) {
	this.string = string;
	this.notes = [];
}

NotesHandler.prototype = (function() {

	return {
		add: function() {
			this.notes.push(new Note(this.string));
		},
		update: function() {
			for(var i in this.notes) {
				this.notes[i].move();
			}
			//if (this.notes.length>0)
			//	this.notes[0].move();
		}	
	}
})();

var Note = function Note(string) {
	this.sprite = game.add.sprite(GAME_WIDTH-20, string.sprite.y-4, 'button');
}

Note.prototype = {
	move: function(){
		this.sprite.x--;
	}
}