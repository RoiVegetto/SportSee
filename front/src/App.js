import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Title from './Components/Title/Title';
import Recharts from './Components/Diagram/Bar/Bar';
import DayLine from './Components/Diagram/Line/Line';
import RadarCharts from './Components/Diagram/Radar/Radar';
import CircleChart from './Components/Diagram/Circle/Circle';
import {
  getDailyActivity,
  getDailyPerformance,
  getDailyMain,
  getDailySession,
} from './services/userApiService';
import Count from './Components/Count/Count';
import Error from './Components/Error/Error';

function App() {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  /**
   * Get data of user
   * @param {string} userId - the id of user
   */
  const getData = async (userId) => {
    try {
      const userActivity = await getDailyActivity(userId);
      const userPerformance = await getDailyPerformance(userId);
      const userMain = await getDailyMain(userId);
      const userSession = await getDailySession(userId);
      setData({ userActivity, userPerformance, userMain, userSession });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleProfileChange = (userId) => {
    setLoading(true);
    getData(userId);
  };

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    handleProfileChange(12);
  }, []);
  /* eslint-enable react-hooks/exhaustive-deps */

  return (
    <div className="App">
      <Navbar logo="/Images/logoSportSee.png" />
      <div className="main">
        <Sidebar />
        <main>
          {isLoading ? (
            <Error logo="/Images/logoSportSee.png" />
          ) : (
            <div className="container-main">
              <div className="container-title-switch">
                <Title data={data.userMain.userInfos.firstName} />
                <div className="container-switch">
                  <button
                    className="button"
                    onClick={() => handleProfileChange(12)}
                  >
                    Profil 12
                  </button>
                  <button
                    className="button"
                    onClick={() => handleProfileChange(18)}
                  >
                    Profil 18
                  </button>
                </div>
              </div>
              <div className="container-global">
                <div className="container-graph">
                  <Recharts data={data.userActivity.sessions} />
                  <div className="container-graph-second">
                    <DayLine data={data.userSession.sessions} />
                    <RadarCharts data={data.userPerformance.data} />
                    <CircleChart
                      data={data.userMain.todayScore || data.userMain.score}
                    />
                  </div>
                </div>
                <div className="container-count">
                  <Count
                    icon="/Images/fire.png"
                    nameCount="Calories"
                    data={data.userMain.keyData.calorieCount}
                    weight="kCal"
                  />
                  <Count
                    icon="/Images/protein.png"
                    nameCount="Proteines"
                    data={data.userMain.keyData.proteinCount}
                    weight="g"
                  />
                  <Count
                    icon="/Images/apple.png"
                    nameCount="Glucides"
                    data={data.userMain.keyData.carbohydrateCount}
                    weight="g"
                  />
                  <Count
                    icon="/Images/fat.png"
                    nameCount="Lipides"
                    data={data.userMain.keyData.lipidCount}
                    weight="g"
                  />
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
export default App;
