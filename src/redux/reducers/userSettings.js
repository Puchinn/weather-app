import { createSlice } from "@reduxjs/toolkit";

const userSettingsSlice = createSlice({
  name: "userSettings",
  initialState: {
    location: {
      city: "",
      region: "",
      country: "",
    },
    units: {
      temperature: {
        values: ["Celcius", "Fahrenheit", "Kelvin"],
        active: "Celcius",
      },
      wind: {
        values: ["km/h", "m/s", "knots"],
        active: "km/h",
      },
      distance: {
        values: ["Kilometers", "Miles"],
        active: "Kilometers",
      },
      pressure: {
        values: ["Pa", "hPa", "bar", "mb"],
        active: "mb",
      },
    },
    general: {},
    recentlySearched: [],
    favorites: [],
  },
  reducers: {
    setLocation(state, action) {
      return {
        ...state,
        location: action.payload,
      };
    },
    setUnits(state, action) {
      state = {
        ...state,
        units: action.payload,
      };
    },
    setGeneral(state, action) {
      state = {
        ...state,
        general: action.payload,
      };
    },
    setSettings(state, action) {
      state = {
        ...state,
        ...action.payload,
      };
      return state;
    },
    addToRecentlySearched(state, action) {
      const alredyHaveTheLocation = state.recentlySearched.includes(
        action.payload
      );
      if (alredyHaveTheLocation) {
        return state;
      }
      if (state.recentlySearched.length + 1 > 5) {
        const newState = [action.payload, ...state.recentlySearched];
        newState.splice(5, 1);
        return {
          ...state,
          recentlySearched: newState,
        };
      }
      const newState = [...state.recentlySearched];
      newState.unshift(action.payload);
      return {
        ...state,
        recentlySearched: newState,
      };
    },

    setActiveUnit(state, action) {
      const { unit, newActive } = action.payload;
      const findedUnit = Object.assign(state.units[unit]);
      findedUnit.active = newActive;
      state.units[unit] = findedUnit;
    },
  },
});

const userSettingsActions = userSettingsSlice.actions;
const userSettingsReducer = userSettingsSlice.reducer;

export { userSettingsActions, userSettingsReducer };
