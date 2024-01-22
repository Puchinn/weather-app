class HourFormat {
  formatTo12Hours(hour) {
    const formatedHour = new Date(`2024-01-01 ${hour}`)
      .toLocaleTimeString("en-US", {
        hour12: true,
      })
      .replace(":00", "");

    return formatedHour;
  }

  formatTo24Hours(hour) {
    const formatedHour = new Date(`2024-01-01 ${hour}`)
      .toLocaleTimeString("en-US", {
        hour12: false,
      })
      .replace(":00", "")
      .concat(" hs");

    return formatedHour;
  }
}

export default new HourFormat();
