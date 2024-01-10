import { createSlice } from "@reduxjs/toolkit";

const currentWeatherSlice = createSlice({
  name: "currentWeather",
  initialState: {
    location: {},
    current: {},
  },
  reducers: {
    setCurrent(state, action) {
      state = {
        ...state,
        current: action.payload,
      };
      return state;
    },
    setLocation(state, action) {
      state = {
        ...state,
        location: action.payload,
      };
      return state;
    },
  },
});

const currentWeatherActions = currentWeatherSlice.actions;
const currentWeatherReducer = currentWeatherSlice.reducer;

export { currentWeatherActions, currentWeatherReducer };
