// create teams
const teams = [
  // division A
  new Team('Leiden Noord', 1, 'A'),
  new Team('Leiden Zuid-West', 2, 'A'),
  new Team('FC Leiderdorp', 3, 'A'),
  new Team('Team Neal', 4, 'A'),
  new Team('Hoppa', 5, 'A'),
  new Team('De Glibbers', 6, 'A'),
  new Team('Partycentrum de Zijl', 7, 'A'),
  new Team('FC Rijnland', 8, 'A'),
  new Team('De Leo\'s', 9, 'A'),
  new Team('De Leden Jelele', 10, 'A'),
  new Team('Tiktak', 11, 'A'),
  // division B
  new Team('De Bikkels', 12, 'B'),
  new Team('De Meester', 13, 'B'),
  new Team('Z88', 14, 'B'),
  new Team('Driemtiem', 15, 'B'),
  new Team('Vroeger Beter', 16, 'B'),
  new Team('Eltax', 17, 'B'),
  new Team('Linnaeus 1758', 18, 'B'),
  new Team('De Buffels', 19, 'B'),
  new Team('BBS', 20, 'B'),
  new Team('ZP', 21, 'B'),
  new Team('Simeko \'82', 22, 'B'),
  // division C
  new Team('DVZ 08', 23, 'C'),
  new Team('Carriere Uitzendbureau', 24, 'C'),
  new Team('Valderrama', 25, 'C'),
  new Team('Zo, nu eerst', 26, 'C'),
  new Team('Aguilas', 27, 'C'),
  new Team('Snokkers', 28, 'C'),
  new Team('Pure Storage', 29, 'C'),
  new Team('Snackbar Gorlejus', 30, 'C'),
  new Team('Prikkelgeneratoren', 31, 'C'),
  new Team('Harde Werkers', 32, 'C'),
  new Team('FC Schubbekutterveen', 33, 'C'),
]
// create league
const league = new League('voorjaar', '2017', teams)
// display tables
LeagueUI.displayTitle();
