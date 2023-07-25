import { activitiesModel } from "./userModel";

const baseUrl = "http://localhost:3000";


/**
* Fetch data from api based on {@link url}
*
* @param {string} url  
* @returns fetched data or throws an Error
*/
export const fetchdata = async (url) => {
    const response = await fetch(url);
    if (response.ok === false) {
        throw new Error("Failed to fetch");
    }

    const { data } = await response.json();
    return data;
}

/**
 * Get daily activity of user
 * @param {string} userId - the id of user
 * @returns 
 */
export const getDailyActivity = async (userId) => {
    const apiUrl = `${baseUrl}/user/${userId}/activity`;
    const { data } = await fetchdata(apiUrl);
    return activitiesModel(data);
}