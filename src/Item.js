import React, { Component } from 'react';

export default class Item extends Component {
  handleClick = (e) => {
    this.setState({clicked:"done"});
  }

  constructor(props) {
    super();

    this.state = {clicked:"notClicked"};
  }

  render() {
    return (
      <li className={this.state.clicked} onClick={this.handleClick} id={this.props.id}>{this.props.title}</li>
    );
  }
}
