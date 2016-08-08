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
		if (this.notes.length > 0)	{
			if (this.notes[0].sprite.x < 0) {
				this.removeNote();
			}
		}
	},
	checkCollission:function(collisionArea){
		var first = this.notes[0];
		if (first !== undefined){
			var lowLimit = collisionArea.x;
			var upLimit =  collisionArea.x+collisionArea.width;
			if (first.sprite.x >= lowLimit && first.sprite.x < upLimit){
				this.removeNote();
				return true;	
			}
		}
		return false;
	},
	removeNote:function(){
		note = this.notes.shift();
		note.destroy();
	}
};

var Note = function Note(string) {
	this.sprite = game.add.sprite(GAME_WIDTH-20, string.sprite.y-4, 'button');
}

Note.prototype = {
	move: function(){
		this.sprite.x--;
	},
	destroy: function(){
		this.sprite.destroy();
		this.sprite = undefined;
	}
}