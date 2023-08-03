import { activity } from '../mocks/activity';
import { mainData } from '../mocks/maindata';
import { performance } from '../mocks/performance';
import { session } from '../mocks/session';
import {
  activitiesModel,
  mainModel,
  performancesModel,
  sessionModel,
} from './userModel';

/**
 * Get daily activity of user
 * @param {*} userId - the id of user
 * @returns
 */
export const getDailyActivity = (userId) => {
  const data = activity.find((elem) => elem.userId === parseInt(userId));
  return activitiesModel(data);
};

export const getDailyPerformance = (userId) => {
  const data = performance.find((elem) => elem.userId === parseInt(userId));
  return performancesModel(data);
};

export const getDailyMain = (userId) => {
  const data = mainData.find((elem) => elem.id === parseInt(userId));
  return mainModel(data);
};

export const getDailySession = (userId) => {
  const data = session.find((elem) => elem.userId === parseInt(userId));
  return sessionModel(data);
};
