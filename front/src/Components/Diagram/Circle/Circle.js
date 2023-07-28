import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import './Circle.css';

const CircleChart = ({ data }) => {

  const chartData = [
    { name: 'Atteint', value: data * 100 },
    { name: 'Restant', value: (1 - data) * 100 },
  ];

  const renderLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    name,
  }) => {
    return null;
  };

  const COLORS = ['red', 'transparent'];

  return (
    <div className="container-circle">
      <ResponsiveContainer width={258} height={263}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            startAngle={90}
            endAngle={450}
            innerRadius="70%"
            outerRadius="80%"
            labelLine={false}
            label={renderLabel}
            strokeLinecap="round"
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="black"
            fontSize="24px"
            fontWeight="bold"
          >
            {`${(data * 100).toFixed(0)}%`}
          </text>
          <text
            x="50%"
            y="60%"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="black"
            fontSize="12px"
          >
            de votre objectif
          </text>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CircleChart;
