import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { userSettingsActions } from "./redux/reducers/userSettings";
import { useDispatch, useSelector } from "react-redux";
import userSettingsLocalStorage from "./utils/userSettingsLocalStorage";

import { AppLayout } from "./pages/layout/AppLayout";
import { RegisterLocation } from "./pages/RegisterLocation";
import { Home } from "./pages/Home";
import { SearchResult } from "./pages/SearchResult";
import { Page as RecentlySearchedPage } from "./pages/recentlySearched/Page";
import { Page as SettingsPage } from "./pages/settingsPage/Page";

function App() {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(false);
  const state = useSelector((state) => state.userSettings);

  useEffect(() => {
    const userSettings = userSettingsLocalStorage.settings();
    if (userSettings) {
      dispatch(userSettingsActions.setSettings(userSettings));
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [dispatch]);

  useEffect(() => {
    if (state.location.city.length > 0) {
      userSettingsLocalStorage.setSettings(state);
      setIsLogin(true);
    }
  }, [state]);

  if (!isLogin) {
    return <RegisterLocation />;
  }

  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route
          path="/search"
          element={<RecentlySearchedPage></RecentlySearchedPage>}
        ></Route>
        <Route
          path="/search/:query"
          element={<SearchResult></SearchResult>}
        ></Route>
        <Route path="/settings" element={<SettingsPage></SettingsPage>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
