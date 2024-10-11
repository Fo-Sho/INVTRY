import React, { useState } from 'react';

function OrderTracking() {
  const [orders, setOrders] = useState([
    { id: 1, items: 'Product A, Product B', quantity: 5, status: 'Pending' },
    { id: 2, items: 'Product C', quantity: 2, status: 'Shipped' },
  ]);

  const updateStatus = (orderId, newStatus) => {
    setOrders(orders.map(order =>
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  return (
    <div className="order-tracking">
      <h2>Order Tracking</h2>
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
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.items}</td>
              <td>{order.quantity}</td>
              <td>{order.status}</td>
              <td>
                <select
                  value={order.status}
                  onChange={(e) => updateStatus(order.id, e.target.value)}
                >
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

export default OrderTracking;
