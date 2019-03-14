import React, { Component } from "react";
import "./App.css";
import Issue from "./components/Issue.js";

class App extends Component {
  state = {
    issueList: [
      {
        title: "demo title",
        assignee: {
          login: "demo assignee login"
        },
        user: {
          login: "demo user login"
        },
        body: `Then we'll go with that data file! I suppose I could part with 'one' and still be feared… Morbo will now introduce tonight's candidates… PUNY HUMAN NUMBER ONE, PUNY HUMAN NUMBER TWO, and Morbo's good friend, Richard Nixon. Ah, the 'Breakfast Club' soundtrack! I can't wait til I'm old enough to feel ways about stuff! Then we'll go with that data file! As an interesting side note, as a head without a body, I envy the dead. Ask her how her day was. You wouldn't. Ask anyway! Oh yeah, good luck with that. With a warning label this big, you know they gotta be fun! WINDMILLS DO NOT WORK THAT WAY! GOOD NIGHT! Bite my shiny metal ass. A sexy mistake. But existing is basically all I do! It doesn't look so shiny to me. Bender, we're trying our best. And I'm his friend Jesus. Nooooo!!`
      }
    ],
    loaded: true
  };

  componentDidMount() {
    //Find date and fetch results
    // this.dateFinder();
  }

  dateFinder = () => {
    //Get Date a week ago
    let currentDate = new Date();
    let lastWeek = currentDate.getDate() - 7;
    currentDate.setDate(lastWeek);

    //Convert to ISO and Github API format
    let ISODate = currentDate.toISOString();
    ISODate = ISODate.substr(0, 19) + "Z";

    //Call fetch with correct date
    this.issueFetcher(ISODate);
    console.log(ISODate);
  };

  issueFetcher = date => {
    //GET issues and update in state
    this.setState({ loaded: false });
    fetch(`https://api.github.com/repos/angular/angular/issues?since=${date}`)
      .then(response => response.json())
      .then(json => this.setState({ issueList: json, loaded: true }));
  };

  render() {
    return (
      <div className="site">
        <div className="nav">
          <h2>Angular Issue Tracker</h2>
        </div>

        <div className="main">
          <button onClick={this.dateFinder}>Refresh Results</button>
          <div>
            {this.state.loaded
              ? this.state.issueList.map(issue => (
                  <Issue key-={issue.id} issueData={issue} />
                ))
              : "Fetching Issues..."}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
