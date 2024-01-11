import { base_url, api_key } from "../config/config";

class ApiServices {
  async currentData(location) {
    return await fetch(
      `${base_url}/current.json?key=${api_key}&q=${location}&aqi=no`
    ).then((res) => res.json());
  }

  async todayData(location) {
    return await fetch(
      `${base_url}/forecast.json?key=${api_key}&q=${location}&days=1`
    ).then((res) => res.json());
  }

  async next3DaysData(location) {
    return await fetch(
      `${base_url}/forecast.json?key=${api_key}&q=${location}&days=3`
    ).then((res) => res.json());
  }

  async searchLocation(location) {
    return await fetch(
      `${base_url}/search.json?key=${api_key}&q=${location}`
    ).then((res) => res.json());
  }
}

export default new ApiServices();
