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
    <div className="sm:grid sm:grid-cols-12 gap-x-5 xl:gap-x-10 pb-10 p-3">
      <div className="col-span-12 lg:col-span-7">
        <h1 className=" text-light-text">{locationAndDate}</h1>
        <SectionCurrentWeatherInfo currentData={currentData} />
        <SectionCurrentWeatherCards cards={cardsList} />
        <p className="opacity-45 text-sm italic mt-3">
          Last update: {lastUpdated}
        </p>
      </div>
      <div className="col-span-12 lg:col-span-5 space-y-4 lg:space-y-8">
        <SectionTodayWeather hoursArray={hoursArray} />
        <SectionForecast forecastData={forecastData} />
        <Clock initialTime={currentData.current.time} />
      </div>
    </div>
  );
}

export { HomeLayout };
