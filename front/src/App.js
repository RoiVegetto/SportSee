import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';
import MainContent from './Components/MainContent/MainContent';
import Switch from './Components/Switch/Switch';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar logo="/Images/logoSportSee.png" />
        <div className="main">
          <Sidebar />
          <main>
            <Routes>
              <Route path="/" element={<Switch />} />
              <Route path="/user/:userId" element={<MainContent />} />
              <Route path="/*" element={<NotFoundPage logo="/Images/logoSportSee.png" />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
