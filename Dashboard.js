import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';

function Dashboard() {
  // Sample data
  const [inventoryData] = useState([
    { item: 'Product A', stock: 30 },
    { item: 'Product B', stock: 5 },
    { item: 'Product C', stock: 12 },
  ]);
  
  const totalStock = inventoryData.reduce((sum, item) => sum + item.stock, 0);
  const lowStockItems = inventoryData.filter(item => item.stock < 10);

  const chartData = {
    labels: inventoryData.map(item => item.item),
    datasets: [
      {
        label: 'Stock Levels',
        data: inventoryData.map(item => item.stock),
        backgroundColor: 'rgba(75, 192, 192, 0.6)'
      }
    ]
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="overview">
        <h3>Total Inventory: {totalStock}</h3>
        <h3>Low Stock Alerts: {lowStockItems.length}</h3>
        {lowStockItems.length > 0 && (
          <ul>
            {lowStockItems.map(item => (
              <li key={item.item}>{item.item} - {item.stock} left</li>
            ))}
          </ul>
        )}
      </div>

      <div className="charts">
        <h3>Inventory Levels</h3>
        <Bar data={chartData} />
      </div>
    </div>
  );
}

export default Dashboard;
