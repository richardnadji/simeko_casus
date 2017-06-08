const LeagueUI = {
  // display functions
  displayAllTeams: function() {
    const teams = league.teams;

      for(let i = 0; i < teams.length; i++) {
          this.populateIdWithHTML("tables", teams[i].toHTML());
      }
  },
  // helpers
  populateIdWithHTML: function(id, text) {
    const element = document.getElementById(id);
    element.innerHTML = text;
  },
  // handlers
}
