import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  labels: string[];
  data: number[];
  backgroundColors?: string[];
  label?: string;
  height?: number;
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({
  labels,
  data,
  label = 'Data',
  backgroundColors = ['#55761C', '#A4CA55', '#C4E1A4', '#DEF1C6'],
  height = 170,
}) => {
  return (
    <div className="" style={{ height }}>
      <Doughnut
        data={{
          labels,
          datasets: [
            {
              label,
              data,
              backgroundColor: backgroundColors,
              borderWidth: 1,
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: 'bottom',
              labels: {
                boxWidth: 10,
                padding: 0,
                color: '#333',
              },
            },
          },
        }}
      />
    </div>
  );
};

export default DoughnutChart;
