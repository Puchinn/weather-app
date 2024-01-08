import { Card } from "./card";

function CardList() {
  /*
  TODO: add props, make component dinamic
  */
  return (
    <div className="bg-light-primary-dark max-w-md p-5 my-2 space-y-1 rounded-lg">
      <p>Today&apos;s weather </p>
      <ul className="flex justify-around">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </ul>
    </div>
  );
}

export { CardList };
