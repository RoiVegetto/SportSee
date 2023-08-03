const baseUrl = 'http://localhost:3000';

/**
 * Fetch data from api based on {@link url}
 *
 * @param {string} url
 * @returns fetched data or throws an Error
 */
export const fetchdata = async (url) => {
  const response = await fetch(url);
  if (response.ok === false) {
    throw new Error('Failed to fetch');
  }

  const { data } = await response.json();
  return data;
};

/**
 * Get daily activity of user
 * @param {string} userId - the id of user
 * @returns
 */
export const getDailyActivity = async (userId) => {
  const apiUrl = `${baseUrl}/user/${userId}/activity`;
  const data = await fetchdata(apiUrl);

  return {
    userId: data.userId,
    sessions: data.sessions.map((session) => ({
      ...session,
      dayOfMonth: session.day.substring(8),
    })),
  };
};

export const getDailyPerformance = async (userId) => {
  const apiUrl = `${baseUrl}/user/${userId}/performance`;
  const data = await fetchdata(apiUrl);

  const translationDictionary = {
    cardio: 'Cardio',
    energy: 'Energie',
    endurance: 'Endurance',
    strength: 'Force',
    speed: 'Vitesse',
    intensity: 'Intensité',
  };

  const kindMapping = {};

  Object.entries(data.kind).forEach(([key, value]) => {
    kindMapping[key] = translationDictionary[value] || value;
  });

  const reversedData = data.data.slice().reverse();

  const mappedData = reversedData.map((item, index, array) => ({
    value: array[index % array.length].value,
    kind: kindMapping[array[index % array.length].kind.toString()],
  }));

  return {
    ...data,
    kind: { ...kindMapping },
    data: mappedData,
  };
};

export const getDailyMain = async (userId) => {
  const apiUrl = `${baseUrl}/user/${userId}`;
  const data = await fetchdata(apiUrl);
  return data;
};

export const getDailySession = async (userId) => {
  const apiUrl = `${baseUrl}/user/${userId}/average-sessions`;
  const data = await fetchdata(apiUrl);
  return data;
};
