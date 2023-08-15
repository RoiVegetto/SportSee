import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../App.css';
import Error from '../Error/Error';
import Title from '../Title/Title';
import Recharts from '../Diagram/Bar/Bar';
import DayLine from '../Diagram/Line/Line';
import RadarCharts from '../Diagram/Radar/Radar';
import CircleChart from '../Diagram/Circle/Circle';
import Count from '../Count/Count';
import {
  getDailyActivity,
  getDailyPerformance,
  getDailyMain,
  getDailySession,
} from '../../services/userApiService';
import NotFoundProfil from '../NotFoundProfil/NotFoundProfil';

function MainContent() {
  const { userId } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  /**
   * Get data of user
   * @param {string} userId - the id of user
   */
  useEffect(() => {
    const getData = async () => {
      try {
        const userActivity = await getDailyActivity(userId);
        const userPerformance = await getDailyPerformance(userId);
        const userMain = await getDailyMain(userId);
        const userSession = await getDailySession(userId);
        setData({ userActivity, userPerformance, userMain, userSession });
        setLoading(false);
      } catch (error) {
        console.error('An error occurred:', error.message);
        setError(true);
      }
    };

    setLoading(true);
    getData();
  }, [userId]);

  return (
    <main>
      {isError ? (
        <NotFoundProfil logo="/Images/logoSportSee.png" />
      ) : isLoading ? (
        <Error logo="/Images/logoSportSee.png" />
      ) : (
        <div className="container-main">
          <div className="container-title-switch">
            <Title data={data.userMain.userInfos.firstName} />
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
  );
}
export default MainContent;
