import { SectionCurrentWeatherInfo } from "./components/section-current-weather/SectionCurrentWeatherInfo";
import { SectionCurrentWeatherCards } from "./components/section-current-weather/SectionCurrentWeatherCards";
import { SectionTodayWeather } from "./components/section-today-weather/SectionTodayWeather";
import { SectionForecast } from "./components/section-forecast/SectionForecast";
import { Clock } from "../../components/clock/Clock";
import { useWeatherData } from "./hook/useWeatherData";

function HomeLayout({ objectLocation }) {
  const {
    isLoadingData,
    currentData,
    cardsList,
    hoursArray,
    forecastData,
    locationAndDate,
    lastUpdated,
  } = useWeatherData({
    objectLocation: objectLocation,
  });

  if (isLoadingData) return <h1>loading...</h1>;

  return (
    <div className="grid grid-cols-12 gap-x-10 pb-10">
      <div className="col-span-7">
        <h1 className=" text-light-text">{locationAndDate}</h1>
        <SectionCurrentWeatherInfo currentData={currentData} />
        <SectionCurrentWeatherCards cards={cardsList} />
        <p className="opacity-45 text-sm italic mt-3">
          Last update: {lastUpdated}
        </p>
      </div>
      <div className="col-span-5 space-y-5">
        <SectionTodayWeather hoursArray={hoursArray} />
        <SectionForecast forecastData={forecastData} />
        <Clock initialTime={currentData.current.time} />
      </div>
    </div>
  );
}

export { HomeLayout };
