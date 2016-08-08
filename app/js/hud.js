var Hud = function Hud() {
	this.currentScore = 0;
	this.scoreText = game.add.text(10, 10, "score: "+this.currentScore, { font: '12px Arial', fill: '#fff' });
}

Hud.prototype = {
	score:function(){
		this.currentScore++;
		this.scoreText.text = "score: "+this.currentScore;
	}
}