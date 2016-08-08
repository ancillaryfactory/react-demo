import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      items: [
        {id: 1, title: 'This is the first'},
        {id: 2, title: 'Second'},
        {id: 3, title: 'Third'},
      ],
    };
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Title goes here</h1>
        </div>

        {/* form class = item-form */}
      </div>
    );
  }
}

export default App;
