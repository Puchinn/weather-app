function forecastday(forecastday) {
  return {
    dayInfo: {
      date: forecastday.date,
      maxtemp_c: forecastday.day.maxtemp_c,
      mintemp_c: forecastday.day.mintemp_c,
      chance_of_rain: forecastday.day.daily_chance_of_rain,
      condition: forecastday.day.condition.text,
      uv_index: forecastday.day.uv,
    },
    hour: forecastday.hour.map((data) => hour(data)),
    astro: astro(forecastday.astro),
  };
}
export { forecastday };

function astro(astroProperty) {
  return {
    sunrise: astroProperty.sunrise,
    sunset: astroProperty.sunset,
  };
}

function hour(hourObject) {
  return {
    time: hourObject.time.substring(11),
    temp_c: hourObject.temp_c,
    is_day: hourObject.is_day,
    condition: {
      text: hourObject.condition.text,
      code: hourObject.condition.code,
    },
    chance_of_rain: hourObject.chance_of_rain,
    uv_index: hourObject.uv,
  };
}
