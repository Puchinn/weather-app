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
}

export default new WeatherServices();
