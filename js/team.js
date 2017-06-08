function Team(name, startIndexPosition, division) {
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

Team.prototype.toHTML = function() {
  let htmlString = '<li>';
  htmlString += this.currentIndexPosition;
  htmlString += ' | ';
  htmlString += this.name;
  htmlString += '<span class="statistics">'
  htmlString += this.played;
  htmlString += ' | ';
  htmlString += this.won;
  htmlString += ' | ';
  htmlString += this.drawn;
  htmlString += ' | ';
  htmlString += this.lost;
  htmlString += ' | ';
  htmlString += this.goalsFor;
  htmlString += ' | ';
  htmlString += this.goalsAgainst;
  htmlString += ' | ';
  htmlString += this.goalDifference;
  htmlString += ' | ';
  htmlString += this.points;
  htmlString += '</span></li>';
  return htmlString;
};
