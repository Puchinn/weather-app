import { CurrentWeather } from "./layout/CurrentWeather";
import { useSelector } from "react-redux";

function Home() {
  const userLocation = useSelector((state) => state.userSettings);

  return <CurrentWeather userLocation={userLocation.location}></CurrentWeather>;
}

export { Home };
