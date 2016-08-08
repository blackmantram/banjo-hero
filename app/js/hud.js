var Hud = function Hud() {
	this.missCount = 0;
	this.currentScore = 0;
	this.scoreText = game.add.text(10, 10, "score: "+this.currentScore, { font: '12px Arial', fill: '#fff' });
	this.missText = game.add.text(10, 24, "miss: "+this.missCount, { font: '12px Arial', fill: '#f00' });
}

Hud.prototype = {
	score:function(){
		this.currentScore++;
		this.scoreText.text = "score: "+this.currentScore;
	},
	miss:function(){
		this.missCount++;
		this.missText.text = "miss: "+this.missCount;
	}
}