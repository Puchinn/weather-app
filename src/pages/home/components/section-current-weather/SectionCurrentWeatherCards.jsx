import { Card } from "./Card";

function SectionCurrentWeatherCards({ cards = [] }) {
  const cardsItems = cards.map((card) => (
    <Card key={card.title} card={card}></Card>
  ));

  return <ul className="grid sm:grid-cols-2 gap-2 max-w-2xl">{cardsItems}</ul>;
}

export { SectionCurrentWeatherCards };
