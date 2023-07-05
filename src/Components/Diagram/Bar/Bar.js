import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, } from "recharts";
import "./Bar.css";

const data = [
  { day: 'monday', pageviews: 1000, visitor: 300},
  { day: 'Tuesday', pageviews: 1500, visitor: 500},
  { day: 'Wednesday', pageviews: 2000, visitor: 800},
];

const Recharts = () => {

  const lineColors = ['#8884d8', '#82ca9d']
  const barColors = ['#8884d8', '#82ca9d']

  const lineCustomization = {
    strokeWidth:2,
    dot: { r:4 },
    activeDot: { r:8 },
  }
  const barCustomization = {
    barSize: 30,
    radis: [ 5, 5, 0, 0],
    label: { position: 'top'},
  }

  return (
    <div className="main-container">

      <LineChart width={600} height={300} data={data}>
        <XAxis dataKey="day" />
        <CartesianGrid strokeDashArray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pageviews" stroke={lineColors[0]} {...lineCustomization} />
        <Line type="monotone" dataKey="pageviews" stroke={lineColors[0]} {...lineCustomization} />
      </LineChart>

    </div>
  )
} 

export default Recharts;