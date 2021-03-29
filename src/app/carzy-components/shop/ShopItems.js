import React, { useEffect, useState } from 'react';
import Classes from './shop.module.css';
import { Link } from 'react-router-dom';
import { Confirm } from 'react-st-modal';

const ShopItems = (props) => {
  const [items, setItems] = useState([]);
  const [categorizedItems, setCategorizedItems] = useState([]);
  //const [plus, setPlus] = useState(0);

  //const catName = props.match.params.name;
  const id = props.categoryId;
  const getCategorizedItems = async () => {
    if (id) {
      const respond = await fetch(
        `http://localhost:8000/api/items-by-category/${id}`
      );
      const result = await respond.json();
      setItems(result.data);
      console.log(result.data);
    } else {
      const respond = await fetch(`http://localhost:8000/api/items`);
      const result = await respond.json();
      setItems(result.data);
      console.log(result.data);
    }
  };
  const getItems = async () => {};

  const createCart = async (id, price) => {
    const response = await fetch('http://localhost:8000/api/carts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        //Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        item_id: id,
        quantity: 1,
        overall_price: price,
      }),
    });
    const result = await response.json();
    console.log(result);
  };
  const addItem = async () => {
    //http://localhost:8000/api/carts
  };
  // const IncrementItem = () => {
  //   const p = plus + 1;
  //   setPlus(p);
  //   console.log(p);
  // };
  // const DecreaseItem = () => {
  //   const p = plus - 1;
  //   setPlus(p);
  //   console.log(p);
  // };

  useEffect(() => {
    getCategorizedItems();
  }, []);

  return (
    <div>
      <h1> Category</h1>
      {items.map((item, iKey) => (
        <div key={iKey} className={Classes.card}>
          <Link
            to={{
              pathname: '',
            }}
          >
            <img
              src={`http://localhost:8000/storage/images/${item.image}`}
              alt='Avatar'
              className={Classes.image}
              style={{ width: '100%' }}
            />
          </Link>
          <div className={Classes.middle}>
            <div>{item.name}</div>
            <p className={Classes.price}>$19.99</p>
            <h3> {item.description}</h3>
            <h3> {item.price}</h3>

            <button
              onClick={async () => {
                const result = await Confirm(
                  <div className='row'>
                    <div className='col-6 floa-left'>
                      <img
                        src='https://images.unsplash.com/photo-1612832021026-375ae70f24bf?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                        //{item.image}
                        alt='Avatar'
                        className={Classes.image}
                        style={{ width: '100%' }}
                      />
                    </div>
                    <div className=' col-6 float-right'>
                      <div>{item.name}</div>
                      <p className={Classes.price}>$19.99</p>
                      <h3> {item.description}</h3>
                      <h3> {item.price}</h3>

                      <button onClick={() => createCart(item.id, item.price)}>
                        Add To Card
                      </button>

                      {/* <button onClick={IncrementItem}>+</button>
                        <input value={plus} readOnly />
                        <button onClick={DecreaseItem}>-</button> */}
                    </div>
                  </div>,
                  'Сonfirmation title'
                );

                if (result) {
                  // Сonfirmation confirmed
                } else {
                  // Сonfirmation not confirmed
                }
              }}
            >
              Show confirm
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ShopItems;
