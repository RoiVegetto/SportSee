/**
 * @param {Object} activity data activity from source Mock or API
 * @returns modeled data
 */
export const activitiesModel = (data) => {
  return {
    userId: data.userId,
    sessions: data.sessions.map((session) => ({
      ...session,
      dayOfMonth: session.day.substring(8), // Extraction des deux derniers caractères
    })),
  };
};

export const performancesModel = (data) => {
  const kindMapping = {};

  Object.entries(data.kind).forEach(([key, value]) => {
    kindMapping[key] = value;
  });

  const mappedData = data.data.map((item, index, array) => ({
    value: item.value,
    kind: kindMapping[array[(index + 5) % array.length].kind.toString()],
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
    todayScore: data.todayScore || data.score,
    keyData: {
      calorieCount: data.keyData.calorieCount,
      proteinCount: data.keyData.proteinCount,
      carbohydrateCount: data.keyData.carbohydrateCount,
      lipidCount: data.keyData.lipidCount,
    },
  };
};
