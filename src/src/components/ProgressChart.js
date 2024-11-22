import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const ProgressChart = ({ exercises }) => {
  const labels = exercises.map((_, index) => `Day ${index + 1}`);
  const completedExercises = exercises.map((exercise) =>
    exercise.completed ? 1 : 0
  );

  const data = {
    labels,
    datasets: [
      {
        label: 'Completed Exercises',
        data: completedExercises,
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Exercises Completed',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Days',
        },
      },
    },
  };

  return (
    <div>
      <h2>Progress Chart</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default ProgressChart;
