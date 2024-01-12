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
  },
  reducers: {
    setLocation(state, action) {
      state = {
        ...state,
        location: action.payload,
      };
      return state;
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
      state = action.payload;
      return state;
    },
  },
});

const userSettingsActions = userSettingsSlice.actions;
const userSettingsReducer = userSettingsSlice.reducer;

export { userSettingsActions, userSettingsReducer };
