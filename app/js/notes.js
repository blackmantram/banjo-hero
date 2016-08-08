var NotesHandler = function Note(string) {
	this.string = string;
	this.notes = [];
	this.onHit = function(){};
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
			if (this.notes[0].sprite.x < this.notes[0].sprite.width*-1) {
				this.onHit("MISS");
				this.removeNote();
			}
		}
	},
	checkCollission:function(collisionArea){
		var first = this.notes[0];
		if (first !== undefined){
			var firstEndDiff = collisionArea.x - first.sprite.x;
			var secondEndDiff = (collisionArea.x+collisionArea.width) - (first.sprite.x+first.sprite.width);
			var match = (Math.abs(firstEndDiff)+Math.abs(secondEndDiff))/2; 
			if (match <= first.sprite.width) {
				this.removeNote();
				if (match <= 5)
					this.onHit("GREAT");
				else
					this.onHit("GOOD");
			}
		}
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