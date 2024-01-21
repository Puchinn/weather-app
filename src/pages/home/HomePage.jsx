import { useSelector } from "react-redux";
import { HomeLayout } from "./HomeLayout";

function HomePage() {
  const userLocation = useSelector((state) => state.userSettings.location);

  return <HomeLayout objectLocation={userLocation} />;
}

export { HomePage };
