import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSettingsActions } from "../redux/reducers/userSettings";
import userSettingsLocalStorage from "../utils/userSettingsLocalStorage";

function useAppStart() {
  const dispatch = useDispatch();
  const [hasSettingSaved, setHasSettingSaved] = useState(false);
  const state = useSelector((state) => state.userSettings);

  useEffect(() => {
    const userSettings = userSettingsLocalStorage.settings();
    if (userSettings) {
      dispatch(userSettingsActions.setSettings(userSettings));
      setHasSettingSaved(true);
    } else {
      setHasSettingSaved(false);
    }
  }, [dispatch]);

  useEffect(() => {
    if (state.location.city.length > 0) {
      userSettingsLocalStorage.setSettings(state);
      setHasSettingSaved(true);
    }
  }, [state]);

  return { hasSettingSaved };
}

export { useAppStart };
