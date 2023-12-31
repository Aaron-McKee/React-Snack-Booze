import axios from "axios";

const BASE_API_URL = "http://localhost:5000";


class SnackOrBoozeApi {

  static async getSnacks() {
    const result = await axios.get(`${BASE_API_URL}/snacks`);
    return result.data;
  }

  static async getDrinks() {
    const result = await axios.get(`${BASE_API_URL}/drinks`);
    return result.data;
  }

  static async postDrink(drinkData) {
    const result = await axios.post(`${BASE_API_URL}/drinks`, drinkData);
    return result.data;
  }

  static async postSnack(snackData) {
    const result = await axios.post(`${BASE_API_URL}/snacks`, snackData);
    return result.data;
  }

  static async deleteDrink(drinkId) {
    const result = await axios.delete(`${BASE_API_URL}/drinks/${drinkId}`);
    return result.data;
  }

  static async deleteSnack(snackId) {
    const result = await axios.delete(`${BASE_API_URL}/snacks/${snackId}`);
    return result.data;
  }

}

export default SnackOrBoozeApi;