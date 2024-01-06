function current(data) {
  return {
    location: location(data.location),
    current: {
      time: data.location.localtime,
      temp_c: data.current.temp_c,
      is_day: data.current.is_day,
      wind_kph: data.current.wind_kph,
      pressure_mb: data.current.pressure_mb,
      humidity: data.current.humidity,
      feelslike_c: data.current.feelslike_c,
      vis_km: data.current.vis_km,
      uv_index: data.current.uv,
      condition: {
        text: data.current.condition.text,
        code: data.current.condition.code,
      },
    },
  };
}

export { current };

function location(location) {
  return {
    city: location.name,
    region: location.region,
    country: location.country,
  };
}
