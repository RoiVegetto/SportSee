import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Title from './Components/Title/Title';
import Recharts from './Components/Diagram/Bar/Bar';

function App() {
  return (
    <div className="App">
      <Navbar logo="/Images/logoSportSee.png" />
      <div className="main">
        <Sidebar />
        <main>
          <Title/>
          <Recharts />
        </main>
      </div>
    </div>
  );
}

export default App;
