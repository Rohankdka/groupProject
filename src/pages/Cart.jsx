// Cart.js
import React, { useState } from 'react';
import { FaShoppingBag } from 'react-icons/fa';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [cartVisible, setCartVisible] = useState(false);

  const addItemToCart = (item) => {
    const existingItem = cartItems.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
      setCartItems([...cartItems]);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
    setTotalCost(totalCost + item.price);
  };

  const removeItemFromCart = (item) => {
    const existingItem = cartItems.find((i) => i.id === item.id);
    if (existingItem.quantity > 1) {
      existingItem.quantity -= 1;
      setCartItems([...cartItems]);
    } else {
      setCartItems(cartItems.filter((i) => i.id !== item.id));
    }
    setTotalCost(totalCost - item.price);
  };

  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };

  return (
    <div>
      {cartVisible && (
        <div className="absolute right-0 top-16 bg-white shadow-md p-4">
          <h2 className="text-lg font-bold">Cart</h2>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center">
                <span>{item.name}</span>
                <span>Quantity: {item.quantity}</span>
                <span>Price: ${item.price}</span>
                <button onClick={() => removeItemFromCart(item)} className="text-gray-600 hover:text-gray-900">
                  -
                </button>
                <button onClick={() => addItemToCart(item)} className="text-gray-600 hover:text-gray-900">
                  +
                </button>
              </li>
            ))}
          </ul>
          <p>Total: ${totalCost}</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Checkout
          </button>
        </div>
      )}
      <FaShoppingBag onClick={toggleCart} className="text-gray-600 hover:text-gray-900 h-5 w-5" />
    </div>
  );
};

export default Cart;