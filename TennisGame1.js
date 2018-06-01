var TennisGame1 = function() {  
    this.scores = [0, 0]
};

TennisGame1.prototype.wonPoint = function({ player }) {
  this.scores[player-1] += 1;
};

TennisGame1.prototype.getScore = function() {
    const [score1, score2] = this.scores;
    const scoreMap = ["Love", "Fifteen", "Thirty", "Forty", "Deuce"];
    const minusResult = score1 - score2;
    if (minusResult === 0 ) return scoreMap[score1] + (score1 < 4 ? '-All' : ''); 
    if (score1 < 4 && score2 < 4) return scoreMap[score1]+'-'+scoreMap[score2]; 
    const prefix = Math.abs(minusResult) ===1 ? 'Advantage' : 'Win for';
    const player = minusResult > 0 ? 'player1' : 'player2'; 
    return `${prefix} ${player}`
};

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}
