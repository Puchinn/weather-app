import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { userSettingsActions } from "./redux/reducers/userSettings";
import { useDispatch, useSelector } from "react-redux";
import userSettingsLocalStorage from "./utils/userSettingsLocalStorage";

import { AppLayout } from "./pages/layout/AppLayout";
import { RegisterLocation } from "./pages/RegisterLocation";
import { Home } from "./pages/Home";

function App() {
  const dispatch = useDispatch();

  const [isLogin, setIsLogin] = useState(false);
  const state = useSelector((state) => state.userSettings);

  useEffect(() => {
    if (state.location.city.length > 0) {
      return setIsLogin(true);
    }
    const userSettings = userSettingsLocalStorage.settings();
    if (!userSettings.location) {
      return setIsLogin(false);
    } else {
      dispatch(userSettingsActions.setSettings(userSettings));
      setIsLogin(true);
    }
  }, [dispatch, state]);

  if (!isLogin) {
    return <RegisterLocation />;
  }

  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="/search" element={<h1>here the searches c:</h1>}></Route>
        <Route
          path="/settings"
          element={<h1>here go the configs c:</h1>}
        ></Route>
      </Route>
    </Routes>
  );
}

export default App;
