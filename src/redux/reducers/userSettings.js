import { createSlice } from "@reduxjs/toolkit";

const userSettingsSlice = createSlice({
  name: "userSettings",
  initialState: {
    location: {
      city: "Rio Segundo",
      region: "Cordoba",
      country: "Argentina",
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
  },
});

const userSettingsActions = userSettingsSlice.actions;
const userSettingsReducer = userSettingsSlice.reducer;

export { userSettingsActions, userSettingsReducer };
