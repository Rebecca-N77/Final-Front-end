import React, { Component } from 'react';
import EventContent from './EventContent';
import TopImage from './TopImage';
export class Events extends Component {
  render() {
    return (
      <div>
        <EventContent />
        <TopImage />
      </div>
    );
  }
}

export default Events;
