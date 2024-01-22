import { Routes, Route } from "react-router-dom";
import { useAppStart } from "./hooks/useAppStart";

import { AppLayout } from "./components/layout/AppLayout";
import { RegisterLocation } from "./pages/registerLocation/RegisterLocation";
import { HomePage } from "./pages/home/HomePage";
import { SearchPage } from "./pages/search/SearchPage";
import { SearchedLocation } from "./pages/searchedLocation/SearchResult";
import { SettingsPage } from "./pages/settings/SettingsPage";

function App() {
  const { hasSettingSaved } = useAppStart();

  if (!hasSettingSaved) {
    return <RegisterLocation />;
  }

  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/search" element={<SearchPage />}></Route>
        <Route path="/search/:query" element={<SearchedLocation />}></Route>
        <Route path="/settings" element={<SettingsPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
