import { useState, useEffect } from "react";
import weatherServices from "../services/weather.services";
import { cards } from "../adapters/cards.adapter";
import { timeLineWeather } from "../utils/timelineweather";
import { useSelector } from "react-redux";
import { timeFormat } from "../utils/timeFormat";
import Qty from "js-quantities";

function useFetchDataMain({ userLocation }) {
  const [isLoadingData, setIsLoadingData] = useState(true);
  const completeLocation = `${userLocation.city}, ${userLocation.region}`;
  const units = useSelector((state) => state.userSettings.units);
  const shouldFormatHour = useSelector(
    (state) => state.userSettings.general["12-hour-timeformat"]
  );

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
    ...{
      sunrise: shouldFormatHour
        ? astro.sunrise
        : new Date(`${current.time.split(" ")[0]} ${astro.sunrise}`)
            .toLocaleTimeString("en-US", {
              hour12: false,
            })
            .replace(":00", "") + " hs",
      sunset: shouldFormatHour
        ? astro.sunset
        : new Date(`${current.time.split(" ")[0]} ${astro.sunset}`)
            .toLocaleTimeString("en-US", {
              hour12: false,
            })
            .replace(":00", "") + " hs",
      moon_phase: astro.moon_phase,
    },
    chance_of_rain: hour[timeNow]?.chance_of_rain,
  }).map((card) => {
    if (card.unitId === "temperature") {
      const cardValue = card.value;
      const cardUnit = card.defaultUnit;
      const unitActive = `temp${units[card.unitId].active[0]}`;
      const convertedUnit = Qty(cardValue, cardUnit)
        .to(unitActive)
        .toPrec(0.2)
        .toString();
      return {
        ...card,
        value: convertedUnit.split(" ")[0],
        unit: convertedUnit.split(" ")[1].replace("temp", "°"),
      };
    }
    if (card.unitId) {
      const cardValue = card.value;
      const cardUnit = card.defaultUnit;
      const unitActive = units[card.unitId].active.toLowerCase();
      const convertedUnit = Qty(cardValue, cardUnit)
        .to(unitActive)
        .toPrec(0.2)
        .toString();

      return {
        ...card,
        value: convertedUnit.split(" ")[0],
        unit: convertedUnit.split(" ")[1],
      };
    }
    return card;
  });

  const fullLocationAndDateString = `${completeLocation} - ${
    userLocation.country
  }. ${new Date(current.time).toDateString()}`;

  const lastUpdate = (() => {
    if (!shouldFormatHour) {
      return `${current.last_updated} hs`;
    }
    const formatSplit = timeFormat(new Date(current.last_updated)).split(":");
    const dateAndFormat = `${current.time.split(" ")[0]} ${formatSplit[0]}:${
      formatSplit[1]
    } ${formatSplit[2].split(" ")[1]}`;

    return dateAndFormat;
  })();

  return {
    isLoadingData,
    current,
    location,
    arrayToTodayWeather,
    formatedArrayCards,
    forecastDays,
    fullLocationAndDateString,
    lastUpdate,
  };
}

export { useFetchDataMain };
