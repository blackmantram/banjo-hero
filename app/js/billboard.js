var GREAT = 'Great!!';

var Billboard = function Billboard() {
	var style = { font: "30px Arial", fill: "#ff0044", align: "center" };
	this.text = game.add.text(game.world.centerX, 100, "Great!!", style);
	this.text.visible = false;
	this.text.anchor.set(0.5);
}

Billboard.prototype = {
	show:function(){
		this.text.visible = true;
		var text = this.text;
		setTimeout(function(){
			text.visible = false;
		}, 500); 
	}
}