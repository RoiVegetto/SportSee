import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Navbar logo="/Images/logoSportSee.png" />
      <div className="main">
        <Sidebar />
        <main></main>
      </div>
    </div>
  );
}

export default App;
