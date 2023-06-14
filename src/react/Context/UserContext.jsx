import React, { createContext, useEffect, useState } from "react";
import {
  getUserActivityById,
  getUserAverageSession,
  getUserById,
  getUserPerformance,
} from "../../API/Api";

export const UserContext = createContext(null);
export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const userId = 18;
  const isMockedMod = true;

  class UserData {
    constructor(user, activity, sessions, performance) {
      this.user = user;
      this.activity = activity;
      this.sessions = sessions;
      this.performance = performance;
    }
  }

  useEffect(() => {
    if (isMockedMod) {
      /**
       * Load the data of a user base on userId
       * @param {string} userId - The id of the user whose the data must be retrieved from
       * @returns {object} of the loadedData
       */
      const loadData = async () => {
        await setUserData(
          new UserData(
            getUserById(userId),
            getUserActivityById(userId),
            getUserAverageSession(userId),
            getUserPerformance(userId)
          )
        );
        setLoading(false);
      };
      loadData();
    } else {
      /**
       * Get all user datas from multiple endpoints
       * @param {string} userId - The id of the user whose the data must be retrieved from
       * @returns {Promise<void>} A promise that resolves when all the data has been retrieved and consumed.
       * @returns {object} of the loadedData
       */
      const fetchData = async () => {
        await Promise.all([
          fetch(`http://localhost:3000/user/${userId}`),
          fetch(`http://localhost:3000/user/${userId}/activity`),
          fetch(`http://localhost:3000/user/${userId}/average-sessions`),
          fetch(`http://localhost:3000/user/${userId}/performance`),
        ])
          .then(async (response) => {
            return await Promise.all([
              response[0].json(),
              response[1].json(),
              response[2].json(),
              response[3].json(),
            ]);
          })
          .then((data) => {
            const [
              userData,
              userActivityData,
              userSessionsData,
              userPerformanceData,
            ] = data;
            setUserData(
              new UserData(
                userData.data,
                userActivityData.data,
                userSessionsData.data,
                userPerformanceData.data
              )
            );
          })
          .catch((error) => {
            setHasError(true);
          })
          .finally(() => {
            setLoading(false);
          });
      };
      fetchData();
    }
  }, []);

  return (
    <UserContext.Provider value={{ userData, loading, hasError }}>
      {children}
    </UserContext.Provider>
  );
};
