import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import './Circle.css';

const Score = [{ todayScore: 0.14 }];

const CircleChart = () => {
  const todayScore = Score[0].todayScore;

  const data = [
    { name: 'Atteint', value: todayScore * 100 },
    { name: 'Restant', value: (1 - todayScore) * 100 },
  ];

  const renderLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    name,
  }) => {
    return null; // Hide all percentages
  };

  const COLORS = ['red', 'transparent'];

  return (
    <div className="container-circle">
      <ResponsiveContainer width={258} height={263}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            startAngle={90}
            endAngle={450}
            innerRadius="70%"
            outerRadius="80%"
            labelLine={false}
            label={renderLabel}
            strokeLinecap="round"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          {/* New text element for displaying the percentage at the center */}
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="black"
            fontSize="24px"
            fontWeight="bold"
          >
            {`${(todayScore * 100).toFixed(0)}%`}
          </text>
          <text
            x="50%"
            y="60%" // Adjust the y value to control the vertical position
            textAnchor="middle"
            dominantBaseline="middle"
            fill="black"
            fontSize="12px" // Adjust the font size if needed
          >
            de votre objectif
          </text>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CircleChart;
