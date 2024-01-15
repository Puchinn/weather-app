import { useFetchDataMain } from "../../hooks/useFetchDataMain";
import { MainInfo } from "../../components/MainInfo";
import { CardList as CurrentCardsList } from "../../components/currentWeather/CardList";
import { CardList as TodayCardsList } from "../../components/todaysWeather/CardList";
import { Forecast } from "../../components/forecastInfo/Forecast";
import { Clock } from "../../components/Clock";

function CurrentWeather({ userLocation }) {
  const {
    isLoadingData,
    current,
    location,
    formatedArrayCards,
    arrayToTodayWeather,
    forecastDays,
    fullLocationAndDateString,
  } = useFetchDataMain({ userLocation: userLocation });

  /* TODO: add loading skeleton here... */
  if (isLoadingData) {
    return <h1>loading data...</h1>;
  }

  return (
    <div className="grid grid-cols-12 gap-x-10 pb-10">
      <div className="col-span-7">
        <h1 className=" text-light-text">{fullLocationAndDateString}</h1>
        <MainInfo current={current} location={location}></MainInfo>
        <CurrentCardsList formatedArray={formatedArrayCards}></CurrentCardsList>
        <p className="opacity-45 text-sm italic mt-3">
          Last update: {current.last_updated}hs
        </p>
      </div>
      <div className="col-span-5 space-y-5">
        <TodayCardsList arrayOfData={arrayToTodayWeather}></TodayCardsList>
        <Forecast data={forecastDays}></Forecast>
        <Clock initialTime={current.time}></Clock>
      </div>
    </div>
  );
}

export { CurrentWeather };
