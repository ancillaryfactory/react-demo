import React, { Component } from 'react';
import Item from './Item';
import './ItemList.css';

export default class ItemList extends Component {
  //getItemList = (items) => items.map(x => <Item title={x.title} />);

  getItemList = function(items) {
    return items.map(function(x) {
      return <Item id={x.id} key={x.id} title={x.title} />
    })
  }

  render() {
    return (
      <div className="item-list">
        <h2>Subhead</h2>
        <ul>{this.getItemList(this.props.items)}</ul>
      </div>
    );
  }
}
