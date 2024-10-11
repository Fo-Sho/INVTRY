import React, { useState } from 'react';
import { ref, set, onValue } from 'firebase/database';
import { db } from './firebaseConfig';  // Assuming firebaseConfig is where you initialize Firebase

function AddInventoryForm() {
  const [itemName, setItemName] = useState('');
  const [sku, setSku] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [itemLocation, setItemLocation] = useState('');
  const [supplier, setSupplier] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add inventory item to Firebase
    const itemRef = ref(db, 'inventory/' + sku);
    set(itemRef, {
      itemName,
      sku,
      quantity,
      location: itemLocation,
      supplier
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} placeholder="Item Name" />
      <input type="text" value={sku} onChange={(e) => setSku(e.target.value)} placeholder="SKU" />
      <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Quantity" />
      <input type="text" value={itemLocation} onChange={(e) => setItemLocation(e.target.value)} placeholder="Location" />
      <input type="text" value={supplier} onChange={(e) => setSupplier(e.target.value)} placeholder="Supplier" />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default AddInventoryForm;
