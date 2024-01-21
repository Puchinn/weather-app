import { useState, useEffect } from "react";
import { currentDataToCardsList } from "../util/currentDataToCardsList";
import { useSelector } from "react-redux";
import { mapUnitsCards } from "../util/mapUnitsCards";
import { hoursList } from "../util/hoursList";
import locationUtil from "../../../utils/location";
import weatherServices from "../../../services/weather.services";
import hourFormat from "../../../utils/hourFormat";

function useWeatherData({ objectLocation = {} }) {
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [weatherData, setWeatherData] = useState({});
  const locationString = locationUtil.objectToString(objectLocation);
  const userSettings = useSelector((state) => state.userSettings);

  useEffect(() => {
    Promise.all([
      weatherServices.current(locationString),
      weatherServices.today(locationString),
      weatherServices.next3Days(locationString),
    ]).then(([currentData, todayData, forecastData]) => {
      setWeatherData({
        currentData,
        todayData,
        forecastData,
      });
      setIsLoadingData(false);
    });
  }, [locationString]);

  if (isLoadingData) return { isLoadingData };

  const currentHour = weatherData.currentData.current.time
    .substring(11)
    .split(":")[0];

  const cardsList = currentDataToCardsList({
    ...weatherData.currentData.current,
    ...weatherData.todayData.astro,
    chance_of_rain: weatherData.todayData.hour[currentHour].chance_of_rain,
  }).map((card) =>
    mapUnitsCards(card, { ...userSettings.units, ...userSettings.general })
  );

  const hoursArray = hoursList(currentHour, weatherData.forecastData);

  const locationAndDate = `${locationString}. ${new Date(
    weatherData.currentData.current.time
  ).toDateString()}`;

  const lastUpdated = (() => {
    const date = weatherData.currentData.current.last_updated.split(" ");
    const hour = userSettings.general["12-hour-timeformat"]
      ? hourFormat.formatTo12Hours(date[1])
      : `${date[1]} hs`;

    return `${date[0]} ${hour}`;
  })();

  return {
    isLoadingData,
    forecastData: weatherData.forecastData,
    currentData: weatherData.currentData,
    cardsList,
    hoursArray,
    locationAndDate,
    lastUpdated,
  };
}

export { useWeatherData };
