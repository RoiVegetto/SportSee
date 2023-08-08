import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import './Line.css';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const dataPoint = payload[0].payload;
    return (
      <div className="custom-tooltip">
        <p className="line-tooltip">{`${dataPoint['sessionLength']} min`}</p>
      </div>
    );
  }
  return null;
};

const DayLine = ({ data }) => {
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
      <LineChart
        width={258}
        height={181}
        data={data}
        margin={{ left: 20, right: 20 }}
      >
        <XAxis dataKey="day" tickLine={false} axisLine={false} />
        <YAxis hide={true} />
        <Tooltip
          content={<CustomTooltip />}
          cursor={{
            stroke: 'opacity: 0.975, background: #000',
            strokeWidth: 200,
          }}
        />
        <Line
          type="natural"
          dataKey="sessionLength"
          stroke={lineColors[0]}
          {...lineCustomization}
        />
      </LineChart>
    </div>
  );
};

export default DayLine;
