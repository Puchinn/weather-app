import { createSlice } from "@reduxjs/toolkit";

const userSettingsSlice = createSlice({
  name: "userSettings",
  initialState: {
    location: {
      city: "",
      region: "",
      country: "",
    },
    units: {},
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
  },
});

const userSettingsActions = userSettingsSlice.actions;
const userSettingsReducer = userSettingsSlice.reducer;

export { userSettingsActions, userSettingsReducer };
