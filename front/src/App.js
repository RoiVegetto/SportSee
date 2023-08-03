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
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData(18);
  }, []);
  return (
    <div className="App">
      <Navbar logo="/Images/logoSportSee.png" />
      <div className="main">
        <Sidebar />
        <main>
          {isLoading ? (
            'Loading...'
          ) : (
            <div className="container-main">
              <Title data={data.userMain.userInfos.firstName} />
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
