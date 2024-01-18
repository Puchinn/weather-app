function timeFormat(date) {
  const dateHours = date.getHours();

  const hourFormat = dateHours === 12 ? "M" : dateHours > 12 ? "PM" : "AM";

  const hours = date.getHours() % 12;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const correctHour = hours === 0 ? 12 : hours;

  const formatedHour = `
  ${format(correctHour)}:${format(minutes)}:${format(seconds)} ${hourFormat}
  `;

  return formatedHour;
}

export { timeFormat };

function format(num) {
  return num < 10 ? `0${num}` : num;
}
