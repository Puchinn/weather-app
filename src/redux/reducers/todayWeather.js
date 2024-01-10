import { createSlice } from "@reduxjs/toolkit";

const todayWeatherSlice = createSlice({
  name: "todayWeather",
  initialState: {},
  reducers: {
    setState(state, action) {
      state = { ...action.payload };
      return state;
    },
  },
});

const todayWeatherActions = todayWeatherSlice.actions;
const todayWeatherReducer = todayWeatherSlice.reducer;

export { todayWeatherActions, todayWeatherReducer };
