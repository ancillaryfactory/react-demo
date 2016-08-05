import React, { Component } from 'react';

import ItemList from './ItemList';
// import logo from './logo.svg';
import './App.css';
import data from './data';

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

  componentDidMount() {
    this.refs.newItem.focus();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.items.length + 1,
      title: this.refs.newItem.value,
    }
    this.setState({ items: [...this.state.items, newItem], });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" /> */}
          <h1>{data.title}</h1>
        </div>

        <ItemList items={this.state.items} />

        <form onSubmit={this.handleSubmit} className="item-form">
          <input ref="newItem" />
          <input type="submit" value="Add" />
        </form>

      </div>
    );
  }
}

export default App;
