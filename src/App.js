import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    issueList: [],
    loaded: false
  }

  issueFetcher = () => {

  }



  render() {
    return (
      <div className="App">
        <h2>
          Check out these Angular Issues
        </h2>
        {this.state.loaded ? 
        this.state.issueList :
        'waiting on them results'}

      </div>
    );
  }
}

export default App;
