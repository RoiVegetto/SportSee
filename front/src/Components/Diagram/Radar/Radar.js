import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import './Radar.css';

/*const data = [
  { kind: 'Intensité', data: 120, fullMark: 150 },
  { kind: 'Vitesse', data: 98, fullMark: 150 },
  { kind: 'Force', data: 86, fullMark: 150 },
  { kind: 'Endurance', data: 99, fullMark: 150 },
  { kind: 'Energie', data: 105, fullMark: 150 },
  { kind: 'Cardio', data: 122, fullMark: 150 },
];*/

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
