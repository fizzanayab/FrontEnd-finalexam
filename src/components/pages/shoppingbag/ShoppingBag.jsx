import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeItem } from '../../features/cartSlice';
import './ShoppingBag.css'

const ShoppingBag = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector((state) => state.cart.items || []);

  const handleRemoveItem = (id) => {
    dispatch(removeItem({ id }));
  };

  return (
    <div className='mainshoopingbag'>
      <div className="shopping-bag container">
        <h2 className="shopping-bag__title">Your Shopping Bag</h2>
        {items.length === 0 ? (
          <p className="shopping-bag__empty">No items in your shopping bag.</p>
        ) : (
          <div className="shopping-bag__items">
            {items.map((item) => (
              <div key={item.id} className="shopping-bag__item">
                <div className="shopping-bag__details">
                  <h3 className="shopping-bag__name">{item.name}</h3>
                  <p className="shopping-bag__price">£{item.price}</p>
                  <p className="shopping-bag__description">{item.description}</p>
                  <button
                    className="shopping-bag__remove-btn"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="shopping-bag__actions">
          <button className="shopping-bag__back-btn" onClick={() => navigate(-1)}>
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingBag;
