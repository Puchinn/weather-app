function current(data) {
  return {
    location: {
      city: data.location.name,
      region: data.location.region,
      country: data.location.country,
    },
    current: {
      time: data.location.localtime,
      last_updated: data.current.last_updated,
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
