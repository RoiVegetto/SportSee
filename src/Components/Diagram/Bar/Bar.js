import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import "./Bar.css";

const data = [
  { day: '1', 'Poids (kg)': 68, 'Calories brûlées (kCal)': 300 },
  { day: '2', 'Poids (kg)': 63, 'Calories brûlées (kCal)': 370 },
  { day: '3', 'Poids (kg)': 70, 'Calories brûlées (kCal)': 400 },
  { day: '4', 'Poids (kg)': 67, 'Calories brûlées (kCal)': 300 },
  { day: '5', 'Poids (kg)': 68, 'Calories brûlées (kCal)': 265 },
  { day: '6', 'Poids (kg)': 75, 'Calories brûlées (kCal)': 260 },
  { day: '7', 'Poids (kg)': 68, 'Calories brûlées (kCal)': 290 },
  { day: '9', 'Poids (kg)': 72, 'Calories brûlées (kCal)': 400 },
  { day: '10', 'Poids (kg)': 68, 'Calories brûlées (kCal)': 340 },
];

const Recharts = () => {

  const barColors = ['#282D30', '#E60000'];

  const kgBarCustomization = {
    barSize: 7,
    radius: [3, 3, 0, 0],
  };

  const caloriesBarCustomization = {
    barSize: 7,
    radius: [3, 3, 0, 0],
  };

  const CustomYAxisRightTick = ({ x, y, payload }) => (
    <g transform={`translate(${x},${y})`}>
      <text x={12} y={4} dy={16} textAnchor="start" fill="#666">
        {payload.value}
      </text>
    </g>
  );

  // Détermine les valeurs minimales et maximales pour l'échelle de poids
  const minWeight = 60;
  const maxWeight = 80;

  // Détermine les valeurs minimales et maximales pour l'échelle de calories
  const minCalories = 200;
  const maxCalories = 400;

  const yAxisRightTicks = [60, 70, 80];

  return (
    <div className="main-container">
      <h2>Votre titre</h2>
        <div className="chart-container">
        <BarChart width={835} height={320} data={data}>
        <XAxis dataKey="day" />
        <YAxis yAxisId="left" hide />
        <YAxis
          yAxisId="right"
          orientation="right"
          tick={CustomYAxisRightTick}
          domain={[minWeight, maxWeight]}
          ticks={yAxisRightTicks}
        />
        <YAxis
          yAxisId="calories"
          orientation="right"
          tick={CustomYAxisRightTick}
          domain={[minCalories, maxCalories]}
          hide
        />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" horizontal={true} vertical={false} />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="Poids (kg)"
          fill={barColors[0]}
          {...kgBarCustomization}
          yAxisId="right"
          domain={[60, 80]}
        />
        <Bar
          dataKey="Calories brûlées (kCal)"
          fill={barColors[1]}
          {...caloriesBarCustomization}
          yAxisId="calories"
        />
      </BarChart>
    </div>
    </div>
  );
};

export default Recharts;
