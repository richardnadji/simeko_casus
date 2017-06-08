function Team(name, startPosition, division) {
  this.name = name;
  this.currentIndexPosition = startIndexPosition;
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

Team.prototype.ranking = function() {
  // ranking position in own division
}

Team.prototype.totalPoints = function() {
  // total points matches: won = 2 points, draw = 1 point, lost = 0 points
}
