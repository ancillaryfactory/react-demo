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
      newItem: '',
    };
  }

  componentDidMount() {
    this.refs.newItem.focus();
  }

  handleNewItemChange = (e) => this.setState({ newItem: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.items.length + 1,
      title: this.refs.newItem.value,
    }
    this.setState({
      items: [...this.state.items, newItem],
      newItem: '',
     });
  }

  handleDelete = (e) => {
    e.preventDefault();
    // dataset always returns a string, so convert the id into a string for proper type comparison
    const deleteId = parseInt(e.target.dataset.id, 10);
    console.log("deleteId", deleteId);
    // if the deleteId is found in the items array, remove it and return a new items array
    const newItems = this.state.items.filter( x => x.id !== deleteId );
    // update the state of items with the new array
    this.setState({ items: newItems });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" /> */}
          <h1>{data.title}</h1>
        </div>

        <ItemList items={this.state.items} handleDelete={this.handleDelete}/>

        <form onSubmit={this.handleSubmit} className="item-form">
          <input ref="newItem" value={this.state.newItem} onChange={this.handleNewItemChange} />
          <input type="submit" value="Add" />
        </form>

      </div>
    );
  }
}

export default App;
