function Card() {
  /*
  TODO: add props, make component dinamic
  */
  return (
    <li className="text-center space-y-2 rounded-md p-4 hover:bg-primary-dark-hover">
      <p>06:00 AM</p>
      <p className="text-3xl ">🌦️</p>
      <p className="text-xl font-medium">25 °C</p>
    </li>
  );
}

export { Card };
