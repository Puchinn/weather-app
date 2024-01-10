import { useSelector } from "react-redux";
import { cards } from "../adapters/cards.adapter";
import { timeLineWeather } from "../utils/timelineweather";

function useDataMain() {
  const { location, current } = useSelector((state) => state.currentWeather);
  const { astro, hour = [] } = useSelector((state) => state.todayWeather);
  const forecastDays = useSelector((state) => state.forecastWeather);
  const timeNow = current.time?.substring(11).split(":")[0];

  const arrayToTodayWeather = timeLineWeather(timeNow, forecastDays);

  const formatedArrayCards = cards({
    ...current,
    sunset: astro?.sunset,
    chance_of_rain: hour[timeNow]?.chance_of_rain,
  });

  return {
    location,
    current,
    formatedArrayCards,
    arrayToTodayWeather,
    forecastDays,
  };
}

export { useDataMain };
