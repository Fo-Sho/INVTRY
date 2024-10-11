import React, { useState } from 'react';
import Dashboard from './Dashboard';
import AddInventoryForm from './AddInventoryForm';
import OrderTracking from './OrderTracking';
import AddOrderForm from './AddOrderForm';
import ChartComponent from './Chart';

function App() {
  const [orders, setOrders] = useState([]);

  const addOrder = (newOrder) => {
    setOrders([...orders, newOrder]);
  };

  return (
    <div className="App">
      <h1>Inventory Management</h1>
      <h1>Sales Chart</h1>
      <Dashboard />
      <AddInventoryForm />
      <OrderTracking />
      <AddOrderForm addOrder={addOrder} />
      <ChartComponent />
    </div>
  );
}

export default App;
