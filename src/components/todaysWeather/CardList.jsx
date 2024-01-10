import { Card } from "./card";

function CardList({ arrayOfData }) {
  const cards = arrayOfData.map((card) => (
    <Card key={card.time} data={card}></Card>
  ));

  return (
    <div className="bg-light-primary-dark max-w-md p-5 my-2 space-y-1 rounded-lg">
      <p>Today&apos;s weather </p>
      <ul className="flex justify-around">{cards}</ul>
    </div>
  );
}

export { CardList };
