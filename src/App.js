import React, { Component } from "react";
import "./App.css";
import Issue from "./components/Issue.js";

class App extends Component {
  state = {
    issueList: [],
    fetchStatus: "Fetching . . .",
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

    //Convert to ISO then Github API format
    let ISODate = currentDate.toISOString();
    ISODate = ISODate.substr(0, 19) + "Z";

    //Call fetch with correct date
    this.issueFetcher(ISODate);
  };

  issueFetcher = date => {
    //GET issues and update in state
    this.setState({ loaded: false });
    fetch(`https://api.github.com/repos/angular/angular/issues?since=${date}`)
      .then(response => response.json())
      .then(json => {
        if (json.length) {
          this.setState({ issueList: json, loaded: true });
        } else {
          console.log(`error!`, json);
          this.setState({ fetchStatus: "Fetch failed! Check console log" });
        }
      });
  };

  render() {
    return (
      <div>
        <div className="nav">
          <h2 className="site-header">Angular Issue Tracker</h2>
        </div>
        <div className="main">
          <div>
            {this.state.loaded
              ? this.state.issueList.map(issue => (
                  <Issue key-={issue.id} issueData={issue} />
                ))
              : this.state.fetchStatus}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
