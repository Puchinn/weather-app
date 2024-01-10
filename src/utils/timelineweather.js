function timeLineWeather(hour, forecast) {
  const parsedHour = Number(hour);
  const hoursArray = [];

  for (let i = 0; i < 4; i++) {
    const actualHourPlus2hours = i * 2 + parsedHour;
    if (actualHourPlus2hours > 23) {
      hoursArray.push(forecast[1]?.hour[actualHourPlus2hours - 24]);
      continue;
    }
    hoursArray.push(forecast[0]?.hour[actualHourPlus2hours]);
  }

  return hoursArray;
}

export { timeLineWeather };
