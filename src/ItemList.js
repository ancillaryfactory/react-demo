import React, { Component, PropTypes } from 'react';
import Item from './Item';
import './ItemList.css';

export default class ItemList extends Component {
  getItemList = (items) => {
    return items.map(x => <Item onDeleteFunc={this.onDelete} id={x.id} title={x.title} key={x.id} />);
  }

  onDelete = (itemToDelete) => {
    const newItems = this.props.items.filter( x => x.id !== itemToDelete.props.id );
    this.props.items.splice(0,this.props.items.length);
    this.props.items.push(...newItems);
    return this.setState({needChange:true});
  }

  constructor(props) {
    super();

    this.state = {
      needChange:false,
    };
  }

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
