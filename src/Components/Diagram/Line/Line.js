import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import "./Line.css";

const data = [
  { day: 'L', 'Durée moyenne des sessions' : 60 },
  { day: 'M', 'Durée moyenne des sessions' : 45 },
  { day: 'M', 'Durée moyenne des sessions' : 30 },
  { day: 'J', 'Durée moyenne des sessions' : 55 },
  { day: 'V', 'Durée moyenne des sessions' : 75 },
  { day: 'S', 'Durée moyenne des sessions' : 40 },
  { day: 'D', 'Durée moyenne des sessions' : 50 },
];

const DayLine = () => {

  const lineColors = ['#8884d8'];

  const lineCustomization = {
    strokeWidth: 2,
    dot: { r: 4 },
    activeDot: { r: 8 },
    isAnimationActive: false,
  };

  return (
    <div className="main-container">
      <LineChart width={258} height={263} data={data}>
        <XAxis dataKey="day" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Durée moyenne des sessions" stroke={lineColors[0]} {...lineCustomization} />
      </LineChart>
    </div>
  );
};

export default DayLine;
