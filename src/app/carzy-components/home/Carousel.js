import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import img1 from '../../../assets/images/studio.jpg';
import img2 from '../../../assets/images/customize.jpeg';
import Classes from './home.module.css';

export class Carousel extends Component {
  render() {
    const content = [
      {
        title: 'Events',
        description: 'Collaboration and inspired workshops',
        img: img1,
        path: '/carzy-events',
      },
      {
        title: 'Create ',
        description: ' Get creative and enjoy customizing your own design',
        img: img2,
        path: '/carzy-shop',
      },
    ];

    return (
      <div>
        <Slider autoplay={3000}>
          {content.map((item, index) => (
            <div
              key={index}
              style={{
                background: `url('${item.img}') no-repeat center center`,
              }}
            >
              <div className={Classes.header}>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <Link to={item.path}>
                  <button className={Classes.btn}>Discover</button>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default Carousel;
