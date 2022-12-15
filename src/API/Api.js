import { USER_MAIN_DATA } from "./mocks/data";
import { USER_ACTIVITY } from "./mocks/data";
import { USER_PERFORMANCE } from "./mocks/data";
import { USER_AVERAGE_SESSIONS } from "./mocks/data";

export const getMainData = async () => {
  return USER_MAIN_DATA
}

/**
 * @description Retrieve the main user info (first name, last name, today score)
 * @param {number} id 
 */
export const getUserById = id => USER_MAIN_DATA
    .filter(user => user.id === id)
    .shift()


/**
 * @param {number} id 
 */
export const getUserActivityById = id => USER_ACTIVITY
    .filter(userActivity => userActivity.userId === id)
    .shift()


/**
 * @param {number} id 
 */
export const getUserAverageSession = id => USER_AVERAGE_SESSIONS
    .filter(userActivity => userActivity.userId === id)
    .shift()


/**
 * @param {number} id 
 */
export const getUserPerformance = id => USER_PERFORMANCE
    .filter(userPerformance => userPerformance.userId === id)
    .shift()