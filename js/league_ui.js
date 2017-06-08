let LeagueUI = {
  // display functions
  displayTitle: function() {
    const title = league.title + ' ' + league.year;
    this.populateIdWithHTML('title', title);
  },
  displayAllTeams: function() {
    const teams = league.teams;

    for(let i = 0; i < teams.length; i++) {
        this.populateIdWithHTML('listAllTeams', teams[i].toHTML());
    }
  },
  // helpers
  populateIdWithHTML: function(id, text) {
    const element = document.getElementById(id);
    element.innerHTML = text;
  },
  // handlers
};
