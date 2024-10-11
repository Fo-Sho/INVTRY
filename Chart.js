import React, { useRef, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);  // Registering Chart.js components

function ChartComponent() {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = new Chart(chartRef.current, {
      type: 'bar', // Type of chart (can be 'line', 'pie', 'bar', etc.)
      data: {
        labels: ['January', 'February', 'March', 'April', 'May'], // X-axis labels
        datasets: [
          {
            label: 'Monthly Sales',
            data: [120, 190, 30, 50, 200],  // Sample data for Y-axis
            backgroundColor: ['#f38b4a', '#56d798', '#ff8397', '#6970d5', '#8e5ea2'],
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true, // Make it responsive to screen size
        scales: {
          y: {
            beginAtZero: true // Start the Y-axis at 0
          }
        }
      }
    });

    return () => {
      // Cleanup the chart instance to avoid memory leaks
      chartInstance.destroy();
    };
  }, []);

  return <canvas ref={chartRef} />;  // Canvas to display the chart
}

export default ChartComponent;
