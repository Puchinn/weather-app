import { Card } from "./Card";

function Forecast() {
  /*
  TODO: add props, make component dinamic
  */
  return (
    <div className="max-w-lg py-2">
      <p className="font-bold">3-Day Forecast</p>
      <ul>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </ul>
    </div>
  );
}

export { Forecast };
