import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Title from './Components/Title/Title';
import Recharts from './Components/Diagram/Bar/Bar';
import DayLine from './Components/Diagram/Line/Line';
import RadarCharts from './Components/Diagram/Radar/Radar';
import CircleChart from './Components/Diagram/Circle/Circle';

function App() {
  return (
    <div className="App">
      <Navbar logo="/Images/logoSportSee.png" />
      <div className="main">
        <Sidebar />
        <main>
          <Title/>
          <Recharts />
          <DayLine />
          <RadarCharts />
          <CircleChart />
        </main>
      </div>
    </div>
  );
}

export default App;
