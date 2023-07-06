import React from "react";
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis } from "recharts";
import "./Radar.css";

const data = [
  { subject: 'Intensité', A: 120, fullMark: 150 },
  { subject: 'Vitesse', A: 98, fullMark: 150 },
  { subject: 'Force', A: 86, fullMark: 150 },
  { subject: 'Endurance', A: 99, fullMark: 150 },
  { subject: 'Energie', A: 105, fullMark: 150 },
  { subject: 'Cardio', A: 122, fullMark: 150 },
];

const RadarCharts = () => {
  return (
    <div className="main-container">
      <RadarChart cx={300} cy={200} outerRadius={150} width={600} height={400} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        <Legend />
      </RadarChart>
    </div>
  );
};

export default RadarCharts;
