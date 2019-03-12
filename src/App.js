import React, { Component } from "react";
import "./App.css";
import Issue from "./components/Issue.js";

class App extends Component {
  state = {
    issueList: [],
    loaded: false
  };

  componentDidMount() {
    //Find date and fetch results
    this.dateFinder();
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
    console.log(ISODate)
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
      <div className="main">
        <h2>Check out these Angular Issues</h2>
        <button onClick={this.dateFinder}>Get the date 7 days ago</button>
        <button onClick={this.issueFetcher}>Refresh results</button>
        <div>
          {this.state.loaded ? "fetch complete" : "waiting on them results"}
        </div>
        <div className="issue-list">
          {this.state.issueList.map(issue => (
            <Issue issueData={issue} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
