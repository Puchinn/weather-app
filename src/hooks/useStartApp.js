import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userSettingsActions } from "../redux/reducers/userSettings";
import userSettingsLocalStorage from "../utils/userSettingsLocalStorage";

function useStartApp() {
  const dispatch = useDispatch();
  const [hasSavedConfig, setHasSavedConfig] = useState(false);
  const [loadingData, setLoadingData] = useState(true);
  const state = useSelector((state) => state.userSettings);

  useEffect(() => {
    if (state.location.city.length > 0) {
      setHasSavedConfig(true);
      setLoadingData(false);
      return;
    }
    const userSettings = userSettingsLocalStorage.settings();
    if (!userSettings.location) {
      setHasSavedConfig(false);
      setLoadingData(false);
    } else {
      dispatch(userSettingsActions.setSettings(userSettings));
      setHasSavedConfig(true);
      setLoadingData(false);
      console.log("user has settings");
    }
  }, [dispatch, state]);

  return { hasSavedConfig, loadingData };
}

export { useStartApp };
