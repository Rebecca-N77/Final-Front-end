import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Carousel from './Carousel';
import Categories from './Categories';

export class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Carousel />
        <Categories />
      </div>
    );
  }
}

export default Home;
