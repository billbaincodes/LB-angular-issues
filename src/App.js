import React, { Component } from 'react';
import './App.css';
import Issue from './components/Issue.js'

class App extends Component {

  state = {
    issueList: [],
    loaded: false
  }

  issueFetcher = () => {
    console.log('wired up')

    fetch("https://api.github.com/repos/angular/angular/issues?since=2019-03-11T03:09:08Z")
    .then(response => response.json())
    .then(json => this.setState({issueList: json, loaded : true}))

  }



  render() {
    return (
      <div className="App">
        <button onClick={this.issueFetcher}>Refresh results</button>
        <h2>
          Check out these Angular Issues
        </h2>
        {this.state.loaded ? 
        'fetch complete' :
        'waiting on them results'}

        {this.state.issueList.map(issue => <Issue issueData={issue}/>)}


      </div>
    );
  }
}

export default App;
