import React, { useState } from 'react';

function AddOrderForm({ inventory, addOrder }) {
  const [items, setItems] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrder = {
      id: Math.floor(Math.random() * 1000), // generate random ID for demo
      items,
      quantity,
      status: 'Pending'
    };
    addOrder(newOrder);
    setItems('');
    setQuantity(1);
  };

  return (
    <form className="add-order-form" onSubmit={handleSubmit}>
      <h2>Create New Order</h2>
      
      <label htmlFor="items">Items</label>
      <input
        type="text"
        id="items"
        value={items}
        onChange={(e) => setItems(e.target.value)}
        required
      />

      <label htmlFor="quantity">Quantity</label>
      <input
        type="number"
        id="quantity"
        value={quantity}
        min="1"
        onChange={(e) => setQuantity(e.target.value)}
        required
      />

      <button type="submit">Create Order</button>
    </form>
  );
}

export default AddOrderForm;
