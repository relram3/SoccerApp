import React, { Component } from "react";
import axios from "axios";
// import map from "rxjs/add/operator/map";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const header = {
      headers: { "X-Auth-Token": "e383889508294857810b255fecbb5dd1" }
    };
    axios
      .get(
        "http://api.football-data.org/v2/competitions/2021/matches?matchday=1",
        header
      )
      .then(data => {
        this.setState({ schedule: data.data });
        // if (this.state.schedule.length > 0){
        console.log(this.state.schedule.matches);
        console.log(this.state.schedule);
        // }
      });
    axios
      .get(
        "http://api.football-data.org/v2/competitions/2021/standings",
        header
      )
      .then(data => {
        this.setState({ standings: data.data.standings[0].table });
        // if (this.state.standings.length > 0){
        console.log(this.state.standings.matches);
        console.log("Standings", this.state.standings);
        // }
      });
  }

  render() {
    if (!this.state.schedule) return <p className="loader">Loading....</p>;
    if (!this.state.standings) return <p className="loader">Loading....</p>;

    const { schedule, standings } = this.state;

    const tables = standings.map(standing => (
      <div className="standings">
        <div className="standingBody">
          <div className="standingPosition">{standing.position}</div>
          <img src={standing.team.crestUrl} alt="crest" className="crest" />
          <div className="wins">{standing.won}</div>
          <div className="draws">{standing.draw}</div>
          <div className="lost">{standing.lost}</div>
          <div className="plusminus">
            {standing.goalsFor}/{standing.goalsAgainst}
          </div>
          <div className="GD">{standing.goalDifference}</div>
          <div className="points">{standing.points}</div>
        </div>
      </div>
    ));

    const card = schedule.matches.map(match => (
      <div className="card">
        <div className="cardHeader">
          <div className="homeTeam">
            <h2>{match.homeTeam.name}</h2>
            <span className="score">{match.score.fullTime.homeTeam}</span>
            <div />
          </div>
          <div className="awayTeam">
            <h2>{match.awayTeam.name}</h2>
            <span className="score">{match.score.fullTime.awayTeam}</span>
          </div>
        </div>
        <div className="standingHeader">
          <span className="standingPos">Pos.</span>
          <span className="standingTeam">Team</span>
          <span className="standingWins">Wins</span>
          <span className="standingDraws">Draws</span>
          <span className="standingLosses">Losses</span>
          <span className="standingDiff">+/-</span>
          <span className="standingGD">GD</span>
          <span className="standingPoints">Points</span>
        </div>
        <div className="table">{tables}</div>
      </div>
    ));

    return <div className="cards">{card}</div>;
  }
}

export default Landing;
