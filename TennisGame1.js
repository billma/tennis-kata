var TennisGame1 = function(player1Name, player2Name) {
    this.m_score1 = 0;
    this.m_score2 = 0;
    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame1.prototype.wonPoint = function({ player }) {
  this[`m_score${player}`] += 1;
};

TennisGame1.prototype.getScore = function() {
    var score = "";
    var tempScore = 0;
    const scoreMap = ["Love", "Fifteen", "Thirty", "Forty", "Deuce"];

    if (this.m_score1 === this.m_score2) {
        let suffix='';
        if (this.m_score1 < 4) suffix = '-All';
        return scoreMap[this.m_score1] + suffix;
    } else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
        var minusResult = this.m_score1 - this.m_score2;
        if (minusResult === 1) return "Advantage player1";
        else if (minusResult === -1) return "Advantage player2";
        else if (minusResult >= 2) return "Win for player1";
        else return "Win for player2";
    }
    return scoreMap[this.m_score1]+'-'+scoreMap[this.m_score2];
};

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}
