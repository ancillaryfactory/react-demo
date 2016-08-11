import React, { Component, PropTypes } from 'react';
import Item from './Item';
import './ItemList.css';

export default class ItemList extends Component {
  getItemList = (items) => items.map(x => <Item id={x.id} title={x.title} key={x.id} />);

  render() {
    return (
      <div onClick={this.handleItemClick.bind(this)} className="item-list">
        <h2>{this.props.subhead}</h2>
        <ul>{this.getItemList(this.props.items)}</ul>
      </div>
    );
  }

  handleItemClick = (e) => {
    
  }
}

ItemList.propTypes = {
  items: PropTypes.array,
};
