import React from 'react';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

function Reports({ inventory, orders }) {

  const generateInventoryReport = () => {
    const doc = new jsPDF();
    doc.text('Inventory Report', 10, 10);
    autoTable(doc, {
      head: [['Item', 'SKU', 'Quantity', 'Location']],
      body: inventory.map(item => [item.itemName, item.sku, item.quantity, item.location]),
    });
    doc.save('inventory_report.pdf');
  };

  const generateOrderReport = () => {
    const doc = new jsPDF();
    doc.text('Order Report', 10, 10);
    autoTable(doc, {
      head: [['Order ID', 'Items', 'Quantity', 'Status']],
      body: orders.map(order => [order.id, order.items, order.quantity, order.status]),
    });
    doc.save('order_report.pdf');
  };

  return (
    <div>
      <h2>Generate Reports</h2>
      <button onClick={generateInventoryReport}>Download Inventory Report (PDF)</button>
      <button onClick={generateOrderReport}>Download Order Report (PDF)</button>
    </div>
  );
}

export default Reports;
