import { Card } from "./Card";

function SectionForecast({ forecastData = [] }) {
  const cards = forecastData.map((card) => (
    <Card key={card.dayInfo.date} forecastData={card.dayInfo}></Card>
  ));

  return (
    <div className="max-w-lg py-2">
      <p className="font-bold">3-Day Forecast</p>
      <ul>{cards}</ul>
    </div>
  );
}

export { SectionForecast };
