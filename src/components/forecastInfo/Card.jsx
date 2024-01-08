function Card() {
  /*
  TODO: add props, make component dinamic
  */
  return (
    <li className="flex justify-between items-center border-b border-b-light-primary-dark p-3 text-lg">
      <p>Mon</p>
      <p>
        <span className="text-2xl">☀️</span> Sunny
      </p>
      <p>
        <span className="font-bold">36°C</span>/22°C
      </p>
    </li>
  );
}

export { Card };
