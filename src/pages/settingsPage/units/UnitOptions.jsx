import { useUnits } from "./useUnits";
import { Button } from "../Button";

function UnitOptions({ title, id }) {
  const { values, setActive, activeValue } = useUnits({ id: id });

  const options = values.map((unit) => (
    <Button
      key={unit}
      active={activeValue}
      value={unit}
      onClick={setActive}
    ></Button>
  ));

  return (
    <section>
      <p className="font-bold">{title}</p>
      <div className="mt-2 bg-primary-dark flex p-1 rounded-lg gap-x-1">
        {options}
      </div>
    </section>
  );
}

export { UnitOptions };
