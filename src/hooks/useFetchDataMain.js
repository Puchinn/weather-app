import { useState, useEffect } from "react";
import weatherServices from "../services/weather.services";
import { cards } from "../adapters/cards.adapter";
import { timeLineWeather } from "../utils/timelineweather";

function useFetchDataMain({ userLocation }) {
  const [isLoadingData, setIsLoadingData] = useState(true);
  const completeLocation = `${userLocation.city}, ${userLocation.region}`;
  const [data, setData] = useState({
    current: {},
    today: {},
    forecast: {},
  });

  useEffect(() => {
    Promise.all([
      weatherServices.current(completeLocation),
      weatherServices.today(completeLocation),
      weatherServices.next3Days(completeLocation),
    ]).then(([current, today, nextDays]) => {
      setData({
        current,
        today,
        forecast: nextDays,
      });
      setIsLoadingData(false);
    });
  }, [completeLocation]);

  if (isLoadingData) return { isLoadingData };

  const { current, location } = data.current;
  const { astro, hour } = data.today;
  const forecastDays = data.forecast;
  const timeNow = current?.time?.substring(11).split(":")[0];

  const arrayToTodayWeather = timeLineWeather(timeNow, forecastDays);
  const formatedArrayCards = cards({
    ...current,
    sunset: astro?.sunset,
    chance_of_rain: hour[timeNow]?.chance_of_rain,
  });

  return {
    isLoadingData,
    current,
    location,
    arrayToTodayWeather,
    formatedArrayCards,
    forecastDays,
  };
}

export { useFetchDataMain };
