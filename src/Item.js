import React, { Component } from 'react';

export default class Item extends Component {
  handleClick = (e) => this.setState({clicked:"done"});

  deleteClick = (e) => {
    this.props.onDeleteFunc(this)
  }

  constructor(props) {
    super();

    this.state = {
      clicked:"notClicked"
    };
  }

  render() {
    return (
      <li className={this.state.clicked} onClick={this.handleClick} id={this.props.id}>
        <img onClick={this.deleteClick} alt="delete" src="../img/1470962572_Cancel.png" />
        {this.props.title}
      </li>
    );
  }
}
