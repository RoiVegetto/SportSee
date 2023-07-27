import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import './Bar.css';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="container-tooltip">
        <p className="bar-tooltip">
          {`${payload[0].value} kg`}
          <br/>
          {`${payload[1].value} Kcal`}
        </p>
      </div>
    );
  }
  return null;
};


const Recharts = ({ data }) => {
  return (
    <div className="container-barchart">
      <BarChart
        width={835}
        height={320}
        data={data}
        margin={{ top: 5, right: 34, bottom: 23, left: 43 }}
        barCategoryGap={36}
      >
        <XAxis
          dataKey="dayOfMonth"
          dy={16}
          domain={['dataMin - 10', 'dataMax + 2']}
          style={{ fill: '#9B9EAC', fontSize: 14 }}
          height={50}
          tickMargin={16}
          tickLine={false}
        />
        <YAxis
          yAxisId="kg"
          dataKey="kilogram"
          orientation="right"
          domain={['dataMin - 1', 'dataMax + 2']}
          tickMargin={42}
          tickLine={false}
        />
        <YAxis
          yAxisId="cal"
          dataKey="calories"
          domain={[0, 'dataMax + 150']}
          hide={true}
        />
        <CartesianGrid
          stroke="#ccc"
          strokeDasharray="5 5"
          horizontal={true}
          vertical={false}
        />
        <Tooltip content={<CustomTooltip />} />
        <text x={32} y={42}>
          <tspan className="title-barchart">Activité quotidienne</tspan>
        </text>
        <Legend
          iconType={'circle'}
          verticalAlign="top"
          align="right"
          iconSize={8}
          wrapperStyle={{ paddingTop: '24px', paddingBottom: '47px' }}
          formatter={(value, entry) => (
            <span style={{ color: '#74798C' }}>{value}</span>
          )}
        />
        <Bar
          name="Poids (Kg)"
          yAxisId="kg"
          radius={[10, 10, 0, 0]}
          dataKey="kilogram"
          fill="#282D30"
          maxBarSize={8}
        />
        <Bar
          name="Calories brûlées (KCal)"
          yAxisId="cal"
          radius={[10, 10, 0, 0]}
          dataKey="calories"
          fill="#E60000"
          maxBarSize={8}
        />
      </BarChart>
    </div>
  );
};

export default Recharts;
