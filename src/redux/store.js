import { configureStore } from "@reduxjs/toolkit";
import { userSettingsReducer } from "./reducers/userSettings";

export default configureStore({
  reducer: {
    userSettings: userSettingsReducer,
  },
});
