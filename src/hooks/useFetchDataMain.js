import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentWeatherActions } from "../redux/reducers/currentWeather";
import { forecastWeatherActions } from "../redux/reducers/forecastWeather";
import { todayWeatherActions } from "../redux/reducers/todayWeather";
import weatherServices from "../services/weather.services";

function useFetchDataMain() {
  const [isLoadingData, setIsLoadingData] = useState(true);
  const dispatch = useDispatch();
  const { location } = useSelector((state) => state.userSettings);
  const completeLocation = `${location.city}, ${location.region}`;

  useEffect(() => {
    Promise.all([
      weatherServices.current(completeLocation),
      weatherServices.today(completeLocation),
      weatherServices.next3Days(completeLocation),
    ]).then(([current, today, nextDays]) => {
      dispatch(currentWeatherActions.setCurrent(current.current));
      dispatch(currentWeatherActions.setLocation(current.location));
      dispatch(todayWeatherActions.setState(today));
      dispatch(forecastWeatherActions.setForecast(nextDays));
      setIsLoadingData(false);
    });
  }, [completeLocation, dispatch]);

  return { isLoadingData };
}

export { useFetchDataMain };
