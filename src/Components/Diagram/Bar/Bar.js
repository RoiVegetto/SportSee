import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import "./Bar.css";

const data = [
  { day: '1', 'Poids (kg)': 1000, 'Calories brûlées (kCal)' : 300 },
  { day: '2', 'Poids (kg)': 1500, 'Calories brûlées (kCal)': 500 },
  { day: '3', 'Poids (kg)': 2000, 'Calories brûlées (kCal)': 800 },
  { day: '4', 'Poids (kg)': 1000, 'Calories brûlées (kCal)': 300 },
  { day: '5', 'Poids (kg)': 1500, 'Calories brûlées (kCal)': 500 },
  { day: '6', 'Poids (kg)': 2000, 'Calories brûlées (kCal)': 800 },
  { day: '7', 'Poids (kg)': 2000, 'Calories brûlées (kCal)': 800 },
  { day: '9', 'Poids (kg)': 2000, 'Calories brûlées (kCal)': 800 },
  { day: '10', 'Poids (kg)': 2000, 'Calories brûlées (kCal)': 800 },
];

const Recharts = () => {

  const barColors = ['#282D30', '#E60000'];

  const barCustomization = {
    barSize: 7,
    radius: [3, 3, 0, 0],
  };

  return (
    <div className="main-container">

      <BarChart width={835} height={320} data={data}>
        <XAxis dataKey="day" />
        <YAxis />
        <CartesianGrid strokeDasharray="5 0" />
        <Tooltip />
        <Legend />
        <Bar dataKey="Poids (kg)" fill={barColors[0]} {...barCustomization} />
        <Bar dataKey="Calories brûlées (kCal)" fill={barColors[1]} {...barCustomization} />
      </BarChart>

    </div>
  );
};

export default Recharts;
