import React, { useEffect, useState } from 'react';
import Classes from '../home/home.module.css';
const Cart = (props) => {
  const [carts, setCarts] = useState([]);

  const getCarts = async () => {
    const respond = await fetch('http://localhost:8000/api/carts');
    const result = await respond.json();
    setCarts(result.data);
    console.log(result.data);
  };

  useEffect(() => {
    getCarts();
  }, []);
  return (
    <div>
      {carts.map((cart, key) => (
        <div key={key}>
          <div> {cart.item.name}</div>
          <div>
            {' '}
            <img
              src={`http://localhost:8000/storage/images/${cart.item.image}`}
              //{item.image}
              alt='Avatar'
              //className={Classes.image}
              style={{ width: '100%' }}
            />
          </div>
          <div> {cart.item.description}</div>
          <div> {cart.description}</div>
          <div> {cart.overall_price}</div>
        </div>
      ))}
    </div>
  );
};
// export class Cart extends Component {
//   render() {
//     return <div>Cart</div>;
//   }
// }

export default Cart;
