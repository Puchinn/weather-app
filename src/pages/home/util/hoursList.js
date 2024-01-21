function hoursList(currentHour = 0, forecastData = {}) {
  const parsedCurrentHour = Number(currentHour);
  const hoursArray = [];
  const hoursToShow = 4;

  const hoursLimitInDay = 23;
  const totalHoursInDay = 24;

  for (let i = 0; i < hoursToShow; i++) {
    const currentHourPlus2 = parsedCurrentHour + i * 2;
    if (currentHourPlus2 > hoursLimitInDay) {
      hoursArray.push(forecastData[1].hour[currentHourPlus2 - totalHoursInDay]);
      continue;
    }
    hoursArray.push(forecastData[0].hour[currentHourPlus2]);
  }

  return hoursArray;
}

export { hoursList };
