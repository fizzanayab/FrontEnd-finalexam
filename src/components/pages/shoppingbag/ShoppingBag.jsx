// src/components/ShoppingBag.js
import React from 'react';
import { useSelector } from 'react-redux';

const ShoppingBag = () => {
  // Safely access cart items, providing an empty array fallback if undefined
  const items = useSelector((state) => state.cart?.items || []);

  return (
    <div className="shopping-bag">
      <h2>Your Shopping Bag</h2>
      {items.length === 0 ? (
        <p>No items in your shopping bag.</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShoppingBag;
