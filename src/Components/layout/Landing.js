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
        this.setState({ response: data.data });
        // if (this.state.response.length > 0){
        console.log(this.state.response.matches);
        console.log(this.state.response);
        // }
      });
  }

  render() {
    if (!this.state.response) return <p className="loader">Loading....</p>;

    const card = this.state.response.matches.map(match => (
      <div className="card">
        <div className="homeTeam">
          <h2>
            {match.homeTeam.name} {match.score.fullTime.homeTeam}
          </h2>
          <div />
        </div>
        <div className="awayTeam">
          <h2>
            {match.awayTeam.name} {match.score.fullTime.awayTeam}
          </h2>
        </div>
      </div>
    ));
    return <div className="cards">{card}</div>;
  }
}

export default Landing;
