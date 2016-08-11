import React, { Component } from 'react';

export default class ItemList extends Component {
  render() {
    return (
      <li><a href={`/item/${this.props.id}`}>{this.props.title}</a></li>
    );
  }
}
