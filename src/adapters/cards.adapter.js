function cards(current) {
  return [
    {
      title: "UV Index",
      icon: "☀️",
      value: current.uv_index,
    },
    {
      title: "Wind",
      icon: "🌀",
      value: current.wind_kph,
    },
    {
      title: "Humidity",
      icon: "🚿",
      value: current.humidity,
    },
    {
      title: "Visibility",
      icon: "👁️",
      value: current.vis_km,
    },
    {
      title: "Feels like",
      icon: "💉",
      value: current.feelslike_c,
    },
    {
      title: "Pressure",
      icon: "🕑",
      value: current.pressure_mb,
    },
    {
      title: "Chance of rain",
      icon: "💧",
      value: current.chance_of_rain,
    },
    {
      title: "Sunset",
      icon: "🌇",
      value: current.sunset,
    },
  ];
}

export { cards };
