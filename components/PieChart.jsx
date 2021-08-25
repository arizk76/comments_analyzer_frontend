import React from 'react';
import { Chart, Pie } from 'react-chartjs-2';

const PieChart = ({ data }) => {
  const chartData = {
    labels: ['Neg', 'Pos', 'Neu'],
    datasets: [
      {
        data: [
          data.neg_percentage,
          data.positive_percentage,
          data.neutral_percentage,
        ],
        backgroundColor: [
          'rgba(220, 38, 38, 0.2)',
          'rgba(5, 150, 105, 0.2)',
          'rgba(217, 119, 6, 0.2)',
        ],
        borderColor: [
          'rgba(255, 38, 38, 1)',
          'rgba(5, 162, 105, 1)',
          'rgba(225, 133, 8, 1)',
        ],
        borderWidth: 1,
      },
    ],
    options: {
      animations: {
        duration: 0,
      },
    },
  };
  // const options = {
  //   animations: {
  //     duration: 0,
  //   },
  // };
  return (
    <>
      <Pie data={chartData} />
    </>
  );
};
export default PieChart;
