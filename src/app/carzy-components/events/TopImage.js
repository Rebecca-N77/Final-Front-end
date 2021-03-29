import React, { Component } from 'react';
import Classes from './event.module.css';

export class TopImage extends Component {
  render() {
    return (
      <div calssname={Classes.imgp}>
        <h2>Events</h2>
        <img src='#' />
      </div>
    );
  }
}

export default TopImage;
