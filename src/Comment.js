import React from 'react';

export default class Comment extends React.Component {
  render() {
    return <p>{this.props.message}</p>;
  }
}