import weatherAdapters from "../adapters/index";
import apiServices from "./api.services";

class WeatherServices {
  async current(userLocation) {
    const data = await apiServices.currentData(userLocation);

    const currentData = weatherAdapters.current(data);
    return currentData;
  }

  async today(userLocation) {
    const data = await apiServices.todayData(userLocation);

    const todayWeather = weatherAdapters.forecastday(
      data.forecast.forecastday[0]
    );

    return todayWeather;
  }

  async next3Days(userLocation) {
    const data = await apiServices.next3DaysData(userLocation);

    const nextDays = data.forecast.forecastday.map((data) =>
      weatherAdapters.forecastday(data)
    );
    return nextDays;
  }

  async searchLocation(location) {
    const data = await apiServices.searchLocation(location);
    const formmatedData = data.map((result) => weatherAdapters.search(result));

    return formmatedData;
  }
}

export default new WeatherServices();
