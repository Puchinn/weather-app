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
      unitId: "wind",
      unit: "",
      defaultUnit: "km/h",
    },
    {
      title: "Humidity",
      icon: "🚿",
      value: current.humidity,
      unit: "%",
    },
    {
      title: "Visibility",
      icon: "👁️",
      value: current.vis_km,
      unitId: "distance",
      unit: "",
      defaultUnit: "km",
    },
    {
      title: "Feels like",
      icon: "💉",
      value: current.feelslike_c,
      unitId: "temperature",
      unit: "",
      defaultUnit: "tempC",
    },
    {
      title: "Pressure",
      icon: "🕑",
      value: current.pressure_mb,
      unitId: "pressure",
      unit: "",
      defaultUnit: "mbar",
    },
    {
      title: "Chance of rain",
      icon: "💧",
      value: current.chance_of_rain,
      unit: "%",
    },
    {
      title: "Sunset",
      icon: "🌇",
      value: current.sunset,
    },
  ];
}

export { cards };
