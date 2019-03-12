import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    issueList: [],
    loaded: false
  }

  issueFetcher = () => {
    console.log('wired up')

    fetch("https://api.github.com/repos/angular/angular/issues")
    .then(response => response.json())
    .then(json => this.setState({loaded : true}))
    
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

      </div>
    );
  }
}

export default App;
