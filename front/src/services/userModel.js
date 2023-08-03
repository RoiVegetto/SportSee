/**
 * @param {Object} activity data activity from source Mock or API
 * @returns modeled data
 */
export const activitiesModel = (data) => {
  return {
    userId: data.userId,
    sessions: data.sessions.map((session) => ({
      ...session,
      dayOfMonth: session.day.substring(8),
    })),
  };
};

const translationDictionary = {
  cardio: 'Cardio',
  energy: 'Energie',
  endurance: 'Endurance',
  strength: 'Force',
  speed: 'Vitesse',
  intensity: 'Intensité',
};

export const performancesModel = (data) => {
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
    userId: data.userId,
    kind: { ...kindMapping },
    data: mappedData,
  };
};

export const mainModel = (data) => {
  return {
    userId: data.id,
    userInfos: {
      firstName: data.userInfos.firstName,
      lastName: data.userInfos.lastName,
      age: data.userInfos.age,
    },
    todayScore: data.todayScore,
    score: data.score,
    keyData: {
      calorieCount: data.keyData.calorieCount,
      proteinCount: data.keyData.proteinCount,
      carbohydrateCount: data.keyData.carbohydrateCount,
      lipidCount: data.keyData.lipidCount,
    },
  };
};



export const sessionModel = (data) => {
  return {
    userId: data.userId,
    sessions: data.sessions.map((session) => ({
      ...session,
    })),
  };
};
