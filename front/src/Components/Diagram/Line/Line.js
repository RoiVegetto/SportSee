import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import './Line.css';

const data = [
  { day: 'L', 'Durée moyenne des sessions': 60 },
  { day: 'M', 'Durée moyenne des sessions': 45 },
  { day: 'M', 'Durée moyenne des sessions': 30 },
  { day: 'J', 'Durée moyenne des sessions': 55 },
  { day: 'V', 'Durée moyenne des sessions': 75 },
  { day: 'S', 'Durée moyenne des sessions': 40 },
  { day: 'D', 'Durée moyenne des sessions': 50 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const dataPoint = payload[0].payload;
    return (
      <div className="custom-tooltip">
        <p className="line-tooltip">{`${dataPoint['Durée moyenne des sessions']} min`}</p>
      </div>
    );
  }
  return null;
};

const DayLine = () => {
  const lineColors = ['#FFFFFF'];
  const lineCustomization = {
    strokeWidth: 2,
    dot: { r: 0 }, // Set the dot radius to 0, so no dots are shown initially
    activeDot: { r: 4 }, // Show a dot of radius 4 on hover
    isAnimationActive: false,
  };

  return (
    <div className="container-line">
      <h2 className="line-title">Durée moyenne des sessions</h2>
      <LineChart width={258} height={181} data={data} margin={{ left: 20, right: 20 }}>
        <XAxis dataKey="day" tickLine={false} axisLine={false} />
        <YAxis hide={true} />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="monotone"
          dataKey="Durée moyenne des sessions"
          stroke={lineColors[0]}
          {...lineCustomization}
        />
      </LineChart>
    </div>
  );
};

export default DayLine;
