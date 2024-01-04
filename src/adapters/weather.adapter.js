function weather(jsonData) {
  return {
    temp_c: jsonData.current.temp_c,
    temp_f: jsonData.current.temp_f,
    condition: jsonData.current.condition.text,
    wind_mph: jsonData.current.wind_mph,
    wind_kph: jsonData.current.wind_kph,
    wind_dir: jsonData.current.wind_dir,
    humidity: jsonData.current.humidity,
    uv_index: jsonData.current.uv,
    feels_like_c: jsonData.current.feelslike_c,
    feels_like_f: jsonData.current.feelslike_f,
    visibility_km: jsonData.current.vis_km,
    visibility_miles: jsonData.current.vis_miles,
    pressure_mb: jsonData.current.pressure_mb,
    pressure_in: jsonData.current.pressure_in,
  };
}

export { weather };
