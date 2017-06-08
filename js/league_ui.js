let LeagueUI = {
  // display functions
  displayTitle: function() {
    const title = league.title + ' ' + league.year;
    this.populateIdWithHTML('title', title);
  },
  displayAllTeams: function() {
    const teams = league.teams;
    let allTeams = "";
    
    for (let i = 0; i < teams.length; i++) {
        allTeams += teams[i].toHTML();
    }
    this.populateIdWithHTML('listAllTeams', allTeams);
  },
  // helpers
  populateIdWithHTML: function(id, text) {
    const element = document.getElementById(id);
    element.innerHTML = text;
  },
  // handlers
};
