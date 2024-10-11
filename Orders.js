import React, { useState, useEffect } from 'react';
import { db, ref, onValue, set } from './firebaseConfig';

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const ordersRef = ref(db, 'orders/');
    onValue(ordersRef, (snapshot) => {
      const data = snapshot.val();
      setOrders(data ? Object.values(data) : []);
    });
  }, []);

  const updateOrderStatus = (orderId, newStatus) => {
    const orderRef = ref(db, `orders/${orderId}`);
    set(orderRef, { ...orders[orderId], status: newStatus });
  };

  return (
    <div>
      <h2>Orders Overview</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Items</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Update Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.id}</td>
              <td>{order.items}</td>
              <td>{order.quantity}</td>
              <td>{order.status}</td>
              <td>
                <select value={order.status} onChange={(e) => updateOrderStatus(order.id, e.target.value)}>
                  <option value="Pending">Pending</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
