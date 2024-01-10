import { createSlice } from "@reduxjs/toolkit";

const forecastWeatherSlice = createSlice({
  name: "forecastWeather",
  initialState: {
    forecast: [],
  },
  reducers: {
    setForecast(state, action) {
      state = [...action.payload];
      return state;
    },
  },
});

const forecastWeatherActions = forecastWeatherSlice.actions;
const forecastWeatherReducer = forecastWeatherSlice.reducer;

export { forecastWeatherActions, forecastWeatherReducer };
