import { MainInfo } from "../components/MainInfo";
import { CardList as CurrentCardsList } from "../components/currentWeather/CardList";
import { CardList as TodayCardsList } from "../components/todaysWeather/CardList";
import { Forecast } from "../components/forecastInfo/Forecast";
import { Clock } from "../components/Clock";

function Home() {
  return (
    <div className="grid grid-cols-12 gap-x-10 pb-10">
      <div className="col-span-7">
        <MainInfo></MainInfo>
        <CurrentCardsList></CurrentCardsList>
      </div>
      <div className="col-span-5 space-y-5">
        <TodayCardsList></TodayCardsList>
        <Forecast></Forecast>
        <Clock></Clock>
      </div>
    </div>
  );
}

export { Home };
