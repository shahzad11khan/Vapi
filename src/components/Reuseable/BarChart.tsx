import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface BarChartProps {
  labels: string[];
  data: number[];
  label?: string;
  backgroundColor?: string;
  height?: number;
}

const BarChart: React.FC<BarChartProps> = ({
  labels,
  data,
  label = 'Data',
  backgroundColor = '#55761C',
  height = 170,
}) => {
  return (
<div className="" style={{ height }}>
<Bar
    data={{
      labels,
      datasets: [
        {
          label,
          data,
          backgroundColor,
          borderRadius: 6,
        },
      ],
    }}
    options={{
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          min: 0,
          max: 1000,
          ticks: {
            stepSize: 250,
            callback: function (value) {
              return value;
            },
          },
        },
      },
    }}
  />
</div>

  );
};

export default BarChart;
