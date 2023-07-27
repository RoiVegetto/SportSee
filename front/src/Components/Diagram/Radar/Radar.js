import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import './Radar.css';

const RadarCharts = ({ data }) => {
  return (
    <div className="container-radar">
      <RadarChart outerRadius={90} width={258} height={263} data={data}>
        <PolarGrid radialLines={false} />
        <PolarAngleAxis dataKey="kind" tick={{ fill: 'white' }} fontSize={12} />
        <Radar
          dataKey="value"
          fill="rgba(255, 1, 1, 0.70)"
          name={{ fill: 'white' }}
        />
      </RadarChart>
    </div>
  );
};

export default RadarCharts;
