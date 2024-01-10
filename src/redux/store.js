import { configureStore } from "@reduxjs/toolkit";

import { userSettingsReducer } from "./reducers/userSettings";
import { currentWeatherReducer } from "./reducers/currentWeather";
import { todayWeatherReducer } from "./reducers/todayWeather";
import { forecastWeatherReducer } from "./reducers/forecastWeather";

export default configureStore({
  reducer: {
    userSettings: userSettingsReducer,
    currentWeather: currentWeatherReducer,
    todayWeather: todayWeatherReducer,
    forecastWeather: forecastWeatherReducer,
  },
});
