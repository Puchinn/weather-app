import { Card } from "./Card";

function CardList() {
  /*
  TODO: add props, make component dinamic
  */
  return (
    <ul className="grid grid-cols-2 gap-5 max-w-2xl">
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </ul>
  );
}

export { CardList };
