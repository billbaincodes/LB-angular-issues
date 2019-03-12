import React, { Component } from 'react';
import './App.css';
import Issue from './components/Issue.js'

class App extends Component {

  state = {
    issueList: [],
    loaded: false
  }

  componentDidMount(){
    this.issueFetcher()
  }

  issueFetcher = () => {
    this.setState({ loaded : false })

    fetch("https://api.github.com/repos/angular/angular/issues?since=2019-03-11T03:09:08Z")
    .then(response => response.json())
    .then(json => this.setState({issueList: json, loaded : true}))

  }



  render() {
    return (
      <div className="main">
        <h2>
          Check out these Angular Issues
        </h2>
        <button onClick={this.issueFetcher}>Refresh results</button>
        <div>
        {this.state.loaded ? 
        'fetch complete' :
        'waiting on them results'}
        </div>
        {this.state.issueList.map(issue => <Issue issueData={issue}/>)}
      </div>
    );
  }
}

export default App;
