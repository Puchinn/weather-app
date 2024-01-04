import weatherAdapters from "../adapters/index";
import { base_url } from "../config/config";

class WeatherServices {
  async current(userLocation) {
    const data = await fetch(`${base_url}&q=${userLocation}&days=3`).then(
      (res) => res.json()
    );
    const location = weatherAdapters.location(data);
    const weather = weatherAdapters.weather(data);

    return {
      city: location.city,
      condition: weather.condition,
      temp: weather.temp_c,
    };
  }
}

export default new WeatherServices();
