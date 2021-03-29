import React, { Component } from 'react';
import ShopItems from './ShopItems';

export class Shop extends Component {
  render(props) {
    const catId = this.props.match.params.id;

    return (
      <div>
        <ShopItems categoryId={catId} />
      </div>
    );
  }
}

export default Shop;
