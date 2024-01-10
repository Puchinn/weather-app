import { Card } from "./Card";

function Forecast({ data }) {
  const cards = data.map((card) => (
    <Card key={card.dayInfo.date} data={card.dayInfo}></Card>
  ));

  return (
    <div className="max-w-lg py-2">
      <p className="font-bold">3-Day Forecast</p>
      <ul>{cards}</ul>
    </div>
  );
}

export { Forecast };
