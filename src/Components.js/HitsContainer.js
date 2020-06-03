import React, { Component } from 'react';
import { Modal } from '@material-ui/core';

class HitsContainer extends Component {
  state = {
    viewingDetails: false,
  };

  handleClick = event => {
    this.setState({ viewingDetails: !this.state.viewingDetails });
  };

  render() {
    console.log(this.state.viewingDetails);

    return (
      <div className="hit-preview" onClick={() => this.handleClick()}>
        <h1>
          {' '}
          {this.props.hit.person.firstname} {this.props.hit.person.lastname}{' '}
        </h1>
        <p> <b>Description:</b>  {this.props.hit.description}</p>
        <p> <b>State: </b> {this.props.hit.state} </p>
        <p> <b>Party: </b> {this.props.hit.party}</p>
        {this.state.viewingDetails ? (
          <div>
            <p> <b>Phone: </b> {this.props.hit.phone} </p>
            <p> <b>Address: </b> {this.props.hit.extra.address} </p>
            <a href={this.props.hit.person.link}>Website</a>
            {this.props.hit.person.twitterid ? <a href={`https://twitter.com/${this.props.hit.person.link}`}> Twitter </a>
             : null }
          </div>
        ) : null}

        {console.log(this.props)}
      </div>
    );
  }
}

export default HitsContainer;
