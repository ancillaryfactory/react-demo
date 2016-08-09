import React, { Component } from 'react';

export default class ItemList extends Component {
  render() {
    return (
      <li><a href={`/item/${this.props.id}`}>{this.props.title}</a><a data-id={this.props.id} onClick={this.props.handleDelete}>X</a></li>
    );
  }
}
