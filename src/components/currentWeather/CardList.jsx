import { Card } from "./Card";
function CardList({ formatedArray }) {
  const cardsItems = formatedArray.map((card) => (
    <Card key={card.title} data={card}></Card>
  ));

  return <ul className="grid grid-cols-2 gap-5 max-w-2xl">{cardsItems}</ul>;
}

export { CardList };
