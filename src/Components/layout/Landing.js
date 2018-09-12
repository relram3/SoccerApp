import React, { Component } from "react";
import axios from "axios";
// import map from "rxjs/add/operator/map";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: {}
    };
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
        this.setState({ response: data.data.matches });
        // if (this.state.response.length > 0){
        console.log(this.state.response.matches);
        console.log(this.state.response);
        // }
      });
  }
  render() {
    const response = this.state || [];

    console.log("matches", response);

    const card = response.map(match => (
      <div key={match.id}>
        {match.homeTeam.name}
        {match.awayTeam.name}
      </div>
    ));

    return (
      <div>
        <h1>
          This is a test
          {card}
        </h1>
      </div>
    );
  }
}

export default Landing;
