function Team(name, startPosition, division) {
  this.name = name;
  this.currentPosition = startPosition;
  this.division = division;
  this.played = 0;
  this.won = 0;
  this.drawn = 0;
  this.lost = 0;
  this.goalsFor = 0;
  this.goalsAgainst = 0;
  this.goalDifference = 0;
  this.points = 0;
}

Team.prototype.totalPoints = function() {

}
